// const express = require("express");
// const app = express();
// const port = 3000;

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// app.use("/", express.static(__dirname + "/public/"));
// app.use(express.urlencoded());
// app.use(express.json());

// app.get("/welcome", (req, res) => {
//   res.sendFile(__dirname + "/public/about.html");
// });

// app.get("/login/:id", (req, res) => {
//   console.log(req.params);
//   res.send(`Hello ${req.params.id}`);
// });

// app.get("/products/", (req, res) => {
//   res.status(404).send("Page not found");
// });

// app
//   .route("/login")
//   .get((req, res) => {
//     console.log(req.query); // query string ?a=2&b=5 gives us an object
//     res.json({ user: "fima" });
//   })
//   .post((req, res) => {
//     console.log(req.body);
//   });

// DATABASES
