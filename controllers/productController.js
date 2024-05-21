const productModel = require("../models/productModel");

module.exports = {
  createProduct: async (req, res) => {
    const body = req.body;
    const newProduct = await productModel.create(body);
    return res.status(201).json(newProduct);
  },
  getProduct: async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const category_id = req.query.category_id;
    const body_query = {};

    if (category_id) {
      body_query.category_id = category_id;
    }

    const perPage = 10;
    const skip = (page - 1) * perPage;
    try {
      const products = await productModel
        .find(body_query)
        .populate("category_id")
        .skip(skip)
        .limit(perPage);

      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ message: "Lỗi khi lấy sản phẩm", error });
    }
  },

  updateProduct: async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const updateProduct = await productModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    return res.status(200).json(updateProduct);
  },
  deleteProduct: async (req, res) => {
    const id = req.params.id;
    const deleteProduct = await productModel.findByIdAndDeltete(id);
    return res.status(200).json(deleteProduct);
  },
};
