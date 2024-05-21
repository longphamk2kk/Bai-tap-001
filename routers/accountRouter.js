const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getAllAccount,
} = require("../controllers/accountController");

const asyncMiddleware = require("../middlewares/asyncMiddleware");

router.route("/").get(asyncMiddleware(getAllAccount));
router.route("/login").post(asyncMiddleware(login));
router.route("/register").post(asyncMiddleware(register));

module.exports = router;
