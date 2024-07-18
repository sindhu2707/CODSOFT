let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

const display = document.getElementById('display');

function appendToDisplay(value) {
  if (value === '.' && currentInput.includes('.')) return; // Only one decimal point allowed
  currentInput += value;
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.textContent = '0';
}

function operate(op) {
  operator = op;
  if (currentInput !== '') {
    firstOperand = parseFloat(currentInput);
    currentInput = '';
  }
}

function calculate() {
  if (operator === '') return;

  secondOperand = parseFloat(currentInput);
  let result = 0;

  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      if (secondOperand === 0) {
        result = 'Error';
      } else {
        result = firstOperand / secondOperand;
      }
      break;
    default:
      return;
  }

  display.textContent = result;
  currentInput = '';
  firstOperand = '';
  secondOperand = '';
  operator = '';
}
