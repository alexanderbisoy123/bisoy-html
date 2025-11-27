// Sections
const loginSection = document.getElementById("loginSection");
const registerSection = document.getElementById("registerSection");
const portfolioSection = document.getElementById("portfolioSection");

// Buttons
const registerLink = document.getElementById("registerLink");
const backToLogin = document.getElementById("backToLogin");

// Forms
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

// Messages
const message = document.getElementById("message");
const registerMessage = document.getElementById("registerMessage");

// Switch to register
registerLink.onclick = () => {
    loginSection.style.display = "none";
    registerSection.style.display = "flex";
};

// Back to login
backToLogin.onclick = () => {
    registerSection.style.display = "none";
    loginSection.style.display = "flex";
};

// REGISTER PROCESS
registerForm.onsubmit = (e) => {
    e.preventDefault();

    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;

    if (localStorage.getItem(username)) {
        registerMessage.textContent = "Username already exists!";
        registerMessage.style.color = "#01ffc0ff";
        return;
    }

    localStorage.setItem(username, password);
    registerMessage.textContent = "Registered successfully!";
    registerMessage.style.color = "green";

    setTimeout(() => {
        registerSection.style.display = "none";
        loginSection.style.display = "flex";
    }, 1000);
};

// LOGIN PROCESS
loginForm.onsubmit = (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        loginSection.style.display = "none";
        portfolioSection.style.display = "block";
    } else {
        message.textContent = "Incorrect username or password!";
    }
};

// LOGOUT
document.getElementById("logoutBtn")?.addEventListener("click", () => {
    portfolioSection.style.display = "none";
    loginSection.style.display = "flex";
});