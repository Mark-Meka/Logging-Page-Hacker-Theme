$(document).ready(function(){
    $(".input").focus(function(){
        $(this).css("background-color","#052103")
    });
    $(".input").blur(function(){
        $(this).css("background-color","#333333")
    });

    // Display the message box when the password field is focused
    $("#password").focus(function() {
        $("#message").css("display", "block");
    });

    // Hide the message box when the password field loses focus
    $("#password").blur(function() {
        $("#message").css("display", "none");
    });

    $("#password").on('input', function() {
        validatePassword();
    });
});

function validatePassword() {
    var myinput = document.getElementById("password");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");

    var lowercase=/[a-z]/g;
    if(myinput.value.match(lowercase)){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }
    else{
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    var uppercase=/[A-Z]/g;
    if(myinput.value.match(uppercase)){
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }
    else{
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    var numbers=/[0-9]/g;
    if(myinput.value.match(numbers)){
        number.classList.remove("invalid");
        number.classList.add("valid");
    }
    else{
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    if(myinput.value.length>=8){
        length.classList.remove("invalid");
        length.classList.add("valid");
    }
    else{
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

function validLogin(){
    const usernameInput = document.getElementById("username").value;
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    validatePassword(); // Ensure password validation is checked

    const validUser = "Mark";
    const validEmail = "marcomeka2003@gmail.com";
    const validPass = "Mark@123";

    // Check if all password conditions are valid
    const letterValid = document.getElementById("letter").classList.contains("valid");
    const capitalValid = document.getElementById("capital").classList.contains("valid");
    const numberValid = document.getElementById("number").classList.contains("valid");
    const lengthValid = document.getElementById("length").classList.contains("valid");

    if(letterValid && capitalValid && numberValid && lengthValid){
        if(usernameInput == validUser && emailInput == validEmail && passwordInput == validPass) {
            alert("Congratulations 🎉🎊");
        } else {
            alert("❌ Please check your User, Email, and Password ❌");
        }
    } else {
        alert("Check password conditions");
    }
}
