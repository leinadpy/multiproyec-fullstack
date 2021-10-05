const { Router } = require("express");
const router = Router();

const {
  createNewMod,
  getMods,
  getMod,
  updateMod,
  deleteMod,
} = require("../controllers/mod.controller");

const { isAuthenticated } = require("../helpers/auth");

// Mano de obra Nuevo
router.post("/api/mod/new-mod", /*isAuthenticated,*/ createNewMod);

// Obtener todos las mano de obras
router.get("/api/mod", /*isAuthenticated,*/ getMods);

// Obtener una mano de obra por id
router.get("/api/mod/:id", /*isAuthenticated,*/ getMod);

// Editar las mano de obras
router.put("/api/mod/edit/:id", /*isAuthenticated,*/ updateMod);

// Borrar mano de obra
router.delete("/api/mod/delete/:id", /*isAuthenticated,*/ deleteMod);

module.exports = router;
