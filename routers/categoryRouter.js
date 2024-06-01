const express = require("express");
const router = express.Router();

const {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

const asyncMiddleware = require("../middlewares/asyncMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

router
  .route("/")
  .post(
    asyncMiddleware(authMiddleware),
    roleMiddleware("admin"),
    asyncMiddleware(createCategory)
  )
  .get(asyncMiddleware(getCategories));

router
  .route("/:id")
  .patch(asyncMiddleware(updateCategory))
  .delete(asyncMiddleware(deleteCategory));
module.exports = router;
