const { Router } = require("express");
const router = Router();

const {
  createNewAccesorio,
  getAccesorios,
  getAccesorio,
  updateAccesorio,
  deleteAccesorio,
} = require("../controllers/accesorios.controller");

const { isAuthenticated } = require("../helpers/auth");

// Accesorio Nuevo
router.post("/api/accesorios/new-accesorio", /*isAuthenticated,*/ createNewAccesorio);

// Obtener todos los accesorios
router.get("/api/accesorios", /*isAuthenticated,*/ getAccesorios);

// Obtener un accesorio por id
router.get("/api/accesorios/:id", /*isAuthenticated,*/ getAccesorio);

// Editar los accesorios
router.put("/api/accesorios/edit/:id", /*isAuthenticated,*/ updateAccesorio);

// Borrar accesorios
router.delete("/api/accesorios/delete/:id", /*isAuthenticated,*/ deleteAccesorio);

module.exports = router;
