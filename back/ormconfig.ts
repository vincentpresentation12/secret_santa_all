import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'secret_santa',
  entities: ['dist/src/**/*.entity{.ts,.js}'],
  synchronize: true,
};
export default config;
