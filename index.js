var express=require('express');
var app=express();
// app.use(express.json())
// app.use(express.urlencoded({extended:false}))

app.use(require('./routers/apis/result.js'))
app.listen(5000,()=>{
    console.log("server running on 5000 port")
})