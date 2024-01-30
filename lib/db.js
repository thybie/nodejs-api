const mariadb = require('mysql');

const db = mariadb.createConnection({
  host:'192.168.219.153',
  // host:'localhost',
  port:3306,
  user:'ace',
  password:'dolepack',
  database:'kkace'
});

module.exports = db;
