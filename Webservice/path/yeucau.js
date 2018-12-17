var express = require('express')
, router = express.Router();

var mysql = require('../app');

router.post('/',function(req,res,next){
    var sql = "insert into `yecau` values(?,?,?) ";
        mysql.conn.query(sql,[req.body.madg,req.body.tensach,req.body.tentg],function(err,results){
            if(err) 
                {
                    return res.json({
                        message : err.message
                    })
                }
            else{
                return res.json({
                    message : true
                })
            }
        });
    });
module.exports = router;