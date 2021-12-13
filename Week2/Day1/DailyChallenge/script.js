//Exercise 1

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0,1) // Removes "Banana"
fruits.sort() // Sorts in Alphabetical order
fruits.push("Kiwi") // Adds "Kiwi" to the end of the Array
fruits.shift() // Removes Apples from the Array because its the first element
fruits.reverse() // Reverses the Array
console.log(fruits); // Displays the array

//Exercise 2
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0]); // We access the first array with index 1 then we access the first INNER array with index 1 again and pick oranges with index 0