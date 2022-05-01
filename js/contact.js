const form = document.querySelector("form");
const contactName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const contactEmail = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const contactSubject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const contactMessage = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const passedValidationMsg = document.querySelector(".validation-passed");

function validateForm(event) {
    event.preventDefault();

    let validationPassed = true;

    if (checkLength(contactName.value, 5)) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
        validationPassed = false;
    }

    if(validateEmail(contactEmail.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        validationPassed = false;
    }

    if (checkLength(contactSubject.value, 15)) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
        validationPassed = false;
    }

    if (checkLength(contactMessage.value, 25)) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
        validationPassed = false;
    }

    if (validationPassed) {
        form.submit();
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if(value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
 }
