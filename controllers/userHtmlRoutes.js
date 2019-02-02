var express = require('express');
var router = express.Router();

var path = require('path');

var skills = ["HTML", "CSS", "Javascript", "Node.js", "React.js", "MongoDB", "mySQL"];

router.get("/userSignUp", function (req, res) {
    res.sendFile(path.join(__dirname, ("../views/userSignUp.html")));
});

var companyLogo = "https://images.unsplash.com/photo-1548845219-7702738c3ac8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

var jobPost = [
    {
            logo: companyLogo,
            companyName: "First Tech Company",
            jobDescription: "this oppurtinity includes building a responsive webpage, that has company information",
            techList: skills

    },
    {
            logo: companyLogo,
            companyName: "Second Tech Company",
            jobDescription: "this oppurtinity includes building a responsive webpage, that has company information",
            techList: skills

    }
];



router.get("/jobFeed", function (req, res) {
    res.render('jobFeed', { jobPost: jobPost })
});


var link = "https://images.unsplash.com/photo-1544558324-5c83df7cfdd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80";
var userList = { name: "kaan", lastname: "kisacik", position: "engineer" };



router.get("/user/:username", function (req, res) {
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