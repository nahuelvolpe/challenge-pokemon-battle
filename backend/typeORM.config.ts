import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'sqlite',
  database: 'db/sql',
  synchronize: true,
  entities: [`./src/**/**.entity{.ts,.js}`],
  migrations: [`./src/migrations/*{.ts,.js}`],
});
