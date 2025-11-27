// middlewares/errorHandler.js
module.exports = function errorHandler(err, req, res, next) {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({
    message: err.message || 'Internal Server Error',
    // helpful for debugging — remove in production
    ...(process.env.NODE_ENV !== 'production' ? { stack: err.stack } : {})
  });
};
