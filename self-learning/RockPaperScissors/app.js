function game() {
  let playerChoice;
  let value;
  let array = ["rock", "paper", "scissors"];
  let body = document.body;

  for (let i = 0; i < array.length; i++) {
    loop = document.createElement("div");
    loop.setAttribute("class", "container");
    let button = document.createElement("button");
    button.addEventListener("click", click);
    button.setAttribute("class", array[i]);
    button.append(array[i]);
    loop.append(button);
    body.append(loop);
  }
  let rock = document.querySelector(".rock");
  let paper = document.querySelector(".paper");
  let scissors = document.querySelector(".scissors");

  function click(e) {
    playerChoice = e.target;
    console.log("player choice is: ", playerChoice.innerHTML);
    computerPlay();
    if (value === "rock" && playerChoice == rock) {
      console.log(
        `DRAW! your choice was ${playerChoice.innerHTML}, computer choice was ${value}`
      );
    } else if (value === "paper" && playerChoice == paper) {
      console.log(
        `DRAW! your choice was ${playerChoice.innerHTML}, computer choice was ${value}`
      );
    } else if (value === "scissors" && playerChoice == scissors) {
      console.log(
        `DRAW! your choice was ${playerChoice.innerHTML}, computer choice was ${value}`
      );
    } else if (value === "rock" && playerChoice == scissors) {
      console.log(
        `YOU LOST! your choice was ${playerChoice.innerHTML}, computer choice was ${value}`
      );
    } else if (value === "paper" && playerChoice == rock) {
      console.log(
        `YOU LOST! your choice was ${playerChoice.innerHTML}, computer choice was ${value}`
      );
    } else if (value === "paper" && playerChoice == scissors) {
      console.log(
        `YOU WON! your choice was ${playerChoice.innerHTML}, computer choice was ${value}`
      );
    } else if (value === "scissors" && playerChoice == rock) {
      console.log(
        `YOU WON! your choice was ${playerChoice.innerHTML}, computer choice was ${value}`
      );
    } else if (value === "rock" && playerChoice == paper) {
      console.log(
        `YOU WON! your choice was ${playerChoice.innerHTML}, computer choice was ${value}`
      );
    } else if (value === "scissors" && playerChoice == paper) {
      console.log(
        `YOU LOST! your choice was ${playerChoice.innerHTML}, computer choice was ${value}`
      );
    } else {
      console.log("ERROR");
    }
  }

  function computerPlay() {
    let arr = [1, 2, 3];
    let random = arr[Math.floor(Math.random() * arr.length)];
    switch (random) {
      case 1:
        value = "rock";
        break;
      case 2:
        value = "paper";
        break;
      default:
        value = "scissors";
    }
    return value;
  }
}
game();
