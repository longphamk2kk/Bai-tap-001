const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getAllAccount,
} = require("../controllers/accountController");

router.route("/").get(getAllAccount);
router.route("/login").post(login);
router.route("/register").post(register);

module.exports = router;
