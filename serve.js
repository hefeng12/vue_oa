var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const route = require('./route/index')
const db = require('./db/index')
// app.use(cors)

// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     // res.header("X-Powered-By",' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });
app.use( function(req, res, next) {
    var origin = req.headers.origin;
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', 'true');
    next(); 
});
// 考虑到post的请求的参数在请求体内 req.body 所以要安装body-parser来解析请求体中的数据
// 安装body-parser的命令 npm install body-parser --save

// 已解析表单提交数据为例 application/x-www-form-urlencoded
// extended: false 值是false时解析值是“String”或“Array” 值是true的时候可以解析任意类型的数据
// var urlencodeParser = bodyparser.urlencoded({extended: false})
app.use(bodyParser.json());


app.use('/api',route)


app.listen(3000)