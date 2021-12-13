// Exercise 1

let x = 10;
let y = 25;

if (y > x) {
    console.log("y is the bigger number")
} else [
    console.log("x is bigger")
]

// Exercise 2
let newDog = "Chihuahua";
console.log(newDog.length)
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())
if(newDog === "Chihuahua") {
    console.log("‘I love Chihuahuas, it’s my favorite dog breed’")
} else {
    console.log("I don't care, I prefer cats")
}

// Exercise 3
x = prompt("Enter a Number", "0");
if(x % 2 == 0) {
    console.log(`${x} is an even number!`)
} else {
    console.log(`${x} is an odd number!`)
}

// Exercise 4
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
console.log(users.length)
 if(users.length == 0) {
     console.log("No one is online")
 } else if(users.length == 1) {
     console.log(users[0], "is online")
 } else if(users.length == 2) {
     console.log(users[0], users[1], "are online")
 } else if(users.length > 2) {
     console.log(users[0], users[1],"and", users.length-2, "others are online")
 } else {
     console.log("ERROR")
 }

