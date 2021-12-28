// Exercise 1
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result); // we get an array like this = ['bread, 'carrot', potato, chicken, apple, orange]

// ------2------
const country = "USA";
console.log([...country]); // we get an array with U,S,A inside ['U','S','A']

// ------Bonus------
let newArray = [...[, ,]];
console.log(newArray);
[...[, ,]]; // after checking we get an array with 2 undefined elements

// Exercise 2
// Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)
// Using the filter() method, create a new array, containing only the Full Stack Residents.
// Bonus : Chain the filter method with a map method, to congratulate the Full Stack Residents
//(ie. “Good job Bradley”, “Good Job Chloe” ect…)

let users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

let helloUsers = users.map((element) => {
  console.log(`Hello, ${element["firstName"]}`);
});

let fullStack = users.filter(
  (element) => element.role == "Full Stack Resident"
);

// Exercise 3
// 1. Use the reduce() method to combine all of these into a single string.
let epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

let reduced = epic.reduce((accumulator, string) => {
  return accumulator + string;
});

// Exercise 4
//Using the filter() method, create a new array, containing the students that passed the course.
let student = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

let passed = student.filter((element) => element.isPassed == true);
// This gives us a new array called passed with 3 students
//0: {name: 'Ray', course: 'Computer Science', isPassed: true}
//1: {name: 'Jenner', course: 'Information Technology', isPassed: true}
//2: {name: 'Marco', course: 'Robotics', isPassed: true}
