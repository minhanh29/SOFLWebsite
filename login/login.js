"use strict";

/*2.4.6 - c*/ 
//Validate form
function validateForm(name) {
    var inputs = document.forms[name].getElementsByTagName("input");
    var pass = ""; //store password
    var error = 0;  //count how many errors
    var blank = 0;  //count how many blanks

    for (var i = 0; i < inputs.length; i++) {
        var value = inputs[i].value;
        var id = inputs[i].getAttribute("id");

        var message ;  //store the validating message
        removeMessage(inputs[i]);   //remove old messages

        //validate the input value
        //check empty field
        if (inputs[i].validity.valueMissing) {         
            blank++;
        } 
        else {
            //check email
            if ((id == "mail" || id == "mailR") && inputs[i].validity.typeMismatch) {  
                message = "<p class='message'>Invalid email! Ex: abc@gmail.com</p>";   
                inputs[i].insertAdjacentHTML("beforeBegin", message);
                error++;
            }

            //check password
            if ((id == "password" || id == "passwordR")) {  
                pass = value;
                if (inputs[i].validity.tooShort) {
                    message = "<p class='message'>Invalid password! Your password must contain at least 4 characters.</p>";   
                    inputs[i].insertAdjacentHTML("beforeBegin", message);
                    error++;
                }
            }

            //check confirmed password
            if (id == "passwordC" && inputs[i].value != pass) {
                message = "<p class='message'>Confirmed password does not match.</p>";   
                inputs[i].insertAdjacentHTML("beforeBegin", message);
                error++;
            }
        }
    }

    if (blank > 0) {
        window.alert("Please fill out all the fields marked with *");  /*2.4.6 - d*/ 
        return false;
    }
    else if (error > 0) {
        return false;   
    } else {
        return true;
    }
}


//login
function logIn() {
    if (validateForm("login")) {
        window.alert("You have logged in successfully!");  /*2.4.6 - d*/ 
        return true;
    }

    return false;
}


//sign up
function signUp() {
    if (validateForm("signup")) {
        window.alert("You have signed up successfully!");   /*2.4.6 - d*/ 
        return true;
    }

    return false;
}

//set confirmed password validity
setConfirmedPass();
function setConfirmedPass() {
    var pass = document.getElementById("passwordR");   //password
    var conPass = document.getElementById("passwordC");  //confirmed password

    //update the input background when the user's confirming password
    conPass.addEventListener("input", function(event) {
        //check if the passwords match
        if (conPass.value == pass.value) {
            conPass.style.background = "rgb(240, 255, 243) url('../home/valid.png') bottom right/contain no-repeat";
        }
        else {
            conPass.style.background = "rgb(255, 243, 240) url('../home/invalid.png') bottom right/contain no-repeat";
        }
    });

    //remove background when the input is unfocus
    conPass.addEventListener("blur", function(event) {
        conPass.style.background = "none";
    });
}




//remove the previous mesaage
function removeMessage(element) {
    var p = element.previousElementSibling;
    if (p != null && p.nodeName == "P") {
        p.remove();
    }
}