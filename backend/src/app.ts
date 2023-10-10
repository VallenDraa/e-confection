import 'reflect-metadata';

import express from 'express';
import { env } from './constant.js';
import { logger } from './utils/logger.js';
import { appDataSource } from './db.js';
import cors from 'cors';

export const main = async () => {
  logger?.info(`Starting server on ${env.NODE_ENV} mode.`);
  const app = express();

  // Parse incoming JSON request body
  app.use(express.json());

  // Parse incoming request body in URL
  app.use(express.urlencoded({ extended: false }));

  // Setup allowed client url
  app.use(cors({ origin: [env.ALLOWED_ORIGIN] }));

  // Starts the http server, immediately exit if it fails.
  app
    .listen(env.PORT, async () => {
      logger?.info(`Listening on port ${env.PORT}.`);

      try {
        await appDataSource.initialize();
        logger?.info('Connected to database.');
      } catch (error) {
        logger?.error(
          `${
            (error as any).message
          }. Fail to connect to the database,  Exiting program!`,
        );
        process.exit(1);
      }
    })
    .on('error', (error) => {
      logger?.error(
        `${
          (error as any).message
        }. Fail to start HTTP server, Exiting program!`,
        error,
      );
      process.exit(1);
    });
};

main();
