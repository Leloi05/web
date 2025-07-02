const inputUsernameLogin = document.querySelector(".input-login-username");
const inputPasswordLogin = document.querySelector(".input-login-password");

function login(event) {
  event.preventDefault(); // Ngăn form reload

  const email = inputUsernameLogin.value.trim();
  const password = inputPasswordLogin.value.trim();

  if (!email || !password) {
    alert("Please enter both username and password!");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let foundUser = users.find(u => u.email === email && u.password === password);

  if (foundUser) {
    const timestamp = new Date().toLocaleString();

    if (!foundUser.loginHistory) {
      foundUser.loginHistory = [];
    }
    foundUser.loginHistory.push(timestamp);

    // Cập nhật danh sách người dùng
    localStorage.setItem("users", JSON.stringify(users));

    // Lưu người dùng hiện tại
    localStorage.setItem("currentUser", foundUser.email);

    // Chuyển đến trang Welcome
    window.location.href = "welcome.html";
  } else {
    alert("Invalid email or password!");
  }
}
