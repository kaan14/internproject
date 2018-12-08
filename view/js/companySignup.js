
console.log("connected companysignup page");


//get company information on submit 
$("#companySubmit").on("click", function (event) {
    event.preventDefault();
    var companyName = $("#companyName").val().trim();
    var businessType = $("#businessType").val().trim();
    var companyWebsite = $("#companyWebsite").val().trim();
    var companyPhone = $("#companyPhone").val().trim();
    var contactPerson = $("#contactPerson").val().trim();
    var contactPersonLastname = $("#contactPersonLastname").val().trim();
    var emailAddress = $("#emailAddress").val().trim();
    var contactPersonPhone = $("#contactPersonPhone").val().trim();
    var contactPersonExtension = $("#contactPersonExtension").val().trim();
    var companyDescription = $("#companyDescription").val();
    var techologiesUsed = $("#techologiesUsed").val();
    var password1 = $("#password1").val().trim();
    var password2 = $("#password2").val().trim();

    var companyInfo = {
        companyName: companyName,
        businessType: businessType,
        companyWebsite: companyWebsite,
        companyPhone: companyPhone,
        contactPerson: contactPerson,
        contactPersonLastname: contactPersonLastname,
        emailAddress: emailAddress,
        contactPersonPhone: contactPersonPhone,
        contactPersonExtension: contactPersonExtension,
        companyDescription: companyDescription,
        techologiesUsed: techologiesUsed,
        password1: password1,
        password2: password2,
    };


    clearInputBoxes();
    console.log(companyInfo);

    $.ajax("/api/companyInfo",{
        type: "POST",
        data: companyInfo
    }).then(
        function () {
            console.log("created new company");
            // Reload the page to get the updated list
            location.reload();
        }
    );

    });



//clear inputboxes
function clearInputBoxes() {
    $("#companyName").val("");
    $("#businessType").val("");
    $("#companyWebsite").val("");
    $("#companyPhone") = val("");;
    $("#contactPerson").val("");;
    $("#contactPersonLastname").val("");;
    $("#emailAddress").val("");;
    $("#contactPersonPhone").val("");;
    $("#contactPersonExtension").val("");;
    $("#companyDescription").val("");
    $("#techologiesUsed").val("");
    $("#password1").val("");
    $("#password2").val("");

}






