var firebase = require("firebase");


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAkViEvlIf3Sfl-XnfUb2bkPb3ZNLrpuNo",
    authDomain: "internme-71e65.firebaseapp.com",
    databaseURL: "https://internme-71e65.firebaseio.com",
    projectId: "internme-71e65",
    storageBucket: "internme-71e65.appspot.com",
    messagingSenderId: "806511545877"
  };
  



var appFirebase = firebase.initializeApp(config);
var database = appFirebase.database(); 
 
module.exports = database;
