var express=require('express')
var app=express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
var user=require('/express/routers/apis/controllers/usercontroller.js')

var role=require('/express/routers/apis/controllers/rolecontroller.js')

app.use('/users',user); 
app.use('/role',role)

app.listen(2300,()=>{
    console.log("server running on 2300 port")
})