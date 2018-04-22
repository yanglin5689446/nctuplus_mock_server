// server.js
const jsonServer = require('json-server')
const routes = require('./route.json')
const seed = require('./seed/index.js')

const server = jsonServer.create()
const router = jsonServer.router(seed())
const middlewares = jsonServer.defaults()

server.use(jsonServer.rewriter(routes))
server.use(middlewares)
server.use(function(req,res,next){setTimeout(next, 500)}); // Add delay for all requests
server.use(router)

server.listen(9487, () => {
  console.log('JSON Server is running')
})