const mysql = require('mysql')

const pool = mysql.createPool({
  connectionLimit : 4,
  host     : '172.20.0.1',
  user     : 'user',
  password : 'password',
  database : 'db',
  port: 3306
});



module.exports = pool