"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'secret_santa',
    entities: ['dist/src/**/*.entity{.ts,.js}'],
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map