const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  start: {
    type: Number,
    required: true,
  },
  img: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "account",
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
});

module.exports = mongoose.model("comment", commentSchema);
