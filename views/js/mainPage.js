
console.log("page connected"); 

$("#companySignUp").on("click", function() {
    console.log("button clicked"); 
    $.ajax("/companySignUp", {
        type: "GET",
        data: data
    }).then(function(data){
        console.log(data); 
    })
}); 