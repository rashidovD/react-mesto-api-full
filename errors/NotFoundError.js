class NotFoundError extends Error {
  constructor(message, ...other) {
    super(...other);
    this.status = 404;
    this.message = message;
  }
}

module.exports = NotFoundError;
