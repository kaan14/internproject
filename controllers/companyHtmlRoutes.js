var express = require('express'); 
var router = express.Router(); 

var path = require('path'); 
router.get("/", function(req, res){
    res.sendFile(path.join(__dirname,("../view/main.html"))); 
}); 

router.get("/companySignUp", function(req, res){
    res.sendFile(path.join(__dirname,("../view/companySignUp.html"))); 

})




module.exports = router; 