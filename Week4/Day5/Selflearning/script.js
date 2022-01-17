let fima = {
  firstName: "Fima",
  lastName: "Treiger",
  hobbies: ["Gaming", "Learning Javascript", "Mountain Biking"],
  age: 27,
  job: "Student",
};

let fimaJasonObject = JSON.stringify(fima, null, 2);

console.log(fimaJasonObject);
