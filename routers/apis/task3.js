const express = require('express');
const app = express();
const PORT = 3000;
 
// Single routing
// const router = express.Router();
 
app.post('/users', function (req, res,) {
  
})
 

 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});