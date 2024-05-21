function asyncMiddleware(fn) {
  return async (req, res, next) => {
    try {
      await fn(req, rex, next);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = asyncMiddleware;
