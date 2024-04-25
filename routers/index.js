const accountRouter = require("./accountRouter");
const categoryRouter = require("./categoryRouter");

module.exports = (app) => {
  app.use("/api/accounts", accountRouter);
  app.use("/api/categories", categoryRouter);
};
