import z from 'zod';
import dotenv from 'dotenv';

dotenv.config();

export const envValidator = z.object({
  PORT: z.number(),
  ENABLE_LOGGING: z.boolean(),
  NODE_ENV: z.enum(['production', 'development']),
  ALLOWED_ORIGIN: z.string(),
  DB_HOST: z.string(),
  DB_PORT: z.number(),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
  DB_DATABASE: z.string(),
});

export type EnvShape = z.infer<typeof envValidator>;

export const env = envValidator.parse({
  PORT: parseInt(process.env.PORT!),
  ENABLE_LOGGING: process.env.ENABLE_LOGGING === 'true',
  NODE_ENV: process.env.NODE_ENV,
  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: parseInt(process.env.DB_PORT!),
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE,
});
