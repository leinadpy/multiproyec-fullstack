const abTempladoCtrl = {};

const AbTemplado = require("../models/AbTemplado");

abTempladoCtrl.calcAbTempladoForm = async (req, res) => {
  const {
    selAbertura,
    cantidad,
    ancho,
    alto,
    altofijoinf,
    altofijosup,
    ancho2,
    anchofijolat1,
    anchofijolat2,
    tipoEspejo,
    tipoCierre,
    tipoBrazo,
    selColorAluminio,
    proveedoraluminio,
    tipoManijon,
    colorvidrio,
    proveedorvidrio,
    espesorvidrio,
    coloraccesorio,
    proveedoraccesorio,
    cierreopc,
    costo,
    parametro,
    pesoHoja,
    embutido,
    arenado,
    plastificado,
    proveedorarenado,
    biselado,
  } = req.body;
  const newAbTemplado = new AbTemplado({
    selAbertura,
    cantidad,
    ancho,
    alto,
    altofijoinf,
    altofijosup,
    ancho2,
    anchofijolat1,
    anchofijolat2,
    tipoEspejo,
    tipoCierre,
    tipoBrazo,
    selColorAluminio,
    proveedoraluminio,
    tipoManijon,
    colorvidrio,
    proveedorvidrio,
    espesorvidrio,
    coloraccesorio,
    proveedoraccesorio,
    cierreopc,
    costo,
    parametro,
    pesoHoja,
    embutido,
    arenado,
    plastificado,
    proveedorarenado,
    biselado,
  });
  newAbTemplado.costo = await newAbTemplado.calcularTemplado(newAbTemplado);
  // await newAbTemplado.save();
  // await AbTemplado.findByIdAndDelete(newAbTemplado._id);
  res.json({ newAbTemplado });
};

module.exports = abTempladoCtrl;
