const express = require("express");
const ProductModel = require("../models/product.schema");

const app = express.Router();

app.get("/", (req, res) => {
  res.send("Get products more");
});

app.post("/", async (req, res) => {
  const {products} = req.body;
  try {
    products.forEach(async (ele) => {
      const isExist = await ProductModel.findOne({productId: ele.productId});
      if (isExist) {
        if (ele.operation === "add") {
          await ProductModel.findOneAndUpdate(
            {productId: ele.productId},
            {
              quantity: Number(isExist.quantity) + Number(ele.quantity),
            }
          );
        } else {
          await ProductModel.findOneAndUpdate(
            {productId: ele.productId},
            {
              quantity: Number(isExist.quantity) - Number(ele.quantity),
            }
          );
        }
      } else {
        if (ele.operation === "add") {
          const newProd = new ProductModel(ele);
          await newProd.save();
        }
      }
    });

    res.send({message: "success"});
  } catch (e) {
    res.status(400).send({message: e.message});
  }
});
module.exports = app;
