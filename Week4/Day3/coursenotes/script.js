// const studentsFootball = [
//   { name: "Rich", score: 33 },
//   { name: "Peter", score: 55 },
// ];
// //Create a new array of objects, containing the name, score and isAboveAverage key
// //if the students has a score bigger that 50, the key isAboveAverage will be true

// let studentsAverage = studentsFootball.map((element) => {
//   let isAboveAverage = element.score > 50 ? true : false;
//   // What we return will be pushed to the studentsAverage variable!!!
//   return {
//     name: element.name,
//     score: element.score,
//     isAboveAverage: isAboveAverage,
//   };
// });

// let famousPeople = [
//   {
//     name: "Angelina Jolie",
//     job: "actor",
//     age: 80,
//   },
//   {
//     name: "Georges Clooney",
//     job: "actor",
//     age: 2,
//   },
//   {
//     name: "Paris Hilton",
//     job: "actor",
//     age: 5,
//   },
//   {
//     name: "Kayne West",
//     job: "singer",
//     age: 16,
//   },
//   {
//     name: "Britney Spears",
//     job: "singer",
//     age: 100,
//   },
// ];
// // 1. Use the map method, to create a new array and push the name
// // 2. Use the map method, to create a new array and to push an object in the new array.
// // Each object should contain the name of the actor, and it's job
// // 3. BONUS: Use for each to add each of those names on the DOM
// // (in a paragraph, appended to a div with an id "container")

// let newFamous = famousPeople.map((element) => element["name"]);

// let famousJobAndName = famousPeople.map((element) => {
//   return {
//     name: element.name,
//     job: element.job,
//   };
// });

// newFamous.forEach((element) => {
//   let body = document.body;
//   let div = document.createElement("div");
//   div.append(element);
//   body.append(div);
// });

// // ## Exercise 1:  create a new array that filters only the positive value
// let numbers = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];

// let positive = numbers.filter((element) => element > 0);

// // ## Exercise 2: Suppose you have a list of Star Trek characters,
// // and you want to get just the characters that appeared in Star Trek: The Next Generation.
// // Use filter() to filter the array of characters below
// const characters = [
//   { name: "James T. Kirk", series: ["Star Trek"] },
//   { name: "Spock", series: ["Star Trek", "Star Trek: The Next Generation"] },
//   { name: "Jean-Luc Picard", series: ["Star Trek: The Next Generation"] },
//   {
//     name: "Worf",
//     series: ["Star Trek: The Next Generation", "Star Trek: Deep Space Nine"],
//   },
// ];

// let series = characters.filter((element) =>
//   element.series.includes("Star Trek: The Next Generation")
// );

// //## Exercise 3 NOT MANDATORY - send me the result by slack
// //Use the filter method to create an array without duplicates. The result should be ["blue","red","yellow"]
// const colors = ["blue", "red", "blue", "yellow"];

// let noDupe = colors.filter((element) => element)

// //INITIAL VALUE
// //1000 initial value

// const numbers = [10,20,35,40];

// let sum =  numbers.reduce((accumulator, currentValue,index,arr) => {
// 	return accumulator+currentValue
// }, 1000)

// // ## Exercise 1
// const students = [
//   { name: "Rich", score: 33 },
//   { name: "Peter", score: 55 },
//   { name: "John", score: 75 },
// ];
// Find the sum of the score of the students using reduce

// let scores = students.map((element) => element["score"]);
// let sum = scores.reduce((num1, num2) => {
//   return num1 + num2;
// });

// let sum = students.reduce((accumilator, element) => {
//   return accumilator + element["score"];
// }, 0);

// ## Exercise 2
// 1. Turn an array of voter objects into a count of how many people voted
// 2. Do the exercise using reduce only
// 3. Then do it by chaining map and reduce
// let voters = [
//   { name: "Bob", age: 30, voted: true },
//   { name: "Jake", age: 32, voted: true },
//   { name: "Kate", age: 25, voted: false },
//   { name: "Sam", age: 20, voted: false },
//   { name: "Bob", age: 30, voted: true },
// ];

// let votedOnly = voters.reduce((accumilator, element) => {
//   return accumilator + element["voted"];
// }, 0);
