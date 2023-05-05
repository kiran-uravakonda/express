var express=require('express')
var app=express()
var router=express.Router();
// var uuid=require('uuid')
var users=require('/express/users.js')
router.post('/',(req,res)=>{
    console.log(req.body)
    res.send(users)
    // console.log(res)
});
module.exports=router;