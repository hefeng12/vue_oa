var mysql = require('mysql');


var db = mysql.createConnection({
    host: "localhost", // 连接域名
    port: "3306", // 端口号
    user: "root", // 超级管理员
    password: "root123", // 数据库密码
    database: "vue_oa" // 数据库名称
})
db.connect();
// const qu = 'select * from users;'
// const cr="INSERT INTO users ( name, password)VALUES('zy','zy123')"
// db.query(qu, function(err, data) {
//     if(err) {
//         console.log(err)
//     } else {
//         // sql执行成功后获取到的数据
//         //result是一个数组
//         var result = data
//         console.log(result)
//     }
// })

module.exports=db