// /*
//     1. In the HTML file, create a form containing 2 inputs, username and password.
//     The ACTION SHOULD BE index.html WITH GET REQUEST
// 2. In the JS file, validate the data before processing it
// * Username must be trimed, minimum 4 characters and start with a first letter uppercased
// * Password shoudn't be empty
// 3. If the values are not right, don't submit the form, and set the background color  to red
// 4. If the values are right, display the queries key value pair, on the page
// */
// function form() {
//   let body = document.body;
//   let username = document.querySelector("#username");
//   let password = document.querySelector("#password");
//   let submit = document
//     .querySelector("#submit")
//     .addEventListener("click", click);
//   //   const urlSearchParamsObj = new URLSearchParams(window.location.search);

//   function click(e) {
//     if (username.value.length < 4 || password == "") {
//       body.style.backgroundColor = "red";
//       console.log("WRONG!");
//       e.preventDefault();
//     } else {
//       e.preventDefault();
//       body.style.backgroundColor = "green";
//       console.log("SUCCESS");
//       let results = document.getElementById("results");
//       let usernameValue = username.value;
//       let passwordValue = password.value;
//       results.append("Username is: ", usernameValue);
//       results.append("Password is: ", passwordValue);
//     }
//   }
// }
// form();

// for (const [key, value] of urlSearchParamsObj.entries()) {
//     let paragraph = document.createElement("p");
//     paragraph.textContent = `${key}: ${value}`;
//     results.appendChild(paragraph);

// // # HTTP and forms
// let form = document.getElementById("form");

// //VALIDATION
// form.addEventListener("submit", submitFunction);
// function submitFunction(event) {
//   let locationUsername = document.getElementById("username").value;
//   let locationPassword = document.getElementById("password").value;

//   if (
//     locationUsername.length < 5 ||
//     locationUsername[0] !== locationUsername[0].toUpperCase() ||
//     locationPassword == ""
//   ) {
//     event.preventDefault();
//     document.body.style.backgroundColor = "red";
//   }
// }

// const urlSearchParamsObj = new URLSearchParams(window.location.search);
// console.log(URLSearchParams);

// let results = document.getElementById("displayValues");

// for (const [key, value] of urlSearchParamsObj.entries()) {
//   let paragraph = document.createElement("p");
//   paragraph.textContent = `${key}: ${value}`;
//   results.appendChild(paragraph);
// }

//* 1. Parse this JSON string into a JS object
// 2. Use array or object methods to display THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION
// 3. Create another variable to stringify the JS object.
// Console.log the variable
// 4.  Then use pretty print (look at the lesson)
// let jsonString = `
// {
//     "quiz": {
//         "sport": {
//             "q1": {
//                 "question": "Which one is correct team name in NBA?",
//                 "options": [
//                     "New York Bulls",
//                     "Los Angeles Kings",
//                     "Golden State Warriros",
//                     "Huston Rocket"
//                 ],
//                 "answer": "Huston Rocket"
//             }
//         },
//         "maths": {
//             "q1": {
//                 "question": "5 + 7 = ?",
//                 "options": [
//                     10,
//                     11,
//                     12,
//                     13
//                 ],
//                 "answer": 12
//             },
//             "q2": {
//                 "question": "12 - 8 = ?",
//                 "options": [
//                     1,
//                     2,
//                     3,
//                     4
//                 ],
//                 "answer": 4
//             }
//         }
//     }
// }`;

// let jsObject = JSON.parse(jsonString);
// for (let i = 0; i < jsObject.quiz.sport.q1.options.length; i++) {
//   let newObj = jsObject.quiz.sport.q1.options[i];
//   let part3 = JSON.stringify(newObj, null, 2);
//   console.log(part3);
// }
