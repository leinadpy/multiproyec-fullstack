const { Router } = require("express");
const router = Router();

const {
  createNewPerfil,
  getPerfiles,
  getPerfil,
  updatePerfil,
  deletePerfil,
} = require("../controllers/perfilxkg.controller");

const { isAuthenticated } = require("../helpers/auth");

// Perfil Nuevo
router.post("/api/perfilxkg/new-perfil", /*isAuthenticated,*/ createNewPerfil);

// Obtener todos los perfiles
router.get("/api/perfilxkg", /*isAuthenticated,*/ getPerfiles);

// Obtener un perfil por id
router.get("/api/perfilxkg/:id", /*isAuthenticated,*/ getPerfil);

// Editar perfiles
router.put("/api/perfilxkg/edit/:id", /*isAuthenticated,*/ updatePerfil);

// Borrar perfiles
router.delete("/api/perfilxkg/delete/:id", /*isAuthenticated,*/ deletePerfil);

module.exports = router;
