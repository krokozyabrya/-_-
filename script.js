const loginBtn = document.getElementById('loginBtn');
const overlay = document.getElementById('overlay');
const loginModal = document.getElementById('loginModal');
const submitBtn = document.getElementById('submit');
const logoutBtn = document.getElementById('logoutBtn');
const usernameDisplay = document.getElementById('usernameDisplay');

if (localStorage.getItem('username')) {
    displayUsername(localStorage.getItem('username'));
}

loginBtn.onclick = function() {
    overlay.style.display = 'block';
    loginModal.style.display = 'block';
}

overlay.onclick = function() {
    closeModal();
}

submitBtn.onclick = function() {
    const username = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        localStorage.setItem('username', username);
        displayUsername(username);
        closeModal();
    }
}

function displayUsername(username) {
    usernameDisplay.textContent = username;
    usernameDisplay.style.display = 'inline';
    usernameDisplay.onclick = function() {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = username;
        usernameDisplay.parentNode.insertBefore(input, usernameDisplay);
        usernameDisplay.style.display = 'none';
        input.focus();
        input.onblur = function() {
            const newUsername = input.value;
            localStorage.setItem('username', newUsername);
            usernameDisplay.textContent = newUsername;
            usernameDisplay.style.display = 'inline';
            input.remove();
        }
    }
    logoutBtn.style.display = 'inline';
    logoutBtn.onclick = function() {
        localStorage.removeItem('username');
        usernameDisplay.style.display = 'none';
        logoutBtn.style.display = 'none';
        loginBtn.style.display = 'inline'; 
    }
    
    loginBtn.style.display = 'none';
}

function closeModal() {
    overlay.style.display = 'none';
    loginModal.style.display = 'none';
}