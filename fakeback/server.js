const jsonServer = require('json-server')
const server = jsonServer.create()
const routerka = jsonServer.router('db.ka.json')
const routeren = jsonServer.router('db.en.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use('/ka',routerka)
server.use('/en',routeren)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
