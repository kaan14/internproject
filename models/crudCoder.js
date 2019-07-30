var firebase = require('./index');

var CRUD = {
    create: function(userRName, userlastname, userEmailAddress, portfolio, userPhone, github, linkedin, github, userDescription, userTechologiesUsed, userPassword1) {
        firebase.ref(`users/${userRName}`).set({
            userInfo: {
                firstName: userRName,
                lastName: userlastname,
                email: userEmailAddress,
                phone: userPhone,
                userDescription: userDescription,
                portfolio: portfolio, //should be an array of links for websites, github, linkedin
                linkedin: linkedin, 
                github: github, 
                userTechologiesUsed: userTechologiesUsed,
                userPassword: userPassword1

            }

        });

    },
    findAll: function(){
        firebase.ref('users').once("value", function(snapshot){
            // console.log(snapshot.val()); 
            return(snapshot.val());
        })
        
    },
}


module.exports = CRUD;



// return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   // ...
// });