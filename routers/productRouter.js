const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const asyncMiddleware = require("../middlewares/asyncMiddleware");
const {
  authenticate,
  authorizeAdmin,
} = require("../middlewares/authMiddleware");

router
  .route("/")
  .post(authenticate, authorizeAdmin, asyncMiddleware(createProduct))
  .get(asyncMiddleware(getProduct));

router
  .route("/:id")
  .patch(authenticate, authorizeAdmin, asyncMiddleware(updateProduct))
  .delete(authenticate, authorizeAdmin, asyncMiddleware(deleteProduct));

module.exports = router;
