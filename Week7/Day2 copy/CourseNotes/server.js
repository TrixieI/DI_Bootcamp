const express = require("express");
const data = require("./data");
const app = express();
const port = 4000;

app.listen(port, () => console.log(`app listening on port ${port}!`));

app.use("/", express.static(__dirname + "/public/"));

app.get("/api/users", (req, res) => {
  data.getRobots().then((re) => res.json(re));
});
