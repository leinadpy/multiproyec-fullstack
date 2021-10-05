const usersCtrl = {};

const passport = require("passport");

const User = require("../models/User");

usersCtrl.signup = async (req, res) => {
  const errors = [];
  const { name, email, password, confirm_password } = req.body;
  if (password !== confirm_password) {
    errors.push({ text: "Las contraseñas no coinciden" });
  }
  if (password.length < 4) {
    errors.push({ text: "La contraseña debe tener por lo menos 4 caracteres" });
  }
  if (errors.length > 0) {
    res.json({
      errors,
      name,
      email,
      password,
      confirm_password,
    });
  } else {
    const emailUser = await User.findOne({ email });
    if (emailUser) {
      res.json({message: "El email ya está en uso"});
    } else {
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      res.json({message: "Registro exitoso"});
    }
  }
};

usersCtrl.signin = passport.authenticate("local", {
  failureRedirect: "/api/users/login",
  successRedirect: "/api/users/loginsuccess"
});

usersCtrl.logout = (req, res) => {
  req.logout();
  res.json({message: "Has cerrado tu sesión."});
};

usersCtrl.loginFail = (req, res) => {
  res.json({message: "Login fails"})
}

usersCtrl.loginSuccess = (req, res) => {
  res.json({message: "Login success"})
}

module.exports = usersCtrl;
