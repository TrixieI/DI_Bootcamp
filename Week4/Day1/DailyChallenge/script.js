const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

let arrayOne = gameInfo.forEach(
  ({ username }) => console.log((username += "!")) // displays john! becky! susy! tyson!
);

let arrayTwo = gameInfo.forEach(
  ({ username, score }) => (score > 5 ? console.log(username) : null) // displays becky and susy
);
