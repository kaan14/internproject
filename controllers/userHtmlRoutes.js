var express = require('express'); 
var router = express.Router(); 

var path = require('path'); 


router.get("/userSignUp", function(req, res){
    res.sendFile(path.join(__dirname,("../view/userSignUp.html"))); 
});



var link = "https://images.unsplash.com/photo-1544558324-5c83df7cfdd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"; 
var userList = {name: "kaan", lastname: "kisacik", position: "engineer"}; 


router.get("/username", function(req, res){
    res.render('userProfile', {userImage: link, name: "kaan", lastname: "kisacik", position:"engineer"});

});

module.exports = router;