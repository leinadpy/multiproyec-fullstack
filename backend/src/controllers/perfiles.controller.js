const perfilesCtrl = {};

const Perfil = require("../models/Perfil");

perfilesCtrl.createNewPerfil = async (req, res) => {
  const {
    codigo,
    descripcion,
    pesoPorMetro,
    linea,
    longitudBarra,
    color,
    proveedor,
    precioPorBarra,
    fechaVigente,
  } = req.body;
  const newPerfil = new Perfil({
    codigo,
    descripcion,
    pesoPorMetro,
    linea,
    longitudBarra,
    color,
    proveedor,
    precioPorBarra,
    fechaVigente,
  });
  await newPerfil.save();
  res.json({ mensaje: "Perfil agregado correctamente" });
};

perfilesCtrl.getPerfiles = async (req, res) => {
  const perfiles = await Perfil.find()
    .sort({ codigo: "desc", linea: "desc" })
    .lean();
  res.json({ perfiles });
};

perfilesCtrl.getPerfil = async (req, res) => {
  const perfil = await Perfil.findById(req.params.id)
    .sort({ codigo: "desc", linea: "desc" })
    .lean();
  res.json({ perfil });
};

perfilesCtrl.updatePerfil = async (req, res) => {
  const {
    codigo,
    descripcion,
    pesoPorMetro,
    linea,
    longitudBarra,
    color,
    proveedor,
    precioPorBarra,
    fechaVigente,
  } = req.body;
  await Perfil.findByIdAndUpdate(req.params.id, {
    codigo,
    descripcion,
    pesoPorMetro,
    linea,
    longitudBarra,
    color,
    proveedor,
    precioPorBarra,
    fechaVigente,
  });
  res.json({ mensaje: "Perfil actualizado correctamente" });
};

perfilesCtrl.deletePerfil = async (req, res) => {
  await Perfil.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Perfil eliminado correctamente" });
};

module.exports = perfilesCtrl;
