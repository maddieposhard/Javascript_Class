/*Exercise 1*/
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean(42));
console.log(Boolean(null));

/*Exercise 2*/
let age = (18);
if(age >= 18) {
    console.log('You are eligible to vote.');
} else {
    console.log('You are not old enough to vote.');
}

/*Exercise 3*/
function calculateFinalPrice(price, discountRate = 0.2, taxRate = 0.08) {
    const discount = price * discountRate;
    const discountedPrice = price - discount;
    const tax = discountedPrice * taxRate;
    const finalPrice = discountedPrice + tax;

    console.log(`Original Price: $${price}`);
    console.log(`Discount: $${discount}`);
    console.log(`Tax: $${tax}`);
    console.log(`Final Price: $${finalPrice.toFixed(2)}`); 
    }
calculateFinalPrice(150,0.2,0.08);

/*Exercise 4*/
const username = ('admin');
const password = ('password123');
if(username === 'admin') {
    if(password === 'password123') {
        console.log('Access granted!')
    } else {
        console.log('Incorrect password.')
    }
} else {
    console.log('Unknown user.')
}

/*Exercise 5*/
let years = 15;
let license = true;

/*
if(years >= 18) {
    if(license) {
        console.log('You can drive.');
    } else {
        console.log('You need a license to drive');}
} else {
    console.log('You must be older to drive');
}
*/

function checkEligibility(age) {
    if (age >= 18 && license) {
        return "You can drive.";
    } if (age >= 18 && !license) {
        return "You need a license to drive."
    } else {
        return "You are not old enough to drive.";
    }
}
console.log(checkEligibility(21));
console.log(checkEligibility(15));

/*Exercise 6*/
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("You can relax today!"); // Output: "You can relax today!"
} else {
    console.log("It's a workday.");
}

/*Exercise 7*/
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet();
greet("Maddie"); 
greet("Grace");

/*Exercise 8*/
function square(number) {
    return number * number;
}
console.log(square(5));
console.log(square(7));
console.log(square(10));

/*Exercise 9*/
let price = prompt('enter amount');
function calculateDiscount(price, discountRate = 0.1) {
    let discount2 = price * discountRate;
    let finalPrice2 = price - discount2;

    console.log(`Discount: $${discount2}`);
    console.log(`Final Price: $${finalPrice2.toFixed(2)}`); 
}

calculateDiscount(price);

/*Exercise 10*/
function calculateFinalPrice(price, discountRate = 0.2, taxRate = 0.08) {
    const discount = price * discountRate;
    const discountedPrice = price - discount;
    const tax = discountedPrice * taxRate;
    const finalPrice = discountedPrice + tax;

    console.log(`Original Price: $${price}`);
    console.log(`Discount: $${discount}`);
    console.log(`Tax: $${tax}`);
    console.log(`Final Price: $${finalPrice.toFixed(2)}`); 
    }
calculateFinalPrice(100);
calculateFinalPrice(250,0.2,0.1);