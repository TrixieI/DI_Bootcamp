// Exercise 1

// Convert the below promise into async await:

// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);

async function exercise1() {
  let request = await fetch("https://swapi.dev/api/starships/9/");
  if (request.status === 200) {
    let jsObject = await request.json();
    console.log(jsObject);
  } else {
    throw new Error("Error not 200");
  }
}
exercise1();

// Exercise 2

// Analyze the code provided above what will be the outcome?

function resolveAfter2Seconds() {
  // 4. We enter the function
  return new Promise((resolve) => {
    setTimeout(() => {
      // 5. We wait 2 seconds
      resolve("resolved"); // 6. we resolve the function
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling"); // 2. we console.log("calling")
  let result = await resolveAfter2Seconds(); // 3. we call and await for the function to resolve
  console.log(result); // 7. we console.log the resolved result "resolved"
}

asyncCall(); // 1. we first call async call
