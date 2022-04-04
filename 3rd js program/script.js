var num = prompt("Enter  a number here:");
num = parseInt(num);
console.log("num",num);
if (num === 0) {
    console.log("The given number is Zero");
}
if (num > 0) {
    console.log("The given number is greater than Zero (Positive)");
}
if (num < 0) {
    console.log("The given number is less than Zero (Negative)");
}