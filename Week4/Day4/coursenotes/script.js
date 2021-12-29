// Object destructuring
// //---------------------
// ? Destructuring
// // -----------------------

// let characters = {
//   name: 'Hermione Granger',
//   house: 'Gryfindor',
//   height: 2,
//   friend :  {
//    username : 'Harry Potter',
//  }
// }

// let name = characters.name;
// let house = characters.house;

// the same as

// let {name, house} = characters;
// console.log("name is : ", name, "house is :", house)
// console.log(characters); //the object is unchanged

// rename the variables created while destructuring
// let {keyName : variableName} = obj
// --> the value of the keyName will be assigned to the variableName
// let {name : wizardUsername, house : wizardHouse} = characters;
// console.log("wizardUsername is : ", wizardUsername, "wizardHouse is :", wizardHouse )

// default value with destructuring
// let {name : wizardUsername, house : wizardHouse, height = 1.60} = characters;
// console.log("wizardUsername is : ", wizardUsername, "wizardHouse is :", wizardHouse, "height is : ", height)
// If the height key doesn't exist, we set the height variable to 1.6
// console.log(characters)

// renaming the variable and pass a default value to the variable
// let {name, house, height : wizardHeight = 1.6} = characters;
// console.log("name is : ", name, "house is :", house, "wizardHeight is :", wizardHeight )
// console.log(characters)
// 11:13
// Object.entries
// //---------------
// ? Object.entries
// // -------------

// let character = {
//   name: 'Hermione Granger',
//   house: 'Gryfindor',
//   age: 20,
// };

// let arrayCharacter = Object.entries(character)
// console.log(arrayCharacter)

// Destructure inside the loop
// for (let elem of arrayCharacter){
//   console.log("elem : ", elem);
//   let [key, value] = elem;
//   console.log(key, value)
// }

// THE SAME
// Destructure inside the statement of the loop
// for (let [key,value] of arrayCharacter){
//   	console.log("key : ", key, " , value: ", value)
// }
// 11:15
// Copy Objects
// ---------------------
// Copy objects
// --------------------------

// let characters = {
// 	name: 'Hermione Granger',
// 	house: 'Gryfindor'
// };

// let newCharacter = characters; //they point to the same adress
// console.log("newCharacter : ", newCharacter, ", \ncharacters", characters)
// newCharacter["name"] = "Harry";
// console.log("newCharacter : ", newCharacter, ", \ncharacters", characters)

// let person = { ...characters};// they point to different adress
// console.log("person : ", person, ", \ncharacters", characters)
// person["house"] = "Israel"
// console.log("person : ", person, ", \ncharacters", characters)
// console.log("person house = ", person["house"], "characters house", characters["house"]) //unchanged

// With Nested objects : PROBLEM
// let characters = {
// 	name: 'Hermione Granger',
// 	house: 'Gryfindor',
// 	friend :  {
// 		name : 'Harry Potter',
// 	}
// };

// let person = {...characters};
// console.log("person : ", person, ", \ncharacters", characters)
// person["friend"]["name"] = "Hagrid"
// PROBLEM : the name of the friend is changed in both objects
// console.log("person : ", person, ", \ncharacters", characters)

// Solution : Deep Cloning by spreading

// let person = {
// 	...characters,
// 	friend :{
// 		...characters.friend
// 	}
// };

// person["friend"]["name"] = "Hagrid"
// UNCHANGED
// console.log("person friend = ", person["friend"]["name"], "characters friend", characters["friend"]["name"]) //unchanged

// Nested destructuring
// ----------------
// ?NESTED DESTRUCTURING
// ----------------

// let characters = {
// 	name: 'Hermione Granger',
// 	house: 'Gryfindor',
// 	friend :  {
//     username : 'Harry Potter',
// 	}
// }

// //syntax
// let {nameKey : {nameSubKey}} = object

// nested destructuring
// let {friend : {username}} = characters;
// console.log(username)

// nested destructuring with a different variable name and a default value
// let {friend : {username : wizardfriendName = "John"}} = characters;
// console.log(wizardfriendName)
// console.log(friend)

