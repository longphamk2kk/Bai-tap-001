const commentModel = require("../models/commentModel");

module.exports = {
  createComment: async (req, res) => {
    const token = req.header("Authorization").replace("Bearer ", "");
    try {
      const decoded = jwt.verify(token, "secretKey");

      const body = req.body;
      body.accountId = decoded.id;
      const newComment = await commentModel.create(body);

      return res.status(201).json(newComment);
    } catch (error) {
      return res.status(401).json({ message: "Token không hợp lệ" });
    }
  },
  getComment: async (req, res) => {
    const category_id = req.query.category_id;
    const body_query = {};
    if (category_id) {
      body_query.category_id = category_id;
    }
    const comments = await commentModel
      .find(body_query)
      .populate("category_id");
    return res.status(200).json(comments);
  },
  updateComment: async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const updateComment = await commentModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    return res.status(200).json(updateComment);
  },
  deleteComment: async (req, res) => {
    const id = req.params.id;
    const deleteComment = await commentModel.findByIdAndDelete(id);
    return res.status(200).json(deleteComment);
  },
};
