const notFoundHandler = (req, res, next) => {
    res.status(404).json({
        error: 'Not Found',
        message: `The requested resource at ${req.method} ${req.originalUrl} was not found.`
    });
};

module.exports = notFoundHandler;