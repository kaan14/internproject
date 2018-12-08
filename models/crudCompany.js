var firebase = require('./index');

var CRUD = {
    create: function(companyName, companyPhone, emailAddress, businessType, companyDescription, usedTech,companyWebsite, contactPersonFirstName, contactPersonEmail, contactPersonLastname) {
        firebase.ref(`companies/${companyName}`).set({
            companyContact: {
                companyName: companyName,
                email: emailAddress,
                companyPhone: companyPhone,
                companyWebsite: companyWebsite
            },
            aboutCompany: {
                companyName: companyName,
                businessType: businessType,
                companyDescription: companyDescription, 
                usedTech: usedTech
            },
            representative: {
                firstName: contactPersonFirstName,
                lastName: contactPersonLastname,
                email: contactPersonEmail
            } 
        });
    }
}

module.exports = CRUD;