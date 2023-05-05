var express=require('express');
var router=express.Router();
var uuid=require('uuid')
var users=require('/express/users.js')

 
router.get('/details',(req,res)=>{
   res.send(users)
})

router.get('/:id',(req,res)=>{
  
    var found=users.some(user=>user.id=== parseInt(req.params.id))

    if(found)
    {
        res.send(users.filter(user=>user.id===parseInt(req.params.id)))
    }
    else
    {
        res.sendStatus(400)
    }
})

router.post('/',(req,res)=>{
    const newUser={
        id:uuid.v4(),
        name: req.body.name,
        email: req.body.email,
    }
     
//   users.push(newUser)
//   res.send(users)

  res.send(newUser)
    
})


router.put('/:id',(req,res)=>{
    var found=users.some(user=>user.id===parseInt(req.params.id))
    if(found)
    {
        const updateUser=req.body;
        console.log(updateUser)
        users.forEach(user => {
            if(user.id===parseInt(req.params.id)){
                console.log(user.name)
                user.name=updateUser.name?updateUser.name:user.name;
                console.log(updateUser.name)
                console.log(user.name)
                user.gmail=updateUser.gmail?updateUser.gmail:user.gmail;
                res.send(user)
                console.log(user)
            }
            
        });
    }
    else{
        res.sendStatus(400)
    }
})


router.delete('/:id',(req,res)=>{
    var found=users.some(user=>user.id===parseInt(req.params.id))
    console.log(found)
    if(found)
    {
        users=users.filter(user=>user.id !== parseInt(req.params.id))
        res.send("message deleted"+users)
        
    }
})



module.exports=router