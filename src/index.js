require("dotenv").config();
const express = require("express");
const ConnectDB = require("./config/ConnectDB");
const productRoute = require("./routes/product.route");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello User");
});

app.use("/products", productRoute);

app.listen(PORT, async () => {
  await ConnectDB();
  console.log(`Listening to http://localhost:${PORT}`);
});
