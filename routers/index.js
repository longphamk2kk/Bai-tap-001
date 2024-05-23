const accountRouter = require("./accountRouter");
const categoryRouter = require("./categoryRouter");
const productRouter = require("./productRouter");

const errorHandle = require("../middlewares/errorHandle");

module.exports = (app) => {
  app.use("/api/accounts", accountRouter);
  app.use("/api/categories", categoryRouter);
  app.use("/api/products", productRouter);
  app.use(errorHandle);
};
