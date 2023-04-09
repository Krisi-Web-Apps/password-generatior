const database = {
    host: process.env.MYSQL_DATABASE_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_NAME,
}

module.exports = {
    database,
}
