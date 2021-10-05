const abAlphaCtrl = {};

const AbAlpha = require("../models/AbAlpha");

abAlphaCtrl.calcAbAlphaForm = async (req, res) => {
  const {
    selAbertura,
    cantidad,
    ancho,
    alto,
    altofijo,
    selPremarco,
    selContramarco,
    selColorAluminio,
    selColorVidrio,
    proveedorvidrio,
    selEspesorVidrio,
    selColorAccesorio,
    selCierre,
    selRefuerzo,
    parametro,
    solera,
    costo,
  } = req.body;
  const newAbAlpha = new AbAlpha({
    selAbertura,
    cantidad,
    ancho,
    alto,
    altofijo,
    selPremarco,
    selContramarco,
    selColorAluminio,
    selColorVidrio,
    proveedorvidrio,
    selEspesorVidrio,
    selColorAccesorio,
    selCierre,
    selRefuerzo,
    parametro,
    solera,
    costo,
  });
  newAbAlpha.costo = await newAbAlpha.calcularAlpha(newAbAlpha);
  // await newAbAlpha.save();
  // await AbAlpha.findByIdAndDelete(newAbAlpha._id);
  res.json({ newAbAlpha });
};

module.exports = abAlphaCtrl;
