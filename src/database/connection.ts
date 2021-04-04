import path from 'path'
const db = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '1234',
        database: 'resistajus',
        filename: path.resolve(__dirname, 'database.sqlite')
    }
});

export default db