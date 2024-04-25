const express = require("express");
const router = express.Router();

const {
  createComment,
  getComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

router.route("/").post(createComment);

router.route("/:id").patch(updateComment).delete(deleteComment);

router.route("/:productId").get(getComment);

module.exports = router;
