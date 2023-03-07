const {Schema, model} = require("mongoose");

const productSchema = new Schema({
  productId: {type: String, require: true},
  quantity: {type: Number, min: 1, require: true},
});

const ProductModel = model("product", productSchema);

module.exports = ProductModel;
