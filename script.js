//Write a js program that gets temperature from user in celsius and convert it into Fahrenheit using the formula F=9/5 * C + 32, alert the output

var getTemperature = parseInt(prompt("Enter temperature in celsius"));
var F = (1.8 * getTemperature + 32);
alert("Temperature in fahrenheit is " + F);