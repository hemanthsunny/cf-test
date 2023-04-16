import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Oslr2020',
  database: 'soundproof',
  entities: ['dist/**/*.entity.js'], // Use .js as using build folder
  migrations: ['dist/db/migrations/*.js'],
  seeds: ['src/seeds/*.seed.ts'],
  synchronize: false, // to sync with database in real-time
  logging: true,
};

export default new DataSource(dataSourceOptions);
