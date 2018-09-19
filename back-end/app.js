import jsonServer from 'json-server';
import path from 'path';
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({static: path.join(__dirname, '../front-end/build')})

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../front-end/build/index.html'))
})

export default server;
