var express = require('express')
, router = express.Router();

var mysql = require('../app');
router.post('/acount', function (req, res, next) {
   // var matkhau = req.body.matkhau;
   // var taikhoan = req.body.taikhoan;
    var sql = 'select * from viewTaiKhoan where taikhoan =? and matkhau =?';
 
        mysql.conn.query(sql,[req.body.taikhoan,req.body.matkhau],function(err,results){
            if(err) throw err;
            if(results[0])
            {
                return res.json({
                    message : true
                })
            }
            else{
                
                return res.json({
                    message : false
                })
            }
        });
});

router.post('/changepassword', function (req, res, next) {
    
    var matkhau = req.body.matkhau;
    var taikhoan = req.body.taikhoan;
    var sql = "UPDATE `taikhoan` SET `matkhau`= ? WHERE taikhoan = ?";
    if(taikhoan && matkhau)
    {
        mysql.conn.query(sql,[taikhoan,matkhau],function(err,results){
            if(err) throw err;
            else{
                return res.json({
                    message : 'Mật khẩu đã được thay đổi'
                })
            }
        });
    }
    else
    {
        return res.json({
            message : "Có lỗi xảy ra"
        })
    }

});

module.exports = router;