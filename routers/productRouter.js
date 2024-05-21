const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const asyncMiddleware = require("../middlewares/asyncMiddleware");

router
  .route("/")
  .post(asyncMiddleware(createProduct))
  .get(asyncMiddleware(getProduct));

router
  .route("/:id")
  .patch(asyncMiddleware(updateProduct))
  .delete(asyncMiddleware(deleteProduct));

module.exports = router;
