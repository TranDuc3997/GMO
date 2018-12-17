var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
var http = require("http");
exports.conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "quanlythuvien"
});
exports.query = function (sql, callback) {
    con.query(sql, function (err, results) {
        if (err) throw err;
        return callback(results);
    })
}
app.use(require('./path'));
app.listen(process.env.PORT || 3000,function(){
    console.log('Complete');
  
});