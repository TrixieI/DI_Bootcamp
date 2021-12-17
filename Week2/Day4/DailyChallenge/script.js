// Help on the Daily challenge

// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.

// prompt -> "Hello students in Israel"
// we need to split the answer of the user, we need to split the string

// ["Hello","students", "in", "Israel"]

// let answer = "Hello students in Israel";
// let arrayOfWords = answer.split(" ");
// console.log(arrayOfWords)

//  2 lines of stars, one at the beginning, and one at the end
//  each line of words start with a star and ends with a star

// ************
// * Hello    *
// * students *
// * in       *
// * Israel   *
// ************

// 1. Find the length of longest word
// 2. To find the numbers of stars at the top and bottom
// length of longest word
// 3. Length of the longest word - length of the current word



let ask = prompt("Please write a few words and add commas with space after each word!")
const array = ask.split(", ")
console.log(array)

let longestWord = 0;
let t;
let i;
let arrayLength = array.length
console.log(arrayLength)
let newArray;

let lgth = 0;
let longest;



for (i = 0; i < array.length; i++) {
  if (array[i].length > lgth) {
     lgth = array[i].length;
    longest = array[i];
  }
}
longester = longest.length
console.log(longester)

for(i = 0; i < arrayLength; i++) {
   array[i] = "* " + array[i]
   array[i] = array[i] + " *"
   console.log(array[i])
}


