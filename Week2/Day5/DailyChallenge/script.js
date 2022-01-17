let number = parseInt(prompt("Enter number for the bottles", "99"));
let reducer = 1;
for (let t = 0; number >= t; reducer++) {
  number -= reducer - 1;
  if (reducer === 1) {
    console.log(`${number} bottles of beer on the wall
${number} bottles of beer
Take ${reducer} down, pass it around
${number - reducer} bottles of beer on the wall`);
  } else if (number <= reducer) {
    console.log(`${number} bottles of beer on the wall
${number} bottles of beer
Take ${number} down, pass them around
${number - number} bottles of beer on the wall`);
    break;
  } else {
    console.log(`${number} bottles of beer on the wall
${number} bottles of beer
Take ${reducer} down, pass them around
${number - reducer} bottles of beer on the wall`);
  }
}
