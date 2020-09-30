class ConflictError extends Error {
  constructor(message, ...other) {
    super(...other);
    this.status = 409;
    this.message = message;
  }
}

module.exports = ConflictError;
