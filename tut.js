
// om sir class work
// swap two numbers without using third variable "temperature"

let a = 5;
let b = 10;

let temperature = a;
a = b;
b = temperature;    

console.log("After swapping: a =", a, ", b =", b);

// login authentication

let username = "admin";
let password = "admin@123";

// input username and password from user
let inputUsername = prompt("Enter username:");
let inputPassword = prompt("Enter password:");


if (inputUsername === "admin" && inputPassword === "admin@123") {
    console.log("Login successful.");
}  else {
    console.log("Invalid username or password.");
}

// shopping discount calculator
let totalAmount = parseFloat(prompt("Enter total amount of purchase:"));
let discount = 0;

if (totalAmount >= 10000) {
    discount =totalAmount * 0.2; // 20% discount
} else if (totalAmount >= 5000) {
    discount = totalAmount * 0.1; // 10% discount
} else {
    discount = 0; // no discount
}

console.log("Total amount: "+ totalAmount);
console.log("Discount: "+ discount);
console.log("Amount after discount: "+ (totalAmount - discount));


// find odd and even count. print number from1 to 100 and also count total odd and even numbers
let oddCount = 0;
let evenCount = 0;

for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Total odd numbers: " + oddCount);
console.log("Total even numbers: " + evenCount);