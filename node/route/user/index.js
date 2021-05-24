var express = require('express');
var router=express.Router();
const db=require('../../db/index')


router.post('/',function(req, res) {
    // 这时通过 req.body就可以拿到请求体中的数据了
    // console.log(req.body)
    db.query("select * from users WHERE name='"+req.body.name+"';", function(err, data) {
        if(err) {
            console.log(err)
        } else {
            // console.log(data.length)
            // sql执行成功后获取到的数据
            // data.forEach(element => {
            //     if(element.name==req.body.name){
            //         // break
            //     }else{
            //         console.log(123)
            //     }
            // });
            // const param=JSON.stringify({status:400,message:'不存在该账号'})
            // res.send(param)
            // res.end()
            // console.log(222)
            if(data.length!==0){
                if(req.body.password==data[0].password){
                    const param=JSON.stringify({status:200,message:'success'})
                    res.send(param)
                    res.end()
                }else{
                    const param=JSON.stringify({status:300,message:'用户名或密码错误'})
                    res.send(param)
                    res.end()
                }
            }else{
                const param=JSON.stringify({status:400,message:'该用户不存在'})
                res.send(param)
                res.end()
            }
        }
    })
})
router.post('/reg',function(req, res) {
    // 这时通过 req.body就可以拿到请求体中的数据了
    const param=JSON.stringify({status:200,message:'success'})
    res.send(param)
    res.end()
})


module.exports=router