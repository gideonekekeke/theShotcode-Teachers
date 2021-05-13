require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const url = "mongodb://localhost:herokuDB";

const port = process.env.PORT || 56000;
const app = express();
mongoose.connect(url, { useNewUrlParser: true }).then(() => {
  console.log("successfully deployed");
});

app.get("/", (req, res) => {
  res.send("hosting this api on heroku now ..!");
});

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
