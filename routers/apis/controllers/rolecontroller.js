var express=require('express');
var router=express.Router();
router.get('/details',(req,res)=>{
    var data=[
        {name:"chaithanya",age:20},
        {name:"chandu",age:25},
        {name:"mahesh",age:26}
    ]
    res.send(data)
})

module.exports=router