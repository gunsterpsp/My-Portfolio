

function sendMail(params) {
    
    var tempParams = {
        fullName: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };

    emailjs.send("gmail", "template_jb8w8ch", tempParams)
    .then(function(res){
        return '<h1>Hellllo</h1>'
    });

    
    document.getElementById("form-1").reset();


}

