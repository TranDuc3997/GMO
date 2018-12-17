var express = require('express')
, router = express.Router();

var mysql = require('../app');
router.get('/:taikhoan',function(req,res,next){
    var sql = 'select * from docgia where TaiKhoan = ?';
        mysql.conn.query(sql,[req.params.taikhoan],function(err,results){
            if(err) throw err;
            return res.send(results);
            
        });
    });
    router.get('/',function(req,res,next){
        var sql = 'select * from docgia';
            mysql.conn.query(sql,function(err,results){
                if(err) throw err;
                return res.send(results);
                
            });
        });
    module.exports = router;