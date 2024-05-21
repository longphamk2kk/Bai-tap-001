const jwt = require("jsonwebtoken");
const accountModel = require("../models/accountModel");

const authenticate = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, "secretKey"); // sử dụng khóa bí mật của bạn
    const account = await accountModel.findById(decoded.id);

    if (!account) {
      throw new Error();
    }

    req.account = account;
    next();
  } catch (error) {
    res.status(401).send({ error: "Vui lòng xác thực" });
  }
};

const authorizeAdmin = (req, res, next) => {
  if (req.account.role !== "admin") {
    return res
      .status(403)
      .send({ error: "Bạn không có quyền thực hiện thao tác này" });
  }
  next();
};

module.exports = {
  authenticate,
  authorizeAdmin,
};
