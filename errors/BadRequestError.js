class BadRequestError extends Error {
  constructor(message, ...other) {
    super(...other);
    this.status = 400;
    this.message = message;
  }
}

module.exports = BadRequestError;
