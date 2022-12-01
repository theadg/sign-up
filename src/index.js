import './styles/style.scss';

// Inputs
const mailInput = document.querySelector('#mail');
const countryInput = document.querySelector('#country');
const zipInput = document.querySelector('#zip');
const pwInput = document.querySelector('#pw');
const confirmPwInput = document.querySelector('#confirmPw');

const inputControls = [
  mailInput,
  countryInput,
  zipInput,
  pwInput,
  confirmPwInput,
];

// Errors
const mailError = document.querySelector('#mailError');
const countryError = document.querySelector('#countryError');
const zipError = document.querySelector('#zipError');
const pwError = document.querySelector('#pwError');
const confirmPwError = document.querySelector('#confirmPwError');

// button
const submitButton = document.querySelector('#submit');

// final
// validation
const validation = (element) => element.validity.valid === true;

const checkIfValid = () => {
  if (inputControls.every(validation)) submitButton.disabled = false;
  else {
    submitButton.disabled = true;
    submitButton.setAttribute('title', 'Complete all Input fields first');
  }
};

const validateInput = (
  inputField,
  inputName,
  inputErrorField,
  inputErrorMessage = ''
) => {
  if (inputField.validity.typeMismatch) {
    inputErrorField.textContent = `Enter a valid ${inputName}`;
  } else if (inputField.validity.tooShort) {
    inputErrorField.textContent = `There should be at least ${inputField.minLength} characters`;
    console.log('hello error?');
  } else if (inputField.validity.tooLong) {
    inputErrorField.textContent = `Characters should be at most ${inputField.maxLength}`;
  } else if (inputField.validity.valueMissing) {
    inputErrorField.textContent = `Input should be not empty`;
  } else if (inputField.validity.patternMismatch) {
    inputErrorField.textContent = inputErrorMessage;
    console.log('he?');
  } else {
    inputErrorField.textContent = ``;
  }

  checkIfValid();
};

mailInput.oninput = () => {
  validateInput(mailInput, 'Email', mailError);
};

countryInput.oninput = () => {
  validateInput(countryInput, 'Country', countryError);
};

zipInput.oninput = () => {
  validateInput(zipInput, 'Zip Code', zipError, 'ddddd or ddddd-dddd format');
};

pwInput.oninput = () => {
  validateInput(
    pwInput,
    'Password',
    pwError,
    'Password should contain at least: one uppercase letter, one lowercase letter, one symbol. Minimum 8 characters'
  );
};

confirmPwInput.oninput = () => {
  validateInput(
    confirmPwInput,
    'password',
    confirmPwError,
    'Password should contain at least: one uppercase letter, one lowercase letter, one symbol. Minimum 8 characters'
  );
};

submitButton.onclick = (e) => {
  if (
    pwInput.value !== confirmPwInput.value &&
    pwInput.value !== '' &&
    confirmPwInput !== ''
  ) {
    pwError.textContent = 'Passwords must match';
    pwInput.classList.add('invalid');
    confirmPwInput.classList.add('invalid');
  } else {
    alert('Form Submitted Successfully');
    const allInput = Array.from(document.querySelectorAll('input'));
    allInput.forEach((input) => {
      input.value = '';
    });
  }

  e.preventDefault();
};

window.onload = () => checkIfValid();
