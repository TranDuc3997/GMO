var express = require('express')
, router = express.Router();

var mysql = require('../app');
router.get('/', function (req, res, next) {
    var sql = "select * from sachview";
    mysql.conn.query(sql,function(err,results){
        if(err) throw err;
        res.send(results);
    });
});
router.get('/idSach/:masach',function(req,res,next){
    var sql = 'select * from SachView where MaSach = ?';
        mysql.conn.query(sql,[req.params.masach],function(err,results){
            if(err) throw err;
            if(results[0])
                res.send(results);
            else{
             return res.json({
                 message : "Không tồn tại mã sách"
             })
            }
        });
    });
    router.post('/id',function(req,res,next){
        var sql = 'select * from SachView where MaSach = ?';
            mysql.conn.query(sql,[req.body.masach],function(err,results){
                if(err) throw err;
                if(results[0])
                    res.send(results);
                else{
                 return res.json({
                     message : "Không tồn tại mã sách"
                 })
                }
            });
        });
module.exports = router;