var firebase = require('./index');



var CRUD = {
    create: function(companyName, companyID, jobDescrption, field, notes, skillsNeeded) {
        firebase.ref(`jobs/${companyID}`).set({
            job: {
                companyName: companyName,
                jobDescrption: jobDescrption,
                field: field,
                skillsNeeded: skillsNeeded, //array
                notes: notes
            },
            jobStatus: {
                isDone: false,
                isHired: false,
            }
        });
    }
}

module.exports = CRUD;