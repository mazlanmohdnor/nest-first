import { join } from 'path';
import { User } from 'src/users/user.entity';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const database: MysqlConnectionOptions = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'testuser',
    password: 'testuser',
    database: 'ion_techouz',
    entities: [join(__dirname, '/../**/**.entity{.ts,.js}')],
    synchronize: true
};
