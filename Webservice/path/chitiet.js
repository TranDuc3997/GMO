var express = require('express')
, router = express.Router();
var mysql = require('../app');
router.get('/muon/:madg',function(req,res,next){
    var sql = 'select * from viewmuon where MaDG = ?';
        mysql.conn.query(sql,[req.params.madg],function(err,results){
            if(err) throw err;
            if(results[0]){
                res.send(results);
            }
            else{
             return res.json([{
                 message : true
             }])
            }
        });
    });
router.get('/phat/:madg',function(req,res,next){
    var sql = 'select * from viewphat where MaDG = ?';
        mysql.conn.query(sql,[req.params.madg],function(err,results){
            if(err) throw err;
            if(results[0])
                res.send(results);
            else{
             return res.json([{
                 message : true
             }])
            }
        });
    });
router.get('/dat/:madg',function(req,res,next){
    var sql = 'select * from viewdatsach where MaDG = ?';
        mysql.conn.query(sql,[req.params.madg],function(err,results){
            if(err) throw err;
            if(results[0])
                res.send(results);
            else{
             return res.json([{
                 message : true
             }])
            }
        });
    });
module.exports = router;