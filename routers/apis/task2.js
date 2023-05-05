var express=require('express');
var app=express();
var res=require('/express/routers/apis/task1.js');
app.use('/res',res)
app.listen(1000,()=>{
    console.log("server running on 1000 poirt")
})
