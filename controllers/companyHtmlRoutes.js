var express = require('express'); 
var router = express.Router(); 

var path = require('path'); 
router.get("/", function(req, res){
    console.log("file is sending")
    res.sendFile(path.join(__dirname,("../views/main.html"))); 
}); 


router.get("/companySignUp", function(req, res){
    res.sendFile(path.join(__dirname,("../views/companySignUp.html"))); 

})

var link = "https://images.unsplash.com/photo-1543145223-1f9043516739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80";

router.get("/:companyName", function(req, res){
    res.render("companyProfile", {companyLogo: link,
                                companyName: "intern",
                                businessType: "software",
                                position : "something"
    }); 
})




module.exports = router; 