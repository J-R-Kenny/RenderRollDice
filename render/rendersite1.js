const express = require("express");
const app = express();

//register view engine
app.set("view engine", "ejs");

app.listen(3000);

app.get("/", async (req, res) => {
  const rollResult = await rollDice();
  res.json(rollResult);
});

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
