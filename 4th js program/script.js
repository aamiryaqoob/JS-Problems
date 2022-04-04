var num = prompt("Enter a number:");
num = parseInt(num);
console.log("num",num);
if (num % 5 ==0 && num % 11 == 0) {
    console.log("The given num is divided by 5 and 11");
}
else{
    console.log("The given number is not divided by 5 and 11");
}