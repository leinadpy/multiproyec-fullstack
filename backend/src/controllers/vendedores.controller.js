const vendedoresCtrl = {};

const Vendedor = require("../models/Vendedor");

vendedoresCtrl.createNewVendedor = async (req, res) => {
  const { nombre, email, iniciales, telefono } = req.body;
  const newVendedor = new Vendedor({ nombre, email, iniciales, telefono });
  await newVendedor.save();
  res.json({ mensaje: "Vendedor agregado correctamente" });
};

vendedoresCtrl.getVendedores = async (req, res) => {
  const vendedores = await Vendedor.find().sort({ nombre: 1 }).lean();
  res.json({ vendedores });
};

vendedoresCtrl.getVendedor = async (req, res) => {
  const vendedor = await Vendedor.findById(req.params.id)
    .sort({ nombre: 1 })
    .lean();
  res.json({ vendedor });
};

vendedoresCtrl.updateVendedor = async (req, res) => {
  const { nombre, email, iniciales, telefono } = req.body;
  await Vendedor.findByIdAndUpdate(req.params.id, {
    nombre,
    email,
    iniciales,
    telefono,
  });
  res.json({ mensaje: "Vendedor actualizado correctamente" });
};

vendedoresCtrl.deleteVendedor = async (req, res) => {
  await Vendedor.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Vendedor eliminado correctamente" });
};

module.exports = vendedoresCtrl;
