var express = require('express')
, router = express.Router();

var mysql = require('../app');

router.post('/',function(req,res,next){
    
    var sql_checkSL = 'select * from datonline where madg = ?'
    var sql_check = 'select * from viewmuon where madg = ?'
    var sql_phat = 'select * from viewphat where madg = ?'
    mysql.conn.query(sql_checkSL,req.body.madg,function(err,results){
        if(err) return res.json({
            message:err.message + " mot"
        })
        if(results.length>2){
            return res.json({
                message : "Vượt qua số lần đặt sách"
            })
        }
        else{
            mysql.conn.query(sql_phat,req.body.madg,function(err,results){
                if(err) return res.json({
                    message:err.message + "hai"
                })
                if(results[0]){
                    return res.json({
                        message : "Thành viên chưa đóng phạt"
                    })
                }
                else{
                    mysql.conn.query(sql_check,req.body.madg,function(err,results){
                        if(err) return res.json({
                            message:err.message + "ba"
                        })
                        if(results[0]){
                            return res.json({
                                message : "Thành viên chưa trả sách"
                            })
                        }
                        else{
                            var sql = "insert into `datonline` values(?,?,CURDATE()+2,CURDATE())";
                        mysql.conn.query(sql,[req.body.masach,req.body.madg],function(err,results){
                            if(err) 
                                {
                                    return res.json({
                                        message : err.message + "bon"
                                    })
                                }
                            else{
                                var sql_up = "update sach set soluong = soluong - 1 where masach =?";
                                mysql.conn.query(sql_up,req.body.masach,function(err,results){
                                    if(err){
                                        return res.json({
                                        message : err.message +"nam"
                                         })
                                    }
                                    else
                                    return res.json({
                                        message : "true"
                                })
                            });
                        }   
                        });
                    }
                    
                    });    
                }
            });
        }
    });//end

  
});
router.post('/xoadat',function(req,res,next){
    var sql = 'DELETE FROM datonline WHERE MASACH = ? AND MADG = ?';
   
    mysql.conn.query(sql,[req.body.masach,req.body.madg],function(err,results){
        if(err) 
            {
                return res.json({
                    message : err.message
                })
            }
        else{
                var sql_up = "update sach set soluong = soluong + 1 where masach =?";
                mysql.conn.query(sql_up,req.body.masach,function(err,results){
                    if(err){
                        return res.json({
                        message : err.message +"nam"
                        })
                    }
                    else
                    return res.json({
                        message : "true"
                })
            });
        }
    });
});
module.exports = router;