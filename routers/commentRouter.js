const express = require("express");
const router = express.Router();

const {
  createComment,
  getComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");
const asyncMiddleware = require("../middlewares/asyncMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

router
  .route("/")
  .post(asyncMiddleware(createComment), asyncMiddleware(authMiddleware));

router
  .route("/:id")
  .patch(asyncMiddleware(updateComment), asyncMiddleware(authMiddleware))
  .delete(asyncMiddleware(deleteComment), asyncMiddleware(authMiddleware));

router
  .route("/:productId")
  .get(asyncMiddleware(getComment), asyncMiddleware(authMiddleware));

module.exports = router;
