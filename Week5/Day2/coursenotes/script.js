// // Use Chuck Norris API : https://api.chucknorris.io/
// // Retrieve a random chuck joke in JSON format : https://api.chucknorris.io/jokes/random

// // 1. Create a new XMLHttpRequest object
// let xhr = new XMLHttpRequest();

// // 2. Configure it: GET-request for the URL
// xhr.open("GET", "https://api.chucknorris.io/jokes/random");

// // 3. Send the request over the network
// xhr.send();

// // 4. This will be called after the response is received
// xhr.onload = function () {
//   if (xhr.status != 200) {
//     // analyze HTTP status of the response
//     alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
//   } else {
//     // show the result
//     console.log(`Done ${xhr.response}`); // response is the server
//   }
// };

// xhr.onerror = function () {
//   alert("Request failed");
// };

// Exercise

//? Write a function called `divide` that takes two parameters: a numerator and a denominator.
//? Your function should return the result of numerator / denominator.
//? However, if denominator is zero you should throw the error, "Attempted to divide by zero."

// function divide(num, denum) {
//   let result = num / denum;
//   try {
//     if (denum == 0) {
//       throw new Error("Attempted to divide by 0");
//     }
//   } catch (err) {
//     console.log(err);
//   } finally {
//     null;
//   }
//   console.log(result);
// }
// divide(10, 0); // // gives an error and infinity

// let btn = document.getElementById("btn");
// btn.addEventListener("click", requestData)

// let xhr = new XMLHttpRequest();

// function requestData () {
// 	xhr.open('GET', 'https://lisenakache.github.io/HttpRequestGithub/test.json');
// 	xhr.responseType = 'json';
// 	xhr.send();
// }

// //5. when the request is complete and the response is fully downloaded.
// xhr.onload = function() {
// 	document.body.style.backgroundColor = "white";
// 	if (xhr.status != 200) {
// 	 	console.log("error status")
// 		displayError(xhr)
// 	} else {
// 		console.log("Finished Loading")
// 		console.log(xhr.response)
// 		displayUser(xhr.response)
// 	}
// };

// // 6. triggers periodically while the response is being downloaded
// xhr.onprogress = function(event) {
// 	console.log("progress", xhr)
// 	document.body.style.backgroundColor = "red";
// };

// //7. when the request couldn't be made - when there is a NETWORK error
// xhr.onerror = function(event) {
// 	console.log("error", xhr);
//   	displayError(xhr)
// };

// const displayUser = (animals) => {
// 	let results = document.getElementById("results")
// 	animals.forEach(info => {
// 		let li = document.createElement("li");
// 		li.textContent = `${info.name} - ${info.species}`
// 		results.appendChild(li)
// 	});

// }

// const displayError = (xhr) => {
// 	console.log("in display error")
// 	let error = document.getElementById("error");
// 	let h2 = document.createElement("h2");
// 	// h2.textContent = `Error`;
// 	h2.textContent = `Error : ${xhr.status}`
// 	h2.style.backgroundColor = 'pink';
// 	error.appendChild(h2);
// }

//? - Use the method onload, onprogress, onerror
//? - If there is no error, display on the page the name, email, city of the 3 first users

// let api = new XMLHttpRequest();

// function requestData() {
//   api.open("GET", "https://jsonplaceholder.typicode.com/users");
//   api.responseType = "json";
//   api.send();
// }

// requestData();

// api.onload = function () {
//   if (api.status != 200) {
//     console.log("error status");
//   } else {
//     console.log("Finished Loading");
//     console.log(api.response);
//     robots(api.response);
//   }
// };

// api.onprogress = function (e) {
//   console.log("progress", api);
// };

// api.onerror = function (e) {
//   console.log("error", api);
// };

// function robots() {
//   for (let i = 0; i < 3; i++) {
//     let body = document.body;
//     let newul = document.createElement("ul");
//     let newli = document.createElement("li");
//     let city = document.createElement("li");
//     city.textContent = api.response[i].address.city;
//     newli.textContent = api.response[i].email;
//     newul.textContent = api.response[i].name;
//     newul.append(newli);
//     newul.append(city);
//     body.append(newul);
//   }
// }
