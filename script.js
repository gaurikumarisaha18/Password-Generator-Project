const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

lengthEl.addEventListener('input', () => {
  lengthValue.textContent = lengthEl.value;
});

generateBtn.addEventListener('click', () => {
  const length = +lengthEl.value;
  let characters = '';
  if (uppercaseEl.checked) characters += UPPERCASE;
  if (lowercaseEl.checked) characters += LOWERCASE;
  if (numbersEl.checked) characters += NUMBERS;
  if (symbolsEl.checked) characters += SYMBOLS;

  if (characters === '') {
    alert('Please select at least one character type!');
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomChar = characters[Math.floor(Math.random() * characters.length)];
    password += randomChar;
  }

  passwordEl.value = password;
});

copyBtn.addEventListener('click', () => {
  if (!passwordEl.value) return;
  navigator.clipboard.writeText(passwordEl.value).then(() => {
    alert('Password copied to clipboard!');
  });
});
