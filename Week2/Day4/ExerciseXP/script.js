// EXERCISE 1 part 1

function infoAboutMe() {
    console.log("My name is Fima, i'm 27, I like mountain biking")
}
infoAboutMe()

// EXERCISE 1 part 2

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`Your name is ${personName}, your age is ${personAge} and your favorite color is ${personFavoriteColor}`)
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

// EXERCISE 2

function calculateTip() {
   let bill = parseInt(prompt("What's the bill amount?", "0"))
   if(bill <= 50) {
       tip = bill*0.20
   } else if(bill > 50 && bill < 200) {
       tip = bill*0.15
   } else {
       tip = bill*0.10
   }
   let finalBill = tip + bill
   console.log(`Your tip is ${tip}$ and the final bill is ${finalBill}$`)
}

calculateTip()

// EXERCISE 3

function isDivisible() {
    let sum = 0;
    for(let number = 0; number <= 500; number++) {
        if(number % 23 === 0) {
            sum += number  
            console.log(number)
        }else {
            continue;
        }
    } console.log(`The total sum is: ${sum}`) // Displays 5313 as the total sum
} 
isDivisible() // Displays all the numbers divisible by 23

// EXERCISE 4  - NEED TO FINISH LOOP MISSING

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

// End result should be 5.5 price

let shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let sum = 0;
for(let item of shoppingList) {
   
  if(stock[item] > 1) {
    console.log(prices[item])
    sum += prices[item]
    
}else {
    console.log("an item was out of stock")
        }
    } console.log(`The total price is ${sum}`)
}
myBill()


// EXERCISE 5 
function changeEnough(itemPrice, amountOfChange) {
    let sum = 0;
    let array = [.25,.10,.05,.01]
    for (let counter = 0; counter < amountOfChange.length; counter++){
        let total = array[counter] * amountOfChange[counter]
        sum += total;
    }
    if(sum >= itemPrice) {
       return true;
    }else {
       return false;
    }
}

console.log(changeEnough(4.25, [25,20,5,0]))






// EXERCISE 6

function hotelCost() {
    let nightsPrice = 140;
    let nights = parseInt(prompt("Number of Nights"))
     while(nights < 1 || isNaN(nights)){
        nights = parseInt(prompt("Number of Nights"))
     }
     let finalPrice = nights * nightsPrice
     return finalPrice
     
     
}

function planeRideCost() {

let city = prompt("Enter city: ")
    while (city === 'false' || typeof city!=='string') {
        city = prompt("Enter city: ")
    }
    if(city == 'London'){
        city = 183
    } else if(city == 'Paris'){
        city = 220
    } else {
        city = 300
    }
    let cityCost = city
    return cityCost
} 


function rentalCarCost() {
    let carCost = 40;
    let car = parseInt(prompt("Enter number of car rent days"))
         while(car < 1 || isNaN(car)){
            car = parseInt(prompt("Enter number of car rent days"))
    }
        if(car <= 10){
            carCost *= car;
            return carCost;
        }else {
            carCost *= car * 0.95;
            console.log("You got a 5% discount on your car rental!")
            return carCost;
            
        }
}

let finalPrice = hotelCost() + planeRideCost() + rentalCarCost()

function totalVacationCost() {
    console.log(`The hotel cost is ${hotelCost()}$, the plane tickets
cost is ${planeRideCost()}$ and the car rental cost is ${rentalCarCost()}$
The final price is ${finalPrice}$ for the whole trip!`)
}

totalVacationCost()