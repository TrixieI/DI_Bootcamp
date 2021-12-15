// Daily Challenge

/*
Write a JavaScript program that recreates the pattern below.
Do this challenge twice: first by using one loop, then by using two nested for loops
Do this Daily Challenge by yourself, without looking at the answers on the internet.

x  
x x  
x x x  
x x x x      <--  pyramid of 6 rows and 6 columns
x x x x x           
x x x x x x

*/
// Loop one

  let star1 = ""

  for(let i = 0; i < 6; i++){
      star1 += '* ';
      console.log(star1);
  }

// Loop 2 - Nested loop


let starLength = 6;
let star2 = '';
for (let i = 1; i <= starLength; i++) {
    for (let c = 1; c <= i; c++) {
        star2 += "* ";
    }
    console.log(star2);
    star2 = ""
} 