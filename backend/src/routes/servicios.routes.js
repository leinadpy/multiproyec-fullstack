const { Router } = require("express");
const router = Router();

const {
  createNewServicio,
  getServicios,
  getServicio,
  updateServicio,
  deleteServicio,
} = require("../controllers/servicios.controller");

const { isAuthenticated } = require("../helpers/auth");

// Servicio Nuevo
router.post("/api/servicios/new-servicio", /*isAuthenticated,*/ createNewServicio);

// Obtener todos los servicios
router.get("/api/servicios", /*isAuthenticated,*/ getServicios);

// Obtener un servicio por id
router.get("/api/servicios/:id", /*isAuthenticated,*/ getServicio);

// Editar los servicios
router.put("/api/servicios/edit/:id", /*isAuthenticated,*/ updateServicio);

// Borrar servicios
router.delete("/api/servicios/delete/:id", /*isAuthenticated,*/ deleteServicio);

module.exports = router;
