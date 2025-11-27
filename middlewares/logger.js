// middlewares/logger.js
module.exports = function logger(req, res, next) {
  const now = new Date().toISOString(); // ISO timestamp
  console.log(`[${now}] ${req.method} ${req.originalUrl}`);
  next();
};
