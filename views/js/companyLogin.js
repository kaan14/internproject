
console.log("script connected"); 
//get username and password

$("#companyLogin").on("click", function(){
    var username = $("#companyUsername").text(); 
    var password = $("#companyPassword").text(); 

    console.log(username +" "+password); 


}); 