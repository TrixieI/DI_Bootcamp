const express = require("express");
const env = require("dotenv");
const db = require("./modules/db.js");
const app = express();
app.use(express.urlencoded());
app.use(express.json());

env.config();

app.listen(process.env.PORT, () =>
  console.log(`app listening on port ${process.env.PORT}!`)
);

app.use("/", express.static(__dirname + "/public"));

// app.use("/about", express.static(__dirname + "/public/about.html"));
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

app.get("/welcome", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/customers", (req, res) => {
  db.getCustomers()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => console.log(error));
});

app.get("/customer", (req, res) => {
  db.getCustomer(req.query.cid)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => console.log(error));
});

app.get("/customer/:id", (req, res) => {
  db.getCustomer(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => console.log(error));
});
