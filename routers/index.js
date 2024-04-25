const accountRouter = require("./accountRouter");
const categoryRouter = require("./categoryRouter");

module.exports = (app) => {
  app.use("/api/accounts", accountRouter);
  app.use("/api/categories", categoryRouter);
  // app.use("/api/auth", au...);

  //chưa có middleware bắt lỗi và xử lý lỗi
};
