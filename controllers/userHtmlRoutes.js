
var express = require('express');
var db_coder = require('../models/crudCoder'); 

var router = express.Router();
var path = require('path');


router.get("/coderSignUp", function (req, res) {
    res.sendFile(path.join(__dirname, ("../views/userSignUp.html")));
});

router.get("/jobFeed", function (req, res) {
    res.render('jobFeed', {jobPost: jobPost})
});

router.get("/coderList", function(req, res){
    log = db_coder.findAll()
    console.log("log is here" + log)
    // res.render('coderList',{coderList: coderList })
}); 

router.get("/coderSignIn", function(req,res){
    res.sendFile(path.join(__dirname, ("../views/coderSignIn.html"))); 
}); 

router.get("/coder/:coderName", function (req, res) {
    res.render('userProfile', {
        userImage: link,
        name: "kaan",
        lastname: "kisacik",
        position: "engineer",
        userDescription: "I am an software engineer and have been working as software developer last 5 years",
        skill: skills
    });

});


module.exports = router;