const hoverBox = document.getElementById("hover-box");
const keyboardInput = document.getElementById("keyboard-input");
const keyboardOutput = document.getElementById("keyboard-output");

hoverBox.addEventListener("mouseover", function () {
  hoverBox.style.backgroundColor = "#fff0bd";
});

hoverBox.addEventListener("mouseout", function () {
  hoverBox.style.backgroundColor = "";
});

keyboardInput.addEventListener("keyup", function () {
  keyboardOutput.textContent = keyboardInput.value;
});

const firstInput = document.getElementById("first-number");
const secondInput = document.getElementById("second-number");
const operator = document.getElementById("operator");
const result = document.getElementById("result");

document.getElementById("calculator").addEventListener("submit", function (event) {
  event.preventDefault();

  const firstNumber = firstInput.valueAsNumber;
  const secondNumber = secondInput.valueAsNumber;

  if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
    result.textContent = "Enter two valid numbers.";
    console.log(result.textContent);
    return;
  }

  if (operator.value === "/" && secondNumber === 0) {
    result.textContent = "Cannot divide by zero.";
    console.log(result.textContent);
    return;
  }

  let answer;

  if (operator.value === "+") {
    answer = firstNumber + secondNumber;
  } else if (operator.value === "-") {
    answer = firstNumber - secondNumber;
  } else if (operator.value === "*") {
    answer = firstNumber * secondNumber;
  } else {
    answer = firstNumber / secondNumber;
  }

  if (Number.isFinite(answer)) {
    result.textContent = answer;
    console.log(firstNumber + " " + operator.value + " " + secondNumber + " = " + answer);
  } else {
    result.textContent = "The result is too large.";
    console.log(result.textContent);
  }
});
