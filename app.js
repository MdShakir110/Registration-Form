document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const nameError = document.querySelector(".NameError");
    const userError = document.querySelector(".UserError");
    const emailError = document.querySelector(".emailError");
    const phoneError = document.querySelector(".PhoneError");
    const passError = document.querySelector(".PassError");
    const confPassError = document.querySelector(".ConfPassError");

    nameError.textContent = fullName === "" ? "Please enter your full name" : "";
    userError.textContent = username === "" ? "Please enter your username" : "";
    emailError.textContent = email === "" ? "Please enter your email" : "";
    phoneError.textContent = phoneNumber === "" ? "Please enter your phone" : "";
    passError.textContent = password === "" ? "Please enter your password" : "";
    confPassError.textContent = confirmPassword === "" ? "Please enter your confirm password" : "";

    if (fullName === "" || username === "" || email === "" || phoneNumber === "" || password === "" || confirmPassword === "") {
        return;
    } else {
        
        window.alert("Form Submitted");
    }
});
