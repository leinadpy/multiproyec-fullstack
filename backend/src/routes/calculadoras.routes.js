const { Router } = require("express");
const router = Router();

// SERVICIOS

const {
  calcAbServicioForm
} = require("../controllers/calcServicio.controller");

const { isAuthenticated } = require("../helpers/auth");

// Calcular y devolver el costo
router.post("/api/calcServicio", /*isAuthenticated,*/ calcAbServicioForm);

// LINEA TEMPLADO

const {
  calcAbTempladoForm
} = require("../controllers/calcTemplado.controller");

// Calcular y devolver el costo
router.post("/api/calcTemplado", /*isAuthenticated,*/ calcAbTempladoForm);

// LINEA ALPHA

const {
  calcAbAlphaForm
} = require("../controllers/calcAlpha.controller");

// Calcular y devolver el costo
router.post("/api/calcAlpha", /*isAuthenticated,*/ calcAbAlphaForm);

module.exports = router;
