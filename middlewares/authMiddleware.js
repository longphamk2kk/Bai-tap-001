const jwt = require("jsonwebtoken");
const accountModel = require("../models/accountModel");
const ErrorResponse = require("../helper/ErrorResponse");

const authMiddleware = async (req, res, next) => {
  const {authorization} = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")){
    throw new ErrorResponse(401, "unauthorize");
  } 

  const token = authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "secretKey"); // sử dụng khóa bí mật của bạn
    const account = await accountModel.findById(decoded.id);

    if (!account) {
      throw new ErrorResponse(401, "invalid account");
    }

    req.account = account;
    next();
  } catch (error) {
    throw new ErrorResponse(401, "unauthorize");
  }
}; 

module.exports = authMiddleware;
