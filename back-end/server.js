//server.js
import app from './app';
import logger from './logger';

const port = 4000;

app.listen(port, err => {
  if(err) {
    logger.error(err);
  }
})

// import express from 'express';
// import path from 'path';

// /*eslint-disable no-console*/

//

// const app = express();

// app.use(express.static(path.join(__dirname, '../front-end/build/')));

// app.get('/users', (req, res) => {
//   res.json([
//     {"id": 1},
//     {"id": 2},
//     {"id": 3}
//   ]);
// })

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, "../front-end/build/index.html"));
// });

// app.listen(port, err => {
//   if(err) {
//     console.log(err);
//   }
// })
