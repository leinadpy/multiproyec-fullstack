const accesoriosCtrl = {};

const Accesorio = require("../models/Accesorio");

accesoriosCtrl.createNewAccesorio = async (req, res) => {
  const { codigo, descripcion, linea, color, proveedor, precio, fechaVigente } = req.body;
  const newAccesorio = new Accesorio({ codigo, descripcion, linea, color, proveedor, precio, fechaVigente });
  await newAccesorio.save();
  res.json({mensaje: "Accesorio agregado correctamente"});
};

accesoriosCtrl.getAccesorios = async (req, res) => {
  const accesorios = await Accesorio.find()
    .sort({ linea: "desc" })
    .lean();
  res.json({ accesorios });
};

accesoriosCtrl.getAccesorio = async (req, res) => {
  const accesorio = await Accesorio.findById(req.params.id)
    .sort({ linea: "desc" })
    .lean();
  res.json({ accesorio });
};

accesoriosCtrl.updateAccesorio = async (req, res) => {
  const { codigo, descripcion, linea, color, proveedor, precio, fechaVigente } = req.body;
  await Accesorio.findByIdAndUpdate(req.params.id, { codigo, descripcion, linea, color, proveedor, precio, fechaVigente });
  res.json({mensaje: "Accesorio actualizado correctamente"});
};

accesoriosCtrl.deleteAccesorio = async (req, res) => {
  await Accesorio.findByIdAndDelete(req.params.id);
  res.json({mensaje: "Accesorio eliminado correctamente"});
};

module.exports = accesoriosCtrl;