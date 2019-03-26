const jsonServer = require('json-server')
const server = jsonServer.create()
const routerka = jsonServer.router('db.ka.json')
const routeren = jsonServer.router('db.en.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})
server.use('/ka',routerka)
server.use('/en',routeren)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
