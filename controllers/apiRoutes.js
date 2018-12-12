var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");


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

//var dbase = require('.......'); 

//company info to database and send an e-mail to user
router.post("/api/companyInfo", function (req, res) {
    console.log(req.body);
    res.send("thanks for signup");
    emailSend(req); 





});


module.exports = router; 