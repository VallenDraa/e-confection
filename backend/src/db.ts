import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { env } from './constant.js';

export const appDataSource = new DataSource({
  type: 'mysql',
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
});
