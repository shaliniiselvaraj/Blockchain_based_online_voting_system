
const form = document.querySelector('#form')
var express = require('express');
var app = express();

var clicked = false;
console.log(username.value);

form.addEventListener('submit', (e) => {

    if (!validateInputs()) {
        e.preventDefault();
    }
    validate(e);
})

function validateInputs() {
    const usernameVal = username.value.trim()
    let success = true

    if (usernameVal === '') {
        success = false;
        setError(username, 'Aadhar Number is required')
    }
    else {
        setSuccess(username)
    }

    return success;

}
function validate(event, username) {
    console.log("event", event);
    event.preventDefault();


    const usernameVal = username.value.trim();
    console.log(usernameVal);
    if (app.UserController()) {
        console.log("/form.html");
        setSuccess(username);
        window.open("./form.html", "_self");
    } else {
        success = false;
        setError(username, 'Provide Valid Aadhar Number')
    }
}

function handleClick() {
    if (!clicked) {
        // (B1) SET CLICKED TO TRUE
        clicked = true;
        console.log(clicked);
        swal("Congrats!", "You've successfully voted!!", "success");
    } else {
        console.log(clicked);
        swal({
            text: "You've already voted!!",
        });

    }

}

//element - password, msg- pwd is reqd
function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
