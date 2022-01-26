const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(express.urlencoded());
app.use(express.json());

const data = {
  message: "Do you know da way my bruda?",
};

const parsedData = JSON.stringify(data);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/api/hello", (req, res) => res.end(parsedData));

app.post("/api/world", (req, res) => {
  console.log(req.body);
});
