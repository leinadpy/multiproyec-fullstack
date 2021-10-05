const presupuestoCtrl = {};

const Presupuesto = require("../models/Presupuesto");

presupuestoCtrl.createNewPresupuesto = async (req, res) => {
  const {
    nropresupuesto,
    fecha,
    referencia,
    cliente,
    atencion,
    titulo,
    aberturas,
    observaciones,
    total,
    totalLetras,
    plazoEntrega,
    vendedor,
    formaPago,
    oferta,
    tasaCambio,
    factor,
    comisionCliente,
  } = req.body;
  const newPresupuesto = new Presupuesto({
    nropresupuesto,
    fecha,
    referencia,
    cliente,
    atencion,
    titulo,
    aberturas,
    observaciones,
    total,
    totalLetras,
    plazoEntrega,
    vendedor,
    formaPago,
    oferta,
    tasaCambio,
    factor,
    comisionCliente,
  });
  await newPresupuesto.save();
  res.json({ mensaje: "Presupuesto agregado correctamente" });
};

presupuestoCtrl.getPresupuestos = async (req, res) => {
  const presupuestos = await Presupuesto.find().lean();
  res.json({ presupuestos });
};

presupuestoCtrl.getPresupuesto = async (req, res) => {
  const presupuesto = await Presupuesto.findById(req.params.id).lean();
  res.json({ presupuesto });
};

presupuestoCtrl.updatePresupuesto = async (req, res) => {
  const {
    nropresupuesto,
    fecha,
    referencia,
    cliente,
    atencion,
    titulo,
    aberturas,
    observaciones,
    total,
    totalLetras,
    plazoEntrega,
    vendedor,
    formaPago,
    oferta,
    tasaCambio,
    factor,
    comisionCliente,
  } = req.body;
  await Presupuesto.findByIdAndUpdate(req.params.id, {
    nropresupuesto,
    fecha,
    referencia,
    cliente,
    atencion,
    titulo,
    aberturas,
    observaciones,
    total,
    totalLetras,
    plazoEntrega,
    vendedor,
    formaPago,
    oferta,
    tasaCambio,
    factor,
    comisionCliente,
  });
  res.json({ mensaje: "Presupuesto actualizado correctamente" });
};

presupuestoCtrl.deletePresupuesto = async (req, res) => {
  await Presupuesto.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Presupuesto eliminado correctamente" });
};

module.exports = presupuestoCtrl;
