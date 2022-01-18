const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use("/form", express.static(__dirname + "/public/"));

app.post("/formData", (req, res) => {
  let string = JSON.stringify(req.body);
  res.send(string);
});
