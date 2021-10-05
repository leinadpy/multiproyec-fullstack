const { Router } = require("express");
const router = Router();

const {
  signup,
  signin,
  logout,
  loginFail,
  loginSuccess
} = require("../controllers/users.controller");

router.post("/api/users/signup", signup);

router.post("/api/users/signin", signin); //LISTO

router.get("/api/users/logout", logout); //LISTO

router.get("/api/users/login", loginFail); //LISTO

router.get("/api/users/loginsuccess", loginSuccess); //LISTO

module.exports = router;
