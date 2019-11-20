var firebase = require('./index');
var CRUD = {
    create: function(companyName, companyPhone, emailAddress, businessType, companyDescription, usedTech,companyWebsite, contactPersonFirstName, contactPersonEmail, contactPersonLastname) {
        firebase.ref(`companies/${companyName}`).set({
                companyName: companyName,
                companyPhone: companyPhone,
                email: emailAddress,
                // companyWebsite: companyWebsite,

                // businessType: businessType,
                // companyDescription: companyDescription, 
                // usedTech: usedTech,

                // firstName: contactPersonFirstName,
                // lastName: contactPersonLastname,
                // email: contactPersonEmail 
        });
    }, 
    findAll: function(){
        firebase.ref('companies').once('value').
        then (function(snapshot){
            var object = JSON.stringify(snapshot.val().kaan.companyPhone)
            console.log("CrudCompany" + object)
            return object
        }); 
    }
}; 

module.exports = CRUD;