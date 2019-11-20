
var express = require('express');
var db_coder = require('../models/crudCoder'); 

var router = express.Router();
var path = require('path');


router.get("/coderSignup", function (req, res) {
    res.sendFile(path.join(__dirname, ("../views/coderSignup.html")));
});

router.get("/jobFeed", function (req, res) {
    res.render('jobFeed', {jobPost: jobPost})
});

router.get("/coderList", function(req, res){
    logdb = db_coder.findAll()
    console.log("this is from userHTMLRoutes"+ logdb)
}); 

router.get("/coderSignin", function(req,res){
    res.sendFile(path.join(__dirname, ("../views/coderSignin.html"))); 
}); 


var link = "https://images.unsplash.com/photo-1543145223-1f9043516739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80";
var skills = ["the coder from born"]
router.get("/coder/:coderName", function (req, res) {
    res.render("coderProfile", {
        userImage: link,
        name: "kaan", 
        lastname: "kisacik",
        position: "engineer",
        userDescription: "I am an software engineer and have been working as software developer last 5 years",
        skill: skills
    });

});


module.exports = router;