// let characters = {
//   name: 'Hermione Granger',
//   house: 'Gryfindor',
//   friend :  {
//     username : 'Harry Potter',
//     favColors : ["blue", "pink"]
//   }
// }

// nested destructuring object
// destructuring of an array
// let {friend : {favColors : [first, second]}} = characters;
// console.log(first, second)

// ? Destructure inside a function
// function getDetails ({members : membersFamily, lastname: lastnameFamily}) {
//   console.log(membersFamily, lastnameFamily)
// }

// getDetails({members : 2,lastname : "Smith"})

// * Exercises
// *## Exercise1
// * Pass this object {name: 'Harry Potter',house: 'Gryfindor',goodstudent : false}
// * as an argument of the getDetails function.
// * Destructure the object in the parameter (ie. you should have 3 parameters
// * : name, house and goodstudents)

// function getDetails({ name, house, goodstudent }) {
//   console.log(name, house, goodstudent);
// }

// getDetails({ name: "Harry Potter", house: "Gryfindor", goodstudent: false });

// ## Exercise2
// Pass this object
// {name: 'Hermione Granger',
//  house: 'Gryfindor',
//  friend :  {
// 	friendName : 'Harry Potter',
// 	age : 20
// 	}
// }
// as an argument of the getMoreDetails function.
// Destructure the object in the parameter (ie. you should have 4 parameters
// : name, house , friendName and age)

// function getMoreDetails({ name, house, friend: { friendName, age } }) {
//   console.log(name, house, friendName, age);
// }

// getMoreDetails({
//   name: "Hermione Granger",
//   house: "Gryfindor",
//   friend: {
//     friendName: "Harry Potter",
//     age: 20,
//   },
// });

// ## Exercise3
// Pass this object
// const elonPerson = {
//   first: "Elon",
//   last: "Musk",
//   housesLocation: ["new york", "paris"],
//   twitter: "@elonmusk",
//   company: "Space X",
//   houses: {
//     amount: 2,
//     value: "5Million",
//   },
// };
// as an argument of the getElonMuskDetails function.
// Destructure the object in the parameter and console.log
// - his first name, last name, the 2 cities where he owns an appartment, and the value of the houses

// function getElonMuskDetails({
//   first,
//   last,
//   housesLocation: [h1, h2],
//   twitter,
//   company,
//   houses: { value },
// }) {
//   console.log(
//     `Mr.${first} ${last} has houses in ${h1} and ${h2} with the value of ${value},
// his Twitter Handle is ${twitter} and his company name is ${company}`
//   );
// }

// getElonMuskDetails(elonPerson);

// !Constructor Function
// // Constructor functions
// function Character (wizardname, wizardhouse, wizardPoint, wizardEnemy) {
//   //attribute
//   this.name = wizardname;
//   this.house = wizardhouse;
//   this.point = wizardPoint;
//   this.enemy = wizardEnemy;

//   this.fight = function () {
//       console.log(`${this.name} is fighting ${this.enemy.name}`)
//       this.enemy.point -= 10
//   }
// }

// let hermioneCharacter = new Character("Hermione", "Grinfindor", 34)
// // console.log(hermioneCharacter)
// // console.log(hermioneCharacter.house)

// let harryPotterCharacter = new Character("Harry", "Grinfindor", 100, hermioneCharacter)
// // console.log(harryPotterCharacter)
// // console.log(harryPotterCharacter.house)

// harryPotterCharacter.fight()

// * 1) Create a TV class with properties brand, channel and volume.
// *   Channel should be 1 by default. Volume should be 50 by default.
// * 2) Add methods to increase and decrease volume. The methods,
// *    when called, will increase or decrease the volume by 1.
// * 3) Create an Object for the LG TV, console.log the brand of the TV and
// *    call the methods increase and decrease volume

// function TV(tvBrand, tvChannel = 1, tvVolume = 50) {
//   this.brand = tvBrand;
//   this.channel = tvChannel;
//   this.volume = tvVolume;
//   this.increaseVolume = function () {
//     this.volume += 1;
//   };
//   this.decreaseVolume = function () {
//     this.volume -= 1;
//   };
// }

// let lgTv = new TV("LG");

// console.log(lgTv);
