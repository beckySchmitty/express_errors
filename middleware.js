function logger(req, res, next) {
    console.log(`SENT ${req.method} request to ${req.path}.`);
    return next();
}

function checkPassword (req, res, next) {
    try {
        if (req.query.password !== "correctpass") {
            throw new ExxpressError("Invalid password", 403)
        } else {
            return next()
        }
    } catch (e) {
        return next(e)
    }
}

  module.exports = {logger, checkPassword}