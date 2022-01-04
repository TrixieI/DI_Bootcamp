// Exercise 1

function compareToTen(num) {
  return new Promise(function (resolve, reject) {
    if (num > 10) {
      resolve(`${num} is bigger than 10, Success!`);
    } else {
      reject(`${num} is less than 10, Error!`);
    }
  });
}

compareToTen(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

compareToTen(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// Exercise 2

function exercise2() {
  let resolveMyself = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (resolveMyself) {
        resolve("success");
      } else {
        reject("Ooops something went wrong");
      }
    }, 4000);
  });
}
exercise2()
  .then((message) => console.log(message)) // Displays Success if resolveMyself = true after 4 seconds
  .catch((error) => console.log(error)); // Displays something went wrong if resolveMyself is false

// Exercise 3

// ? Not sure if I did this one correctly ?

function exercise3(value) {
  return new Promise((resolve, reject) => {
    if (value === 3) {
      resolve("Success, value is 3");
    } else {
      reject("Boo!");
    }
  });
}
exercise3(3)
  .then((message) => console.log(message)) // only resolves if the value is 3
  .catch((error) => console.log(error)); // displays "Boo!" if the value ISN'T 3
