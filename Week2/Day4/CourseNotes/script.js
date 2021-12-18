// EXERCISE 1 - Functions

function myFunction(myAge) {
    let momAge = myAge*2
    let dadAge = momAge*1.2
    console.log(`My mum age is ${momAge} and my dad age is ${dadAge}` );
}

myFunction(27)

// EXERCISE 2 - Functions

function newFunction(myAge) {
    mumAge = myAge*2;
    return mumAge;
}

newFunction(27)
console.log(mumAge)

// 

let pricesRestaurant = [25,19,46];

// 1. Create a function, that takes this array, give me the sum

function findTotalSum () {
	let sum = 0;
	for (let price of pricesRestaurant) {
		sum = sum + price;
	}
	return sum;
}

// 2. Function take the sum and * 1.17

function findTotalSumWithTaxes () {
	let sumWithTaxes = findTotalSum() * 1.17;
	// 				 = 90 * 1.17
	return sumWithTaxes;
}

// 3. Function waiterspeaking -> tell me the totalsum
// if the waiter speaks english ->
// if the waiter speaks french ->

function waitingSpeaking (language) {
	let result = findTotalSumWithTaxes();
	if (language == "english"){
		return `the price is ${result}`
	} else if (language == "french") {
		return `Le prix est ${result}`
	} else {
		return `//-- ${result}`
	}
}

console.log(waitingSpeaking("english"));

//4. Create a function that display the price that each of us needs to pay (price including taxes)

function division() {
    let divide = findTotalSumWithTaxes() / 3
    return divide
}

console.log(`each needs to pay ${division()}`)