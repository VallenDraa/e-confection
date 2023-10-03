import { pino } from "pino";
import { ENABLE_LOGGING } from "../constant.js";

export const logger = ENABLE_LOGGING ? pino() : undefined;
