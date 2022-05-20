


$(".send").click(function sendMail(){
    var fullName = $("#fullName");
    var email = $("#email");
    var message = $("#message");
    
    if(fullName == '' || email == '' || message == '' ) {

        swal("Error", Link);

    }

})