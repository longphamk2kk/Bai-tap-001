const express = require("express");
const router = express.Router();

const {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const asyncMiddleware = require("../middlewares/asyncMiddleware");

router
  .route("/")
  .post(asyncMiddleware(createCategory))
  .get(asyncMiddleware(getCategories));

router
  .route("/:id")
  .patch(asyncMiddleware(updateCategory))
  .delete(asyncMiddleware(deleteCategory));
module.exports = router;
