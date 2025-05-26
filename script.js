document.addEventListener('DOMContentLoaded', function() {
    // Get references to main sections and buttons
    const mainWindow = document.querySelector('.main-window');
    const accountContainer = document.querySelector('.account-container');
    const newAccountContainer = document.querySelector('.new-account-container');
    const logInBtn = document.getElementById('log-in');
    const createAccountBtn = document.getElementById('create-account');
    const backBtns = document.querySelectorAll('.back-btn');

    // Ensure main window is visible on page load
    mainWindow.style.display = 'flex';

    // Show login form, hide others when "Log In" is clicked
    logInBtn.addEventListener('click', function() {
        mainWindow.style.display = 'none';
        accountContainer.style.display = 'block';
        newAccountContainer.style.display = 'none';
    });

    // Show create account form, hide others when "Create Account" is clicked
    createAccountBtn.addEventListener('click', function() {
        mainWindow.style.display = 'none';
        accountContainer.style.display = 'none';
        newAccountContainer.style.display = 'block';
    });

    // Show main window, hide forms when any "Back" button is clicked
    backBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            mainWindow.style.display = 'flex';
            accountContainer.style.display = 'none';
            newAccountContainer.style.display = 'none';
        });
    });
});