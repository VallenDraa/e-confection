import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import * as session from 'express-session';
import mySQLStoreMaker from 'express-mysql-session';
import { ONE_DAY, env } from './constant.js';
import { logger } from './utils/logger.js';
import { appDataSource } from './db.js';

export const main = async () => {
  logger?.info(`Starting server on ${env.NODE_ENV} mode.`);
  const app = express();

  const SessionStore = mySQLStoreMaker(session);

  // Parse incoming JSON request body
  app.use(express.json());

  // Parse incoming request body in URL
  app.use(express.urlencoded({ extended: false }));

  // Setup allowed client url
  app.use(cors({ origin: [env.ALLOWED_ORIGIN] }));

  // Setup session
  app.use(
    session.default({
      name: env.SESSION_NAME,
      secret: env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: ONE_DAY, sameSite: 'none' },
      store: new SessionStore({
        connectionLimit: 10,
        password: env.DB_PASSWORD,
        user: env.DB_USERNAME,
        database: env.DB_DATABASE,
        host: env.DB_HOST,
        port: env.DB_PORT,
        createDatabaseTable: true,
      }),
    }),
  );

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
