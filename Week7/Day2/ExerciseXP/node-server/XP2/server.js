// ExerciseXP+ part 1

const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/", (req, res) => {
  const user = {
    firstname: "John",
    lastname: "Doe",
  };
  console.log(user);
  res.send(user);
});
app.use("/", express.static(__dirname + "/public/"));

// ExerciseXP+ part2

const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/:id", (req, res) => {
  res.send(req.params);
  console.log(req.params);
});

// ExerciseXP+ part 3

const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use("/", express.static(__dirname + "/public/"));
