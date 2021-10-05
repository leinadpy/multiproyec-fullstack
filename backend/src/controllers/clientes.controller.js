const clientesCtrl = {};

const Cliente = require("../models/Cliente");

clientesCtrl.createNewCliente = async (req, res) => {
  const { denominacion, nombre, direccion, telefono, email, atencion } = req.body;
  const newCliente = new Cliente({ denominacion, nombre, direccion, telefono, email, atencion });
  await newCliente.save();
  res.json({mensaje: "Cliente agregado correctamente"});
};

clientesCtrl.getClientes = async (req, res) => {
  const clientes = await Cliente.find()
    .sort({ nombre: 1 })
    .lean();
  res.json({ clientes });
};

clientesCtrl.getCliente = async (req, res) => {
  const cliente = await Cliente.findById(req.params.id)
    .sort({ nombre: 1 })
    .lean();
  res.json({ cliente });
};

clientesCtrl.updateCliente = async (req, res) => {
  const { denominacion, nombre, direccion, telefono, email, atencion } = req.body;
  await Cliente.findByIdAndUpdate(req.params.id, { denominacion, nombre, direccion, telefono, email, atencion });
  res.json({mensaje: "Cliente actualizado correctamente"});
};

clientesCtrl.deleteCliente = async (req, res) => {
  await Cliente.findByIdAndDelete(req.params.id);
  res.json({mensaje: "Cliente eliminado correctamente"});
};

module.exports = clientesCtrl;