const commentModel = require("../models/commentModel");

module.exports = {
  createComment: async (req, res) => {
    const body = req.body;
    const newComment = await commenttModel.create(body);
    return res.status(201).json(newComment);
  },
  getComment: async (req, res) => {
    const category_id = req.query.category_id;
    const body_query = {};
    if (category_id) {
      body_query.category_id = category_id;
    }
    const commentts = await commenttModel
      .find(body_query)
      .populate("category_id");
  },
  updateComment: async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const updateComment = await commenttModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    return res.status(200).json(updateComment);
  },
  deleteComment: async (req, res) => {
    const id = req.params.id;
    const deleteComment = await commenttModel.findByIdAndDeltete(id);
    return res.status(200).json(deleteComment);
  },
};
