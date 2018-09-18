import express from 'express';
import path from 'path';

/*eslint-disable no-console*/

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '../front-end/build/')));

app.get('/users', (req, res) => {
  res.json([
    {"id": 1},
    {"id": 2},
    {"id": 3}
  ]);
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../front-end/build/index.html"));
});

app.listen(port, err => {
  if(err) {
    console.log(err);
  }
})
