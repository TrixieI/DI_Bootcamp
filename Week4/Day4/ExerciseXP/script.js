// Exercise 1

const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);
// the person variable is already equal to the deconstructed object and array of coordinates
// the output should be `I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)`

// Exercise 2

// I didn't understand which way I was supposed to do this so I did it in 2 different ways

// Way one

function displayStudentInfo({ first, last }) {
  console.log(`your full name is ${first} ${last}`);
}

displayStudentInfo({ first: "Brian", last: "Smith" });

// Way two

let studentObject = {
  first: "Jacob",
  last: "Anderson",
};

function displayStudentInfoTwo({ first, last }) {
  console.log(`your full name is ${first} ${last}`);
}

displayStudentInfoTwo(studentObject);

// Exercise 3
const users = { user1: 18273, user2: 92833, user3: 90315 };

let array = Object.entries(users);
console.log(array);

for (let loop of array) {
  loop[1] *= 2;
}

// Exercise 4

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member); // Should display Object, because member is equal new person
// which creates a New Object from the Class Person.

// Exercise 5

class Dog {
  constructor(name) {
    this.name = name;
  }
}
// *  Analyze the options below. Which constructor will successfully extend the Dog class?

// 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}
//After reading up on extends on w3schools the correct answer should be Option 2

// Exercise 6
// part 1
// [2] === [2] // False
// {} === {}  // False

// part 2

const object1 = { number: 5 }; // object 1 has the value of number 5 initially, but then changes to 4
const object2 = object1; // object 2 has the value of number: 4
const object3 = object2; // object 3 has the value of number: 4
const object4 = { number: 5 }; // object4 has the value of number: 5
object1.number = 4; // this changes all objects except object 4 to have the value of number: 4

// part 3

class Animal {
  constructor(name, type, color) {
    this.animalName = name;
    this.animalType = type;
    this.animalColor = color;
  }
}
class Mamal extends Animal {
  constructor(name, type, color, sound) {
    super(name, type, color);
    this.animalSound = sound;
    this.sound = function (voice) {
      console.log(
        `${this.animalSound} I'm ${this.animalName} the ${this.animalType} that's ${this.animalColor}`
      );
      return voice;
    };
  }
}

let cow = new Mamal("Milly", "cow", "white with black spots", "Mooooo!!!");
cow.sound();

let tiger = new Mamal("Jack", "tiger", "golden", "Roooaarr!!!");
tiger.sound();
