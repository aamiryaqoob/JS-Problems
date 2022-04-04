var firstNum = prompt("Enter first number:");
firstNum = parseInt(firstNum);
console.log("first num", firstNum);

var secondNum = prompt("Enter second number:");
secondNum = parseInt(secondNum);
console.log("second num",secondNum);

var thirdNum = prompt("Enter Third number:");
thirdNum = parseInt(thirdNum);
console.log("Third num",thirdNum);

if (firstNum > secondNum) {
    console.log("First number is greater");
}

if (secondNum > thirdNum) {
    console.log("Second number is greater");
}

if (thirdNum > firstNum) {
    console.log("Third number is greater");
}