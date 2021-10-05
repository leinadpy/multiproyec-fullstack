const { Router } = require("express");
const router = Router();

const {
  createNewCliente,
  getClientes,
  getCliente,
  updateCliente,
  deleteCliente,
} = require("../controllers/clientes.controller");

const { isAuthenticated } = require("../helpers/auth");

// Cliente Nuevo
router.post("/api/clientes/new-cliente", /*isAuthenticated,*/ createNewCliente);

// Obtener todos los clientes
router.get("/api/clientes", /*isAuthenticated,*/ getClientes);

// Obtener un cliente por id
router.get("/api/clientes/:id", /*isAuthenticated,*/ getCliente);

// Editar los clientes
router.put("/api/clientes/edit/:id", /*isAuthenticated,*/ updateCliente);

// Borrar clientes
router.delete("/api/clientes/delete/:id", /*isAuthenticated,*/ deleteCliente);

module.exports = router;
