//server.js
import app from './app';
import logger from './logger';

const port = 4000;

app.listen(process.env.PORT || port, err => {
  if(err) {
    logger.error(err);
  }
})
