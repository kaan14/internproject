var firebase = require('./index');


var CRUD = {
    create: function(firstName, lastName, email, phone, city, age, gender, degree, skills, fieldOfIntrest, workingExperince, portfolio, description) {
        firebase.ref(`users/${lastName}`).set({
            userInfo: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                age: age,
                gender: gender,
                phone: phone,
                city: city
            },
            profession: {
                lastName: lastName,
                degree: degree,
                skills: skills, //should be an array of skills
                fieldOfIntrest: fieldOfIntrest,
                workingExperince: workingExperince,
                portfolio: portfolio, //should be an array of links for websites, github, linkedin
                description: description
            }
        });
    }
}

module.exports = CRUD;