const studentName = "Adilzhan Kuandykov";
const group = "SE-2526";
const isStudent = true;
const firstNumber = 12;
const secondNumber = 4;
const introduction = studentName + " studies in " + group;

const results = [
  "Name: " + studentName,
  "Group: " + group,
  "Is a student: " + isStudent,
  "Addition: " + (firstNumber + secondNumber),
  "Subtraction: " + (firstNumber - secondNumber),
  "Multiplication: " + (firstNumber * secondNumber),
  "Division: " + (firstNumber / secondNumber),
  introduction
];

results.forEach(function (result) {
  console.log(result);
});

document.getElementById("basics-output").textContent = results.join("\n");

function showGreeting() {
  alert("Hello, JavaScript World!");
}

document.getElementById("show-greeting").addEventListener("click", showGreeting);
showGreeting();
