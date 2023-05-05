var express=require('express');
var router=express.Router();
router.get('/value',(req,res)=>{
          res.send("about the tasks")
})
router.get('/',(req,res)=>{
    res.send("all about programs")
})
module.exports=router;