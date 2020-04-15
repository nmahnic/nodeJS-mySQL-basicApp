const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2509',
    database: 'news_portal'
  });
}
