// //1st exercise
// //You need to guess what will be console logged, and explain why

// let username = "John";

// function checkName() {
//   console.log("In the function", username); // John of global let username
//   username += "Smith";
//   console.log("Still in the function", username); // John Smith of global let username
//   // with added Smith from the local
// }

// console.log("before the function", username); // John

// checkName();

// console.log("after the function", username); // John Smith

// // 2ns exercise
// // You need to guess what will be console logged, and explain why

// let username = "John";

// function checkName() {
//   let username = "John";
//   console.log("In the function", username); // John of local let username
//   username += "Smith";
//   console.log("Still in the function", username); // John Smith of local let username
// }

// console.log("before the function", username); // John of global let username

// checkName();

// console.log("after the function", username); // John of global let username

// // 3rd exercise
// //Exercise on object destructuring
// //Display in the body the name, email and phone of every employee

// const employees = [
//   { name: "Anne", email: "Anna@example.com", phone: "0000–000–0000" },
//   { name: "Tom", email: "Tom@gmail.com", phone: "0111–111–1111" },
// ];

// for (let emp of employees) {
//   let { name, email, phone } = emp;
//   document.body.textContent = `name is ${name}, email is ${email}, phone is ${phone}`;
// }

// 4th exercise

//  element.addEventListener(click, () => ...what the function does )  <--- all in one line

//Exercise on functions
// 1. Greet the user (ie. using an argument),
// * first by using function declarations
// * then function expression,
// * then arrow function

// // Function Declaration
// function greet() {
//   console.log("Hello user!");
// }
// greet();

// // Function Expression
// const greetUser = function () {
//   console.log("hello");
// };
// greetUser();

// // Arrow Function Master Race
// let hi = () => console.log("hi");
// hi();

// 5th exercise
// Ternary operator

// condition ? condition is true : condition is false

// function getTemp(temp) {
//   if (temp > 20) {
//     console.log("Summer");
//   } else {
//     console.log("Winter");
//   }
// }

// with Ternary operator ?

// function getTempAgain(temp) {
//   temp < 20 ? console.log("Winter") : console.log("Summer");
// }

// getTempAgain(25);

//---------------------------------
// Array methods and arrow function
//---------------------------------

//  1st possibility: Callback function
// let classmates = ["Josh", "Lily", "Sophie", "Mark"];

// With function declaration
// classmates.forEach(showClassmates)

// function showClassmates(classmateName,classmateIndex, classmateArray){
// 	console.log("classmateName" , classmateName)
// 	console.log("classmateIndex" , classmateIndex)
// 	console.log("classmateArray" , classmateArray)
// }

// with anonymous function
// classmates.forEach(function (element, index, array) {
// 	console.log(`${element} is at the index ${index}`)
// })

// with anonymous arrow function
// classmates.forEach((element, index, array) => console.log(`${element} is at the index ${index}`))

// classmates.forEach((element) => console.log(`${element}`))

// Exercise
// Using this let classmates = ["Josh", "Lily", "Sophie", "Mark"];
// Use for each and arrow function, to add a & after Sophie and a ! after all the other names
//* the result should be ['Josh!', 'Lily!', 'Sophie&', 'Mark!']
// Try to use ternary operator

// let classmates = ["Josh", "Lily", "Sophie", "Mark"];

// classmates.forEach((element, index, array) =>
//   element === "Sophie" ? (array[index] += "&") : (array[index] += "!")
// );
