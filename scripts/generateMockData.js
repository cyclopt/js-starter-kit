/* eslint-disable no-console */
import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile("./db.json", json, (err) => {
  if(err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Dummy data generated"));
  }
})
