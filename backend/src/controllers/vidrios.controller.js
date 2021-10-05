const vidriosCtrl = {};

const Vidrio = require("../models/Vidrio");

vidriosCtrl.createNewVidrio = async (req, res) => {
  const {
    codigo,
    descripcion,
    espesor,
    color,
    proveedor,
    precio,
    fechaVigente,
  } = req.body;
  const newVidrio = new Vidrio({
    codigo,
    descripcion,
    espesor,
    color,
    proveedor,
    precio,
    fechaVigente,
  });
  await newVidrio.save();
  res.json({ mensaje: "Vidrio agregado correctamente" });
};

vidriosCtrl.getVidrios = async (req, res) => {
  const vidrios = await Vidrio.find().sort({ espesor: "desc" }).lean();
  res.json({ vidrios });
};

vidriosCtrl.getVidrio = async (req, res) => {
  const vidrio = await Vidrio.findById(req.params.id)
    .sort({ espesor: "desc" })
    .lean();
  res.json({ vidrio });
};

vidriosCtrl.updateVidrio = async (req, res) => {
  const {
    codigo,
    descripcion,
    espesor,
    color,
    proveedor,
    precio,
    fechaVigente,
  } = req.body;
  await Vidrio.findByIdAndUpdate(req.params.id, {
    codigo,
    descripcion,
    espesor,
    color,
    proveedor,
    precio,
    fechaVigente,
  });
  res.json({ mensaje: "Vidrio actualizado correctamente" });
};

vidriosCtrl.deleteVidrio = async (req, res) => {
  await Vidrio.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Vidrio eliminado correctamente" });
};

module.exports = vidriosCtrl;
