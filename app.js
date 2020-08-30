(function () {
    var logoWarning= document.getElementById("warning")
    var buttonEmail= document.getElementById("button_email")
    var textValidEmail= document.getElementById("text_valid_email")
    var inputEmail= document.getElementById("input_email")

    buttonEmail.addEventListener("click", function (){
        var email= inputEmail.value
        var match= email.match(/[a-zA-Z0-9.]+@[a-zA-Z0-9]+.[a-zA-Z]+/)

        if (!match) {
            logoWarning.classList.remove("hidden")
            textValidEmail.classList.remove("hidden")
       } else {
            logoWarning.classList.add("hidden")
            textValidEmail.classList.add("hidden")
            inputEmail.value=""
        }

    })

})()