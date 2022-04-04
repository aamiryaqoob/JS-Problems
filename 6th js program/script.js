var userYear = prompt("Enter the year check whether its leap year or not");
userYear = parseInt(userYear);
console.log("Get year", userYear);


if (userYear % 400 === 0) {

console.log("Leap Year",userYear);
}
else{
    console.log("Not a Leap Year", userYear);
}