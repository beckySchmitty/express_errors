function logger(req, res, next) {
    console.log(`SENT ${req.method} request to ${req.path}.`);
    return next();
  }

  module.exports = {logger}