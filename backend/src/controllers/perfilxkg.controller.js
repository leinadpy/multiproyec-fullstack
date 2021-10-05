const perfilxkgCtrl = {};

const Perfilxkg = require("../models/Perfilxkg");

perfilxkgCtrl.createNewPerfil = async (req, res) => {
  const { linea, color, proveedor, precioxkg, fechaVigente } = req.body;
  const newPerfil = new Perfilxkg({
    linea,
    color,
    proveedor,
    precioxkg,
    fechaVigente,
  });
  await newPerfil.save();
  res.json({ mensaje: "Perfil por kg agregado correctamente" });
};

perfilxkgCtrl.getPerfiles = async (req, res) => {
  const perfiles = await Perfilxkg.find()
    .sort({ proveedor: "desc", linea: "desc" })
    .lean();
  res.json({ perfiles });
};

perfilxkgCtrl.getPerfil = async (req, res) => {
  const perfil = await Perfilxkg.findById(req.params.id)
    .sort({ proveedor: "desc", linea: "desc" })
    .lean();
  res.json({ perfil });
};

perfilxkgCtrl.updatePerfil = async (req, res) => {
  const { linea, color, proveedor, precioxkg, fechaVigente } = req.body;
  await Perfilxkg.findByIdAndUpdate(req.params.id, {
    linea,
    color,
    proveedor,
    precioxkg,
    fechaVigente,
  });
  res.json({ mensaje: "Perfil por kg actualizado correctamente" });
};

perfilxkgCtrl.deletePerfil = async (req, res) => {
  await Perfilxkg.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Perfil por kg eliminado correctamente" });
};

module.exports = perfilxkgCtrl;
