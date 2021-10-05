const serviciosCtrl = {};

const Servicio = require("../models/Servicio");

serviciosCtrl.createNewServicio = async (req, res) => {
  const { codigo, descripcion, proveedor, precio, fechaVigente } = req.body;
  const newServicio = new Servicio({
    codigo,
    descripcion,
    proveedor,
    precio,
    fechaVigente,
  });
  await newServicio.save();
  res.json({ mensaje: "Servicio agregado correctamente" });
};

serviciosCtrl.getServicios = async (req, res) => {
  const servicios = await Servicio.find().lean();
  res.json({ servicios });
};

serviciosCtrl.getServicio = async (req, res) => {
  const servicio = await Servicio.findById(req.params.id).lean();
  res.json({ servicio });
};

serviciosCtrl.updateServicio = async (req, res) => {
  const { codigo, descripcion, proveedor, precio, fechaVigente } = req.body;
  await Servicio.findByIdAndUpdate(req.params.id, {
    codigo,
    descripcion,
    proveedor,
    precio,
    fechaVigente,
  });
  res.json({ mensaje: "Servicio actualizado correctamente" });
};

serviciosCtrl.deleteServicio = async (req, res) => {
  await Servicio.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Servicio eliminado correctamente" });
};

module.exports = serviciosCtrl;
