const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const registerChangeBtn = document.getElementById('register-validate');
const loginChangeBtn = document.getElementById('login-validate');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');



registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    return password.length >= 6;
}

function validateRegistration() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!name || !isValidEmail(email) || !isValidPassword(password)) {
        alert('Please enter valid name, email, and password.');
        return false;
    }

    return true;
}

function validateLogin() {
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!isValidEmail(email) || !isValidPassword(password)) {
        alert('Please enter a valid email and password.');
        return false;
    }

    return true;
}

registerChangeBtn.addEventListener('click', () => {
    if (validateRegistration()) {
        container.classList.add("active");
    }
});

loginChangeBtn.addEventListener('click', () => {
    if (validateLogin()) {
        container.classList.remove("active");
    }
});
