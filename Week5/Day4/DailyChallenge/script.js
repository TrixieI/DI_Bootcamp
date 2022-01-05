// Implement a simple version of Promise.all.
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Lets use Example

async function daily() {
  try {
    const promise1 = Promise.resolve(3);
    const promise2 = 42;
    const promise3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 3000, "foo");
    });
    let promise4 = new Promise((resolve, reject) => {
      let ask = prompt("give string");
      if (typeof ask === "string") {
        resolve(ask);
      } else {
        reject("Something went wrong");
        throw new Error(ask);
      }
      return;
    });
    let array = await Promise.all([promise1, promise2, promise3, promise4]);
    console.log(array); // We display the result  [3, 42, 'foo' "whatever the user input is"] after 3 seconds
  } catch (error) {
    console.log(error);
  }
}
daily();
