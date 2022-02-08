const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const products = require("./modules/db");
console.log(products);
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
dotenv.config();

app.listen(process.env.PORT, () =>
  console.log(`App listening on port: ${process.env.PORT}!`)
);

app.get("/products", (req, res) => res.json({ products: products }));

app.post("/products", (req, res) =>
  res.json({
    products: products,
    name: req.body,
    authorization: req.headers.authorization,
  })
);
