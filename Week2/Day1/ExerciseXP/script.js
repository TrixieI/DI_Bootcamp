// Exercise 1

let faivFood = "Ramen";
let faivMeal = "breakfast";
console.log(`I eat ${faivFood} at every ${faivMeal}`);

//Exercise 2 part 1
let watchedSeries = ["black mirror", "money heist", "the big bang theory"]
let watchedSeriesLength = watchedSeries.length;
let myWatchedSeries = "Rick and Morty, Southpark, and Mushoku Tensei"
console.log(`I watched 3 series: ${myWatchedSeries}`);

//Exercise 2 part 2
watchedSeries.splice(2,2,'Friends')
console.log(watchedSeries) // Displays (3) ['black mirror', 'money heist', 'Friends']
watchedSeries.push("Arcane") // Adds Arcane to the end of the Array
watchedSeries.unshift("Konosuba") // Adds Konosuba to the beginning of the Array
watchedSeries.splice(1,1) // Removes black mirror from the array
console.log(watchedSeries[1].charAt(2)); // Displays the letter "n" 
console.log(watchedSeries) // Displays (4) ['Konosuba', 'money heist', 'Friends', 'Arcane']

//Exercise 3
let cTemp = 24;
let fTemp = (cTemp / 5 * 9) + 32
console.log(fTemp); // Displays 75.19999

//Exercise 4 Guess the Answers #1
let c;
let a = 34;
let b = 21;
console.log(a+b) //first expression
// Prediction: 55 because 34 + 21 = 55
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction:  23 because we changed a to equal 2, so now we get 2 + 21 which equals to 23
// Actual: 23

console.log(3 + 4 + '5');
//Prediction: 3 + 4 = 7, 7 + '5' = '75' <-- String, if you add a number to a string with + operator, the number will convert into a string



//Exercise 4 : Guess The Answers #2


typeof(15)
// Prediction: Number, 15 is a number type
// Actual: number

typeof(5.5)
// Prediction: Number, 5.5 is a number type
// Actual: number

typeof(NaN)
// Prediction:  Undefined
// Actual: number

typeof("hello") 
// Prediction: String 
// Actual: string

typeof(true)
// Prediction: Boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: True, 1 IS NOT equal to 2 so its true
// Actual: boolean

"hamburger" + "s"
// Prediction: "hamburgers" we add the string "s" to string "hamburger" which results in "hamburgers"
// Actual:

"hamburgers" - "s" 
// Prediction: "hamburger" we remove the letter "s" from the string "hamburgers"
// Actual: NaN

"1" + "3" 
// Prediction: "13" we get the string "13" because string "1" + string "3" equals to a string of "13"
// Actual: '13'

"1" - "3"
// Prediction: we get the number -2 because the operator - changes the type from string to number which results in 1 - 3
// Actual: -2

"johnny" + 5
// Prediction: we get the string "johnny5" because the number 5 gets added to the end of the string and is now a string
// Actual: 'johnny5'

"johnny" - 5
// Prediction: we get NaN because "johnny" is not a number and therefore cannot be devided by the number 5
// Actual: NaN

99 * "hello"
// Prediction: we get NaN because "hello" is a string and not a number
// Actual: NaN

1 != 1
// Prediction: False because 1 DOES equal to 1, here we're trying to say 1 DOESN'T equal to 1 which is false, therefore the answer is False
// Actual: false

1 == "1"
// Prediction: True because the value 1 is the same as the string "1" 
// Actual: true

1 === "1"
// Prediction: False because here we're using tripple = which checks if the VALUE and TYPE are the same, while the value is the same, the type isn't so the answer is False
// Actual: false


//Exercise 5: Guess the Answers


5 + "34"
// Prediction: "534" string because number 5 is converted into a string and added to the string "34"
// Actual: '534'

5 - "4"
// Prediction: NaN because "4" is a string and Not a Number
// Actual: 1

10 % 5
// Prediction: 5 I have no idea
// Actual: 0

5 % 10
// Prediction: 5 I have no idea
// Actual: 5

"Java" + "Script"
// Prediction: "JavaScript" because the two strings are combined
// Actual:

" " + " "
// Prediction: "  " we get two empty spaces inside the string
// Actual: '  '

    " " + 0
// Prediction: " 0" we get the string 0 with a space to its left
// Actual: ' 0'

true + true
// Prediction: the number 2 because true equals to 1 in numbers so 1 + 1 = 2
// Actual: 2

true + false
// Prediction: 1 because 1 + 0 = 1, true = 1 and false = 0
// Actual: 1

false + true 
// Prediction: 1 same as the above
// Actual: 1

false - true 
// Prediction: -1 because 0 - 1 = -1
// Actual: -1

!true
// Prediction: false because the opposite of true is false
// Actual: false

3 - 4
// Prediction: -1 because.. math
// Actual: -1 

"Bob" - "bill"
// Prediction: NaN because strings are not numbers and you cant devide strings
// Actual: NaN
