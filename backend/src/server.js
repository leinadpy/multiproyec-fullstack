const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");

// Initializations
const app = express();
require("./config/passport");

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: "secret2021",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Global variables
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

// Routes
app.use(require("./routes/perfiles.routes"));
app.use(require("./routes/users.routes"));
app.use(require("./routes/accesorios.routes"));
app.use(require("./routes/vidrios.routes"));
app.use(require("./routes/mod.routes"));
app.use(require("./routes/calculadoras.routes"));
app.use(require("./routes/servicios.routes"));
app.use(require("./routes/clientes.routes"));
app.use(require("./routes/vendedores.routes"));
app.use(require("./routes/presupuestos.routes"));

module.exports = app;
