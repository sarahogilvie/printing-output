// TASK 1

var a = 3;
var b = 5;
var c;
      
alert("var a = 3; \nvar b = 5; \nvar c; \n----------" + "\na + b = " + (a + b) + "\na - b = " + (a - b) + "\na * b = " + (a * b) + "\na / b = " + (a / b) + "\na % b = " + (a % b) + "\n(a += b): " + ( a += b) + "\n(a -= b): " + (a -= b) + "\n(a *= b): " + (a *=b) + "\n(a /= b): " + (a /= b) + "\n(a %= b): " + (a %= b) + "\n(a == b): " + (a == b) + "\n(a != b): " + (a != b) + "\n(a > b): " + (a > b) + "\n(a < b): " + (a < b) + "\n(!a && !c): " + (!a && !c) + "\n(!a || !c): " + (!a || ! c));
    
// TASK 2

var first_name = "Sarah";
var last_name = "Ogilvie";
var email = "ogil0039@algonquinlive.com";

var output = "My name is " + first_name + " " + last_name + ". You can contact me at " + email + ".";

alert(output);

// TASK 3

var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];

var sum = numbers[0] + numbers[4];

if (sum % 2 == 0) {
alert(numbers[0] + " + " + numbers[4] + " = " + sum + "\nThis is an even number.");
} else {
alert(numbers[0] + " + " + numbers[4] + " = " + sum + "\nThis is an odd number.");
}















