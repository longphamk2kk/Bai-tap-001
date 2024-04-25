const commentModel = require("../models/commentModel");

module.exports = {
  createComment: async (req, res) => {
    // const account = req.account; // account đăng nhập
    const body = req.body;
    //thiếu validation
    // check product id
    // gán account id = account đăng nhập

    const newComment = await commentModel.create(body);
    return res.status(201).json(newComment);
  },
  getComment: async (req, res) => {
    const category_id = req.query.category_id; // comment cho product, k phải category
    const body_query = {};
    if (category_id) {
      body_query.category_id = category_id;
    }
    const commentts = await commentModel
      .find(body_query)
      .sort({
        createdAt: -1 //giảm dần
      })
      .populate("category_id"); 

      //hoàn thiện nốt
  },
  updateComment: async (req, res) => {
    //lấy ra tài khoản để truy vấn
    // const account = req.account;

    const id = req.params.id;
    const body = req.body;

    //phải là findOne cái comment có id là req.params.id và có tài khoản là accountId = account._id
    //nếu k là ng khác sẽ update được comment của 1 ai đó
    const updateComment = await commentModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    return res.status(200).json(updateComment);
  },
  deleteComment: async (req, res) => {
    const id = req.params.id;
    const deleteComment = await commentModel.findByIdAndDeltete(id);
    return res.status(200).json(deleteComment);
  },
};
