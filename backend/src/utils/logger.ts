import { pino } from 'pino';
import { env } from '../constant.js';

export const logger = env.ENABLE_LOGGING ? pino() : undefined;
