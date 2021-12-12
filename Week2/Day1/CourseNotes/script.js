// Exercise 1
let addressNumber = 18;
let addressStreet = "Shushana Demari";
let country = "Israel";

const globalAdress = `I live in ${addressStreet} ${addressNumber}, ${country}`;
console.log(globalAdress);

//Exercise 2
let birthYear = 1994;
let futureYear = 2034;  
let age = futureYear - birthYear;
console.log(`I will be ${age} in ${futureYear}`);

//Exercise 3
let pets = ['cat','dog','fish','rabbit','cow'];
console.log(pets[1]);
pets.push('horse')
pets.splice(3, 1);
console.log(pets.length);
console.log(pets)
