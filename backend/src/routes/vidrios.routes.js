const { Router } = require("express");
const router = Router();

const {
  createNewVidrio,
  getVidrios,
  getVidrio,
  updateVidrio,
  deleteVidrio,
} = require("../controllers/vidrios.controller");

const { isAuthenticated } = require("../helpers/auth");

// Vidrio Nuevo
router.post("/api/vidrios/new-vidrio", /*isAuthenticated,*/ createNewVidrio);

// Obtener todos los vidrios
router.get("/api/vidrios", /*isAuthenticated,*/ getVidrios);

// Obtener un vidrio por id
router.get("/api/vidrios/:id", /*isAuthenticated,*/ getVidrio);

// Editar los vidrios
router.put("/api/vidrios/edit/:id", /*isAuthenticated,*/ updateVidrio);

// Borrar vidrios
router.delete("/api/vidrios/delete/:id", /*isAuthenticated,*/ deleteVidrio);

module.exports = router;
