const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const inputPhoneRegister = document.querySelector(".input-signup-phone");

function signup() {
  const email = inputUsernameRegister.value.trim();
  const password = inputPasswordRegister.value.trim();
  const phone = inputPhoneRegister.value.trim();

  if (!email || !password || !phone) {
    alert("Please enter email, password and phone.");
    return;
  }

  const newUser = { email, password, phone, loginHistory: [] };
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const exists = users.some(user => user.email === email);
  if (exists) {
    alert("User already exists.");
    return;
  }

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful!");
  window.location.href = "login.html";
}
