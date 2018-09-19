import chalk from 'chalk';
import logger from '../back-end/logger';

logger.info(chalk.green(`I am starting the ${process.env.NODE_ENV} server...`));
