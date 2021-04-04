const  path = require('path')

module.exports = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '1234',
        database: 'resistajus',
        filename:   path.resolve(__dirname, "src", "database", "database.sql")
    },
    migrations: {
        directory: path.resolve(__dirname, "src", "database", "migrations")
    },

}


