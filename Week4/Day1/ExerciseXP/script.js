// Exercise 1

// #1
function q1() {
  var a = 5;
  if (a > 1) {
    a = 3;
  }
  alert(a); // a = 3
}

//#2
var a = 0;
function q2() {
  a = 5; //  a = 5
}

function q22() {
  alert(a);
} // a = 5

//#3
function q3() {
  window.a = "hello";
} // undefined

function q32() {
  alert(a); // undefined
}

//#4
var a = 1;
function q4() {
  var a = "test";
  alert(a); // a = "test", the alert will display the string "test"
}

//#5
var a = 2; // global scope a
if (true) {
  var a = 5; // local scope a
  alert(a); // this alert will display 5
}
alert(a); // this alert will display 2

// Exercise 2
function winBattle() {
  return true;
}

// function experiencePoints() {      rebuild this function to use the ? operator
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

const experiencePoints = function () {
  winBattle() ? 10 : 1;
};

experiencePoints();

// Exercise 3

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((element) =>
  element === "Violet" ? console.log("Yes it's here") : console.log("Nope")
);

colors.forEach((element, index) =>
  console.log(`${index + 1}# choice is ${element}`)
);

// Exercise 4 HOW THE HECK DO YOU DO THIS?!?!?!?

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th", "st", "nd", "rd"];
color.forEach((element, index) => {
  if (element == "Blue") {
    console.log(`${index + 1}${ordinal[1]} Choice is ${element}`);
  } else if (element == "Green") {
    console.log(`${index + 1}${ordinal[2]} Choice is ${element}`);
  } else if (element == "Red") {
    console.log(`${index + 1}${ordinal[3]} Choice is ${element}`);
  } else {
    console.log(`${index + 1}${ordinal[0]} Choice is ${element}`);
  }
});

// Exercise 5

function isString(check) {
  if (typeof check === "string") {
    return true;
  } else {
    return false;
  }
}

console.log(isString("hello"));
//true
console.log(isString([1, 2, 4, 0]));
//false

// Exercise 6

let bankAmount = 5000;
let vat = 1.17;
let details = ["+200", "-100", "+146", "+167", "-2900"];
let income;
let newDetails;
let bankAccount;
let expenses;
let otherAmount;

for (let i = 0; i < details.length; i++) {
  newDetails = parseInt(details[i]);
  if (newDetails < 0) {
    newDetails *= vat;
    expenses = newDetails;
    bankAmount += expenses;
  } else {
    income = newDetails;
    otherAmount = bankAmount += income;
  }
}
bankAccount = bankAmount;
console.log(`Current account balance is ${bankAccount}$`); // Displays 2003
