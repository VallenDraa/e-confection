import express from 'express';
import { PORT } from './constant.js';
import { logger } from './utils/logger.js';
import 'reflect-metadata';

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

// Starts the http server, immediately exit if it fails.
app
  .listen(PORT, () => {
    logger?.info(`Listening on port ${PORT}`);
  })
  .on('error', () => {
    logger?.error('Fail to start HTTP server. Exiting program!');
    process.exit(1);
  });
