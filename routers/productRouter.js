const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.route("/").post(createProduct).get(getProduct);

router.route("/:id").patch(updateProduct).delete(deleteProduct);

module.exports = router;
