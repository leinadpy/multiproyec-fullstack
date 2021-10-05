const modCtrl = {};

const MOD = require("../models/MOD");

modCtrl.createNewMod = async (req, res) => {
  const { codigo, descripcion, unidad, precio, fechaVigente } = req.body;
  const modCtrl = new MOD({
    codigo,
    descripcion,
    unidad,
    precio,
    fechaVigente,
  });
  await modCtrl.save();
  res.json({mensaje: "Mano de obra agregada correctamente"});
};

modCtrl.getMods = async (req, res) => {
  const mods = await MOD.find().sort({ espesor: "desc" }).lean();
  res.json({ mods });
};

modCtrl.getMod = async (req, res) => {
  const mod = await MOD.findById(req.params.id).sort({ espesor: "desc" }).lean();
  res.json({ mod });
};

modCtrl.updateMod = async (req, res) => {
  const { codigo, descripcion, unidad, precio, fechaVigente } = req.body;
  await MOD.findByIdAndUpdate(req.params.id, {
    codigo,
    descripcion,
    unidad,
    precio,
    fechaVigente,
  });
  res.json({mensaje: "Mano de obra actualizada correctamente"});
};

modCtrl.deleteMod = async (req, res) => {
  await MOD.findByIdAndDelete(req.params.id);
  res.json({mensaje: "Mano de obra eliminada correctamente"});
};

module.exports = modCtrl;
