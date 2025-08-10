// Login form validation
function validateLogin() {
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return false;
    }
    return true;
}

// Register form validation
function validateRegister() {
    let name = document.getElementById("regName").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let password = document.getElementById("regPassword").value.trim();
    let confirmPass = document.getElementById("regConfirmPassword").value.trim();

    if (name === "" || email === "" || password === "" || confirmPass === "") {
        alert("Please fill in all fields.");
        return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return false;
    }
    if (password !== confirmPass) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}
