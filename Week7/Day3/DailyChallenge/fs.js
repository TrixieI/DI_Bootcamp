let fs = require("fs");

fs.readFile("./RightLeft.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const game = data.toString();
    let position = 0;
    let steps = 0;
    let first = 0;
    for (let i = 0; i < game.length; i++) {
      steps++;
      if (game[i] === `>`) {
        position++;
      } else {
        position--;
      }
      if (position === -1 && first === 0) {
        console.log(`first time in left side is in ${steps} steps`);
        first = 1;
      }
    }
    console.log(`total steps: ${position}`);
  }
});
