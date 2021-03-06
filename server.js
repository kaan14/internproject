
var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

//express instance 
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var apiRoutes = require("./controllers/apiRoutes.js");
var companyHtmlRoutes = require("./controllers/companyHtmlRoutes.js"); 
var userHtmlRoutes = require("./controllers/userHtmlRoutes.js"); 

 app.use(apiRoutes);
 app.use(companyHtmlRoutes);
 app.use(userHtmlRoutes); 

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

