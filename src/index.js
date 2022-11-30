import './styles/style.scss';

// Inputs
const mailInput = document.querySelector('#mail');
const countryInput = document.querySelector('#country');
const zipInput = document.querySelector('#zip');
const pwInput = document.querySelector('#pw');
const confirmPwInput = document.querySelector('#confirmPw');

// Errors
const mailError = document.querySelector('#mailError');
const countryError = document.querySelector('#countryError');
const zipError = document.querySelector('#zipError');
const pwError = document.querySelector('#pwError');
const confirmPwError = document.querySelector('#confirmPwError');

// validation
const validateInput = (inputField, inputName, inputErrorField) => {
  if (inputField.validity.typeMismatch) {
    inputErrorField.textContent = `Please Enter a valid ${inputName}`;
  } else if (inputField.validity.tooShort) {
    inputErrorField.textContent = `Characters should be at least ${inputField.minLength}`;
    console.log('hello error?');
  } else if (inputField.validity.tooLong) {
    inputErrorField.textContent = `Characters should be at most ${inputField.maxLength}`;
  } else if (inputField.validity.valueMissing) {
    inputErrorField.textContent = `Input should be not empty`;
  } else {
    inputErrorField.textContent = ``;
  }
};

mailInput.oninput = () => {
  validateInput(mailInput, 'Email', mailError);
};

countryInput.oninput = () => {
  validateInput(countryInput, 'Email', countryError);
};

zipInput.oninput = () => {
  validateInput(zipInput, 'Email', zipError);
};

pwInput.oninput = () => {
  validateInput(pwInput, 'Email', pwError);
};

confirmPwInput.oninput = () => {
  validateInput(confirmPwInput, 'Email', confirmPwError);
};
