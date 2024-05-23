const accountModel = require("../models/accountModel");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const ErrorRespondse = require("../helper/ErrorResponse");

module.exports = {
  register: async (req, res) => {
    const body = req.body;
    const newAccount = await accountModel.create(body);
    return res.status(201).json(newAccount);
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    const account = await accountModel.findOne({ username });
    if (!account) {
      throw new ErrorRespondse(400, "tk hoac mk ko dung");
    }
    const checkPass = bcryptjs.compareSync(password, account.password);
    if (!checkPass) {
      // return res.status(400).json({
      //   statusCode: 400,
      //   message: "tai khoan hoac mat khau khong dung",
      // });
      throw new ErrorRespondse(400, "tk hoac mk ko dung");
    }

    const payload = { id: account._id, role: account.role};

    const token = jwt.sign(payload, "secretKey", {
      expiresIn: "1h",
    });

    return res.status(200).json({
      statusCode: 200,
      message: " Dang nhap thanh cong",
      data: { ...payload, token },
    });
  },
  getAllAccount: async (req, res) => {
    const accounts = await accountModel.find();
    return res.status(200).json(accounts);
  },
};
