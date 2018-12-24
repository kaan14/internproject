var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var fs = require ('fs');



function emailSend(data) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'internme.4@gmail.com',
            pass: 'Internme1403!',
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
var dbCompany = require('../models/crudCompany.js'); 



//company info to database and send an e-mail to user
router.post("/api/companyInfo", function (req, res) {
    
    

    fs.appendFile("./files/company.txt", "{" + req.body.companyName + "}, " + "\n", function(err){
        console.log("read err")
        if (err) throw err;
    }); 

    // dbCompany.create(req.body).then(function(dbCompany){
    //     res.json(dbCompany)
    // })
    console.log(req.body);
    res.send("thanks for signup");
    emailSend(req);



});


module.exports = router; 