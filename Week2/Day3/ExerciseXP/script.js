// Exercise 1

let people = ["Greg", "Mary", "Devon", "James"]

people.shift();
console.log(people);
people[2] = "Jason";
console.log(people)
people.push("Fima")
console.log(people)
console.log(people.indexOf("Mary"))
let peopleNew= people.slice(1,3)
console.log(peopleNew)
console.log(people.indexOf("foo")) // returns -1 if the value is not found!
let last = people.length - 1
console.log(last)

// PART 2

for(let names of people) {
    console.log(names)
}

for(let names of people) {
    if(names == "Jason") {
        console.log(names)
        break;
    }  
}

//EXERCISE 2

let colors = ["blue", "green", "orange", "purple", "cyan"]

for(let choice of colors) {
    console.log(`My #${colors.indexOf(choice)+1} choice is ${choice}`)
}

// EXERCISE 3
let number
do {
  number = parseInt(prompt("Enter a number that's higher than 10", "0"))
} while(number <= 10)

// EXERCISE 4
 
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

console.log(building["numberOfFloors"]);
console.log("First floor",building["numberOfAptByFloor"]["firstFloor"],"Third floor", building["numberOfAptByFloor"]["thirdFloor"]);
console.log(building["nameOfTenants"][1] ,building["numberOfRoomsAndRent"]["dan"][0]);
building["numberOfRoomsAndRent"]["dan"][1] = 1200;
console.log(building)

// EXERCISE 5

let family = {
    name: "Fima",
    age: 27,
    job: "student",
}
console.log(family)

for(let keys in family) {
    console.log(keys)
}

for(let values in family) {
    console.log(family[values])
}

// EXERCISE 6

let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

for(fullName in details) {
    console.log(fullName, details[fullName])
}

// EXERCISE 7

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
names.sort()
for (let counter = 0; counter < names.length; counter++) {
    console.log(names[counter].charAt(0));
}