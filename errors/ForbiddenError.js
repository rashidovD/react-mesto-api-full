class ForbiddenError extends Error {
  constructor(message, ...other) {
    super(...other);
    this.status = 403;
    this.message = message;
  }
}

module.exports = ForbiddenError;
