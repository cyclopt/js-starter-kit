import jsonServer from 'json-server';
import path from 'path';
const server = jsonServer.create()
const db = process.env.NODE_ENV === 'production' ? 'db-prod.json' : 'db.json';
const router = jsonServer.router(db);
let middlewares = jsonServer.defaults()
if(process.env.NODE_ENV === 'production') {
  middlewares = jsonServer.defaults({static: path.join(__dirname, '../front-end/build')})
}

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

if(process.env.NODE_ENV === 'production') {
  server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../front-end/build/index.html'))
  })
}

export default server;
