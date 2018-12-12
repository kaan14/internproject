var express = require('express'); 
var router = express.Router(); 

var path = require('path'); 


router.get("/userSignUp", function(req, res){
    res.sendFile(path.join(__dirname,("../view/userSignUp.html"))); 
})


module.exports = router;