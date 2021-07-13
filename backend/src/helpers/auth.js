const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.json({ message: "No autorizado, por favor inicia sesión" });
};

module.exports = helpers;
