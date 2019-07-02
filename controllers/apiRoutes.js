var express = require('express');

var router = express.Router();
var nodemailer = require("nodemailer");
var fs = require ('fs');


//Email function here
function emailSend(data) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'internme.4@gmail.com',
            pass: 'internme1403!!',
        }
    });
    var mailOption = {
        from: 'internme.4@gmail.com',
        to: data.body.emailAddress,
        subject: 'Thanks for submitting application',
        text: 'something very important'
    };
    transporter.sendMail(mailOption, function (err, info) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Email sent : " + info.response);
        }
    })
}

//database import 
var db_company = require('../models/crudCompany'); 
var db_user = require("../models/crudUsers"); 


//company info to database and send an e-mail to user
router.post("/api/companyInfo", function (req, res) {
    db_company.create(req.body.companyName, req.body.companyPhone, req.body.emailAddress);
    //emailSend(req);
    fs.appendFile("./files/company.txt", "{" + req.body.companyName + "}, " + "\n", function(err){
        
        if (err) throw err;
    }); 
});

router.post("/api/userInfo", function(req, res){
    db_user.create(req.body.firstname, req.body.lastname, req.body.email, req.body.age, req.body.gender, req.body.phone, req.body.city, req.body.degree, req.body.skills, req.body.fieldOfInterest, req.body.workinExperience, req.body.portfolio, req.body.description, req.body.linkedin, req.body.github, req.body.userTechUsed, req.body.password)
    
    console.log("users info is succesfully created")
})

router.post("/api/userInfo", function(req, res){
    console.log(req.body)
    db.read(req.body); 
})


module.exports = router; 