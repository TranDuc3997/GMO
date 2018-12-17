var express = require('express')
, router = express.Router();

var mysql = require('../app');

router.get('/',function(req,res,next){
    var sql = 'select * from baivietView';
        mysql.conn.query(sql,function(err,results){
            if(err) throw err;
            return res.send(results);
            
        });
    });
module.exports = router;