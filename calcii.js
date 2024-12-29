let resultInput = document.getElementById('result');

// Append a number or operator to the input field
function appendNumber(number) {
  resultInput.value += number;
}

// Append an operator
function appendOperator(operator) {
  const currentValue = resultInput.value;
  if (currentValue && !isNaN(currentValue.slice(-1))) {
    resultInput.value += operator;
  }
}

// Clear the input field
function clearResult() {
  resultInput.value = '';
}

// Calculate the result
function calculateResult() {
  try {
    // Evaluate the mathematical expression
    resultInput.value = eval(resultInput.value);
  } catch (error) {
    resultInput.value = 'Error';
  }
}
