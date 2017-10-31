/*
Here is where you make the connection to the database and export and used by the O.R.M.
*/
var mysql = require('mysql');
var connection = mysql.createConnection({
  port: 3306,
  host: ' wftuqljwesiffol6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'xenbe4o5qhwgyl63',
  password: 'ulj02r7gqcecxik1',
  database: 'cat_db'
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;