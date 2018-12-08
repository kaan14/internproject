console.log("connected userSignup page");


//get company information on submit 
$("#userSubmit").on("click", function (event) {
    event.preventDefault();
    var userRName = $("#userRName").val().trim();
    var userlastname = $("#userlastname").val().trim();
    var username = $("#username").val().trim();
    var userEmailAddress = $("#userEmailAddress").val().trim();
    var portfolio = $("#portfolio").val().trim();
    var userPhone = $("#userPhone").val().trim();
    var linkedin = $("#linkedin").val().trim();
    var github = $("#github").val().trim();
    var userDescription = $("#userDescription").val();
    var userTechologiesUsed = $("#userTechologiesUsed").val();
    var userPassword1 = $("#userPassword1").val().trim();
    var userPassword2 = $("#userPassword2").val().trim();

    var userInfo = {
        userRName: userRName,
        userlastname: userlastname,
        username: username,
        userEmailAddress: userEmailAddress,
        portfolio: portfolio,
        userPhone: userPhone,
        linkedin: linkedin,
        github: github,
        userDescription: userDescription,
        userTechologiesUsed: userTechologiesUsed,
        userPassword1: userPassword1,
        userPassword2: userPassword2,
    };


    clearInputBoxes();
    console.log(userInfo);

    $.ajax("/api/userInfo",{
        type: "POST",
        data: userInfo
    }).then(
        function () {
            console.log("created new user");
            // Reload the page to get the updated list
            location.reload();
        }
    );

    });



//clear inputboxes
function clearInputBoxes() {
    $("#userRName").val("");
    $("#userlastname").val("");
    $("#username").val("");
    $("#userEmailAddress").val("");
    $("#portfolio").val("");
    $("#userPhone").val("");
    $("#linkedin").val("");
    $("#github").val("");
    $("#userDescription").val("");
    $("#userTechologiesUsed").val("");
    $("#userPassword1").val("");
    $("#userPassword2").val("");

}