const { Router } = require("express");
const router = Router();

const {
  createNewVendedor,
  getVendedores,
  getVendedor,
  updateVendedor,
  deleteVendedor,
} = require("../controllers/vendedores.controller");

const { isAuthenticated } = require("../helpers/auth");

// Vendedor Nuevo
router.post("/api/vendedores/new-vendedor", /*isAuthenticated,*/ createNewVendedor);

// Obtener todos los vendedores
router.get("/api/vendedores", /*isAuthenticated,*/ getVendedores);

// Obtener un vendedor por id
router.get("/api/vendedores/:id", /*isAuthenticated,*/ getVendedor);

// Editar los vendedores
router.put("/api/vendedores/edit/:id", /*isAuthenticated,*/ updateVendedor);

// Borrar vendedores
router.delete("/api/vendedores/delete/:id", /*isAuthenticated,*/ deleteVendedor);

module.exports = router;
