// Exercise Game - The word game
// You need to create 4 functions, each of them return a promises
// 1. The 1st function, receives 2 famous persons name from the user - if the names are not a string -> reject
// 2. The 2nd function, receives a noun - if the noun is less than 3 letters - reject
// 3. The 3rd function, receives a city - if the city doesn't start with an uppercase letter -> reject
// 4. The 4st function, receives a verb (finishing with "ing") - if it doesn't end with "ing" -> reject
// 5. The last function, is an async function - it receives all the above promises, and return a sentence with it
// Ex: "Beyonce is playing football with Barack Obama in Paris"

// async function famous(name1, name2) {
//   if (typeof name1 && typeof name2 === "string") {
//     let result = [name1, name2];
//     return result;
//   } else {
//     throw new Error("Must be a string!");
//   }
// }

// async function noun(noun) {
//   if (noun.length >= 3) {
//     return noun;
//   } else {
//     throw new Error("Must be at least 3 letters long");
//   }
// }

// async function city(city) {
//   if (city.charAt(0) === city.charAt(0).toUpperCase()) {
//     return city;
//   } else {
//     throw new Error("First letter of the city must be an uppercase!");
//   }
// }

// async function verb(verb) {
//   if (verb != verb.endsWith("ing")) {
//     return verb;
//   } else {
//     throw new Error("Verb must end with 'ing'");
//   }
// }

// async function together() {
//   let f1 = await famous("The Rock", "Bibi Netanyahu");
//   let f2 = await noun("sharks");
//   let f3 = await city("Israel");
//   let f4 = await verb("fishing");
//   console.log(`${f1[0]} is ${f4} ${f2} with ${f1[1]} in ${f3}`);
// }

// together();

// //----------------------
// // ERROR HANDLING
// //----------------------

// let btn = document.getElementById("btn");
// btn.addEventListener("click", requestData)

// // // with async-await
// // // try, catch is better than
// // // then,catch because it can find an error across multiple promises

// async function requestData () {
// 	try {
// 		let fetched = await fetch('https://jsonplaceholder.typicode.com/users/1');
// 		if(fetched.status === 200){
// 	    	let user = await fetched.json();
// 	    	console.log(user.username)
// 	    	let fetchedSpecificGif = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${user.username}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
// 	    	let details = await fetchedSpecificGif.json();
// 	    	console.log(details.data.title)
// 		} else {
// 			throw new Error("not 200")
// 		}
// 	} catch {
// 		console.log("Error")
// 		let results = document.getElementById("results");
// 		results.innerHTML = "<iframe src='https://giphy.com/embed/3o6Zt6ML6BklcajjsA' width='480' height='360' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></p>";
// 	}
// }

// async function word() {
//   try {
//     let response = await fetch(
//       "http://random-word-api.herokuapp.com/word?number=1"
//     );
//     if (response.status == 200) {
//       let jsObject = await response.json();
//       let body = document.body;
//       body.innerText = jsObject[0];
//       console.log(jsObject[0]);
//       exercise(jsObject[0]);
//     } else {
//       throw new Error("not 200");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function exercise(test) {
//   try {
//     let response = await fetch(
//       `https://api.giphy.com/v1/gifs/random?tag=%22${test}%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
//     );
//     if (response.status == 200) {
//       let jsData = await response.json();
//       console.log(jsData);
//       append(jsData.data.images.original.url);
//     } else {
//       throw new Error(img);
//     }
//   } catch (error) {
//     let body = document.body;
//     let img = document.createElement("img");
//     img.setAttribute(
//       "src",
//       "https://i.pinimg.com/originals/13/3d/62/133d62f4c7611596b265b81bfb9be08c.gif"
//     );
//     body.append(img);
//     console.log(error);
//   }
// }
// function append(url) {
//   let body = document.body;
//   let img = document.createElement("img");
//   img.setAttribute("src", url);
//   body.append(img);
// }

// word();

//? Copy the code below in your editor.
//? Find a way to check the performance of this code  (look on google for some build in JS method)
//? Improve the performance using Promise.all
//? Check the difference of performance, with and without Promise.all

// let btn = document.getElementById("btn");
// btn.addEventListener("click", requestData);

// async function requestData() {
//   try {
//     const url1 = "https://jsonplaceholder.typicode.com/users/1";
//     const url2 = "https://jsonplaceholder.typicode.com/users/2";
//     const fetch1 = await fetch(url1);
//     const fetch2 = await fetch(url2);

//     if (fetch1.status === 200 && fetch2.status === 200) {
//       const firstUser = await fetch1.json();
//       const secondUser = await fetch2.json();

//       let resultsDiv = document.getElementById("results");
//       let p = document.createElement("p");
//       p.textContent = `1st USER : ${firstUser.name} - 2nd USER : ${secondUser.name}`;
//       resultsDiv.appendChild(p);
//     } else {
//       throw new Error("not 200");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
