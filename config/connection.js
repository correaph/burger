// Set up MySQL connection.
var mysql = require("mysql");

// Make connection.
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'PHMR',
    port: 3306,
    password: 'Udi07phMt!PHMR',
    database: 'burgers_db'
});
connection.connect(function(err) {
    if (err) {
        console.log("Error on connecting to MySQL: " + err.stack);
    }
    console.log("Connected to MySQL as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;