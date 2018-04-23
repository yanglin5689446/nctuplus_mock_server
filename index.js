// server.js
const jsonServer = require('json-server')
const chalk = require('chalk')
const routes = require('./route.json')
const seed = require('./seed/index.js')
const render = require('./render')

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

router.render = render

server.listen(config.port, config.host, () => {

  // Output connection message
  const host = config.host === '0.0.0.0' ? 'localhost' : config.host
  const port = config.port
  const root = `http://${host}:${port}`

  console.log()
  console.log(chalk.bold('  Resources'))
  for (let prop in data) {
    console.log(`  ${root}/${prop}`)
  }

  if (routes) {
    console.log()
    console.log(chalk.bold('  Other routes'))
    for (var rule in routes) {
      console.log(`  ${rule} -> ${routes[rule]}`)
    }
  }

  console.log()
  console.log(chalk.bold('  Home'))
  console.log(`  ${root}`)
  console.log()
})