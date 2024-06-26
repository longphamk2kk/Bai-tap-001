const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getAllAccount,
  deleteAccount,
} = require("../controllers/accountController");

const asyncMiddleware = require("../middlewares/asyncMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

router
  .route("/")
  .get(
    asyncMiddleware(authMiddleware),
    roleMiddleware("admin"),
    asyncMiddleware(getAllAccount)
  );
router.route("/login").post(asyncMiddleware(login));
router.route("/register").post(asyncMiddleware(register));
router
  .route("/:id")
  .delete(
    asyncMiddleware(authMiddleware),
    roleMiddleware("admin"),
    asyncMiddleware(deleteAccount)
  );

module.exports = router;
