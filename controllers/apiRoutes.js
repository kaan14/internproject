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
var db = require('../models/crudCompany'); 

//company info to database and send an e-mail to user
router.post("/api/companyInfo", function (req, res) {
    db.create(req.body.companyName, req.body.companyPhone, req.body.emailAddress);
    //emailSend(req);
    fs.appendFile("./files/company.txt", "{" + req.body.companyName + "}, " + "\n", function(err){
        
        if (err) throw err;
    }); 
});


module.exports = router; 