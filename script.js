// Define variables
const passwordInput = document.getElementById('password');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// Generate password function
function generatePassword() {
    let password = '';
    const passwordLength = 12; // Change this to change the length of the password
    const characterSet = lowercaseLetters + uppercaseLetters + numbers + symbols;

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    passwordInput.value = password;
}

// Copy password to clipboard function
function copyPassword() {
    passwordInput.select();
    document.execCommand('copy');
}

// Add event listeners
generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);
