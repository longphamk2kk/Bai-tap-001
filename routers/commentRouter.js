const express = require("express");
const router = express.Router();

const {
  createComment,
  getComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");
const asyncMiddleware = require("../middlewares/asyncMiddleware");

router.route("/").post(asyncMiddleware(createComment));

router
  .route("/:id")
  .patch(asyncMiddleware(updateComment))
  .delete(asyncMiddleware(deleteComment));

router.route("/:productId").get(asyncMiddleware(getComment));

module.exports = router;
