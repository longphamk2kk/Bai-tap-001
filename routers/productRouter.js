const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const asyncMiddleware = require("../middlewares/asyncMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

router
  .route("/")
  .post(asyncMiddleware(authMiddleware), roleMiddleware("admin"), asyncMiddleware(createProduct))
  .get(asyncMiddleware(getProduct));

router
  .route("/:id")
  .patch(asyncMiddleware(authMiddleware), roleMiddleware("admin"), asyncMiddleware(updateProduct))
  .delete(asyncMiddleware(authMiddleware), roleMiddleware("admin"), asyncMiddleware(deleteProduct));

module.exports = router;
