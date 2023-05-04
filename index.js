const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 5000;

const chefs = require("./data/chefs.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("spicy club running");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const _id = req.params.id;
  const selectedChefs = chefs.find((chef) => +chef.id === +_id);
  res.send(selectedChefs);
});

app.listen(port, () => {
  console.log(`spicy club running on port : ${port}`);
});
