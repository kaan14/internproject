var express = require('express'); 
var db = require('../models/crudCompany')
var router = express.Router(); 
var path = require('path'); 




router.get("/", function(req, res){
    console.log("file is sending")
    res.sendFile(path.join(__dirname,("../views/main.html"))); 
}); 

router.get("/companySignin", function(req, res){
    res.sendFile(path.join(__dirname, ("../views/companySignin.html"))); 
})

router.get("/companySignup", function(req, res){
    res.sendFile(path.join(__dirname,("../views/companySignUp.html"))); 

})

router.get("/companyList", function(req, res){
    res.render("companiesList", {})
})

var link = "https://images.unsplash.com/photo-1543145223-1f9043516739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80";
var list = ["node.js", "sql", "react.js", "MongoDB", "HTML", "CSS", "Javascript"]; 
router.get("/company/:companyName", function(req, res){
    res.render("companyProfile", {companyLogo: link,
                                companyName: "intern",
                                businessType: "software",
                                companyWebsite: "www.google.com",
                                position : "something", 
                                companyDescription: "We provide software service to companies, while helping our new generation software developers grow and and gain experience.",
                                list: list
    }); 
})


module.exports = router; 