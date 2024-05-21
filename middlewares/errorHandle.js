module.exports = (err, req, res, next) => {
  const error = { ...err };
  error.statusCode = err.statusCode;
  error.message = err.message;
  if (err.name === "CastError") {
    error.statusCode = 404;
    error.message = "khong tim thay tai nguyen";
  }
  if (err.code === 11000) {
    error.statusCode = 400;
    error.message = "du lieu da ton tai";
  }

  const statusCode = error.statusCode || 500;
  const message = error.message || "loi sever";

  return res.status(statusCode).json({
    statusCode,
    message,
  });
};
