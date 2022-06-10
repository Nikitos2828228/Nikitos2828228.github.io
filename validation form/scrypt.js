const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirmPassword");
const form = document.getElementById("form");

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "formControl error";
    const small = formControl.querySelector("small")
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "formControl success";
}

function validateEmail(emailAddress) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(emailAddress);
}

function validatePhone(phoneNumber) {
    const regex = /\+7\d\d\d\d\d\d\d\d\d\d/;
    return regex.test(phoneNumber);
}

function checkUsername() {
    if (username.value === "") {
        showError(username, "Username is required");
    }
    else {
        showSuccess(username);
    }
}

function checkEmail() {
    if (email.value === "") {
        showError(email, "E-mail is required");
    }
    else if (validateEmail(email)) {
        showSuccess(email);
    }
    else {
        showError(email, "Invalid e-mail");
    }
}

function checkPhone() {
    if (phone === "") {
        showError(phone, "Phone number required");
    }
    else if (validatePhone(phone)) {
        showSuccess(phone);
    }
    else {
        showError(phone, "Invalid phone number")
    }
}

function checkPassword() {
    if (password.value === "") {
        showError(password, "Password is required");
    }
    else {
        showSuccess(password);
    }
}

function checkConfirmPassword () {
    if (password2.value === "") {
        showError(password2, "Please confirm the password");
    }
    else if (password2.value !== password.value) {
            showError(password2, "Passwords should match");
    }
    else {
        showSuccess(password2);
    }
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkUsername();
    checkEmail();
    checkPhone();
    checkPassword();
    checkConfirmPassword();
});