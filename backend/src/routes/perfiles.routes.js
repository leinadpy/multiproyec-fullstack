const { Router } = require("express");
const router = Router();

const {
  createNewPerfil,
  getPerfiles,
  getPerfil,
  updatePerfil,
  deletePerfil,
} = require("../controllers/perfiles.controller");

const { isAuthenticated } = require("../helpers/auth");

// Perfil Nuevo
router.post("/api/perfiles/new-perfil", /*isAuthenticated,*/ createNewPerfil);

// Obtener todos los perfiles
router.get("/api/perfiles", /*isAuthenticated,*/ getPerfiles);

// Obtener un perfil por id
router.get("/api/perfiles/:id", /*isAuthenticated,*/ getPerfil);

// Editar perfiles
router.put("/api/perfiles/edit/:id", /*isAuthenticated,*/ updatePerfil);

// Borrar perfiles
router.delete("/api/perfiles/delete/:id", /*isAuthenticated,*/ deletePerfil);

module.exports = router;
