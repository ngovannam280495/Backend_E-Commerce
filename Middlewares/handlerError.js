// Middleware xử lý lỗi
function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: 'Something went wrong!',
    error: err.message,
    stack: err.stack,
  });
}

export { errorHandler };
