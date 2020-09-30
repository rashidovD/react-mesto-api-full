class UnauthError extends Error {
  constructor(message, ...other) {
    super(...other);
    this.status = 401;
    this.message = message;
  }
}

module.exports = UnauthError;
