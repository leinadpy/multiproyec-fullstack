const { Router } = require("express");
const router = Router();

const {
  createNewPresupuesto,
  getPresupuestos,
  getPresupuesto,
  updatePresupuesto,
  deletePresupuesto,
} = require("../controllers/presupuestos.controller");

const { isAuthenticated } = require("../helpers/auth");

// Presupuesto Nuevo
router.post("/api/presupuestos/new-presupuesto", /*isAuthenticated,*/ createNewPresupuesto);

// Obtener todos los presupuestos
router.get("/api/presupuestos", /*isAuthenticated,*/ getPresupuestos);

// Obtener un presupuesto por id
router.get("/api/presupuestos/:id", /*isAuthenticated,*/ getPresupuesto);

// Editar los presupuestos
router.put("/api/presupuestos/edit/:id", /*isAuthenticated,*/ updatePresupuesto);

// Borrar presupuestos
router.delete("/api/presupuestos/delete/:id", /*isAuthenticated,*/ deletePresupuesto);

module.exports = router;
