"use strict";

//Validate form
function validateContact() {
    var inputs = document.getElementsByName("input");
    
    var error = 0;  //count how many errors
    var blank = 0;  //count how many blanks

    for (var i = 0; i < inputs.length; i++) {
        var id = inputs[i].getAttribute("id");

        var message ;  //store the validating message
        removeMessage(inputs[i]);   //remove old messages

        //validate the input value
        //check empty field
        if (inputs[i].validity.valueMissing) {         
            blank++;
        } 
        else if ((id == "mail" || id == "mailR") && inputs[i].validity.typeMismatch) {  
            message = "<p class='message'>Invalid email! Ex: abc@gmail.com</p>";   
            inputs[i].insertAdjacentHTML("beforeBegin", message);
            error++;
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

function sendMessage() {
    if (validateContact()) {
        window.alert("Your message has been sent successfully!");
    }
}

//remove the previous mesaage
function removeMessage(element) {
    var p = element.previousElementSibling;
    if (p != null && p.nodeName == "P") {
        p.remove();
    }
}