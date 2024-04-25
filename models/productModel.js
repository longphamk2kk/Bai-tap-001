const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  avt: {
    type: String,
    require: true,
  },
  discount: {
    type: Number,
    require: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
});

module.exports = mongoose.model("product", productSchema);
