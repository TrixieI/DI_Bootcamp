const express = require("express");
const db = require("./modules/db");
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/countries", (req, res) => {
  db.getCountries()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => console.log(error));
});

app.use("/", express.static(__dirname + "/public"));
