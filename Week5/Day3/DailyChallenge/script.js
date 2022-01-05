// First Daily Challenge
let arrayOfWords = ["tomato", "airplane", "dog", "bike"];
let complicatedArray = ["hello", "asphalt", 3, true];

function makeAllCaps(array) {
  let exercise1 = new Promise((resolve, reject) => {
    if (arrayOfWords.length > 0) {
      array = array.map((words) => words.toUpperCase());

      resolve(array);
    } else {
      reject("Error! Array is empty!");
    }
  });
  return exercise1;
}

function sortWords(array) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "string") {
        resolve(array.sort());
      } else {
        reject("Error, array contains something that isn't a string!");
      }
    }
  });
}
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result)) // Displays ['AIRPLANE', 'BIKE', 'DOG', 'TOMATO']
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); // Gives an error

// Part 2

let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

let ask = prompt("Give word");
let arr = [];

function toJS(morse) {
  return new Promise((resolve, reject) => {
    let jsmorse = JSON.parse(morse); // Gives us a Javascript Object from the JSON object
    if (morse.length < 0) {
      reject("Error, object is empty!");
    } else {
      resolve(jsmorse);
    }
  });
}

function toMorse(jsmorse) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < ask.length; i++) {
      let morseNew = jsmorse[ask[i]];
      if (jsmorse == undefined) {
        reject("Something went wrong!");
      } else {
        console.log(arr.push(morseNew)); // displays the morse code
        resolve(morseNew);
      }
    }
  });
}

function joinWords(morseNew) {
  return new Promise((resolve, reject) => {
    console.log(arr);
    for (let i = 0; i < morseNew.length; i++) {
      if (morseNew) {
        let result = arr.join("\n"); // displays ....,.,.-..,.-..,--- instead of hello with breaks
        resolve(result);
      } else {
        reject(result);
      }
    }
  });
}

toJS(morse)
  .then(toMorse)
  .then(joinWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
// gives us the result of "hello"
// ....
// .
// .-..
// .-..
// ---
