var express=require('express');
var router=express.Router();
var user=require('./user/index');

router.use('/login',user)

module.exports=router
