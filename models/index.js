var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyAkUdfhop4-3PBYgRaQYHirzfxOMxd15QQ",
    authDomain: "intern-ee7d7.firebaseapp.com",
    databaseURL: "https://intern-ee7d7.firebaseio.com",
    projectId: "intern-ee7d7",
    storageBucket: "intern-ee7d7.appspot.com",
    messagingSenderId: "395664293862"
  };
  firebase.initializeApp(config)
  
  var database = firebase.database();

  module.exports = database;
