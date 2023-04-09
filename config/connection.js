'use strict';

const mysql = require('mysql');

const { database } = require('../config/configuration');

const connection = mysql.createConnection(database);

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }

    console.log('Connected to database as id ' + connection.threadId);
});

module.exports = connection;
