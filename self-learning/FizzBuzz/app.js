function fizzBuzz() {
  let getNum = parseInt(prompt("Enter an end number for Fizz Buzz"));
  for (let i = 0; i < getNum; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();
