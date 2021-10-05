const abServicioCtrl = {};

const AbServicio = require("../models/AbServicio");

abServicioCtrl.calcAbServicioForm = async (req, res) => {
  const { codServicio, cantidad, ancho, alto, proveedor, costo } = req.body;
  const newAbServicio = new AbServicio({
    codServicio,
    cantidad,
    ancho,
    alto,
    proveedor,
    costo,
  });
  newAbServicio.costo = await newAbServicio.calcularServicio(newAbServicio);
  // await newAbTemplado.save();
  // await AbTemplado.findByIdAndDelete(newAbTemplado._id);
  res.json({ newAbServicio });
};

module.exports = abServicioCtrl;
