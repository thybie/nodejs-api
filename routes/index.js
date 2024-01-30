var express = require('express');
var router = express.Router();

// require maria.js
const maria = require('../database/connect/maria');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', function(req, res, next) {
  maria.query('CREATE TABLE t_department ('
        +'dept_code INT(11) NOT NULL,'
        +'dept_name VARCHAR(200) NULL DEFAULT NULL COLLATE utf8mb4_general_ci,'
        +'PRIMARY KEY (dept_code) USING BTREE)', function(err, rows, fields) {
    if(!err) {
      res.send(rows); // response send rows
    } else {
      console.log("err : " + err);
      res.send(err); // response send err
    }
  });
});

router.get('/drop', function(req, res, next) {
  maria.query('DROP TABLE t_department', function(err, rows, fields) {
    if(!err) {
      res.send(rows); // response send rows
    } else {
      console.log("err : " + err);
      res.send(err); // response send err
    }
  });
});

router.get('/insert', function(req, res, next) {
  maria.query('INSERT INTO t_department(dept_code,dept_name) VALUES(5001,"ENGLISH")', function(err, rows, fields) {
    if(!err) {
      res.send(rows); // response send rows
    } else {
      console.log("err : " + err);
      res.send(err); // response send err
    }
  });
});

router.get('/select', function(req, res, next) {
  maria.query('SELECT * FROM t_department', function(err, rows, fields) {
    if(!err) {
      res.send(rows); // response send rows
    } else {
      console.log("err : " + err);
      res.send(err); // response send err
    }
  });
});

router.get('/update', function(req, res, next) {
  maria.query('UPDATE t_department SET dept_name="UPD ENG" WHERE dept_code=5001', function(err, rows, fields) {
    if(!err) {
      res.send(rows); // response send rows
    } else {
      console.log("err : " + err);
      res.send(err); // response send err
    }
  });
});

router.get('/delete', function(req, res, next) {
  maria.query('DELETE FROM t_department WHERE dept_code=5001', function(err, rows, fields) {
    if(!err) {
      res.send(rows); // response send rows
    } else {
      console.log("err : " + err);
      res.send(err); // response send err
    }
  });
});

router.get('/api/get/nodejs-api', function(req, res) {
  res.status(200).json({
    "message" : "hello get api nodejs-api"
  });
});

router.post('/api/post/nodejs-api', function(req, res) {
  res.status(200).json({
    "message" : "hello post api nodejs-api"
  });
});

module.exports = router;
