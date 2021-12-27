// function setObj(person) {
//   person.age = 25;
//   return person;
// }

// let personObj1 = {
//   name: "Alex",
//   age: 30,
// };

// let personObj2 = setObj(personObj1);

// console.log(personObj1); // -> ? name alex, age 25
// console.log(personObj2); // -> ? name alex, age 25

// ## Exercise 2
// Guess what will be the value of the 2 console.logs
// function setObj(person) {
//   person = {
//     name: "John",
//     age: 50,
//   };

//   return person;
// }

// let personObj1 = {
//   name: "Alex",
//   age: 30,
// };

// let personObj2 = setObj(personObj1);

// console.log(personObj1); // -> ? alex, 30
// console.log(personObj2); // -> ? john, 50

// Exercise Self Invoking Function
// 1. Add in your html file a div with an id of container
// 2. Create a self invoking function that takes one parameter the name of the user
// 3. When invoked, the function adds the name of the user in a sentence in the div

// (function () {
//   let getName = prompt("What is your name?");
//   let div = document.getElementById("container");
//   div.append(`Hello, ${getName}`);
// })();

// function starWars(shipName) {
//   let characters = [];
//   function createCharacter(firstname, lastname = "Smith") {
//     characters.push(firstname, lastname);
//   }
//   function displayCharacter() {
//     let body = document.body;
//     body.append(characters, shipName, "\n");
//   }
//   createCharacter("Han", "Solo");
//   createCharacter("Luke", "Skywalker");
//   createCharacter("Lerry");
//   displayCharacter();
// }

// starWars("The Devastator");
// starWars("Republic Attack Cruiser");
