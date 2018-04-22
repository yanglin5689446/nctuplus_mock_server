// server.js
const jsonServer = require('json-server')
const chalk = require('chalk')
const routes = require('./route.json')
const seed = require('./seed/index.js')

const config = {
  host: '0.0.0.0',
  port: 9487,
  delay: 500,
}

const data = seed()
const server = jsonServer.create()
const router = jsonServer.router(data)
const middlewares = jsonServer.defaults()

server.use(jsonServer.rewriter(routes))
server.use(middlewares)
server.use(function(req,res,next){setTimeout(next, config.delay)}); // Add delay for all requests
server.use(router)

function prettyPrint(argv, object, rules) {
  const host = argv.host === '0.0.0.0' ? 'localhost' : argv.host
  const port = argv.port
  const root = `http://${host}:${port}`

  console.log()
  console.log(chalk.bold('  Resources'))
  for (let prop in object) {
    console.log(`  ${root}/${prop}`)
  }

  if (rules) {
    console.log()
    console.log(chalk.bold('  Other routes'))
    for (var rule in rules) {
      console.log(`  ${rule} -> ${rules[rule]}`)
    }
  }

  console.log()
  console.log(chalk.bold('  Home'))
  console.log(`  ${root}`)
  console.log()
}

server.listen(config.port, config.host, () => {
  prettyPrint(config, data, routes)
})