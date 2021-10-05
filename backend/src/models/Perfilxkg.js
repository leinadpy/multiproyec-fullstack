const { Schema, model } = require("mongoose");

const PerfilxkgSchema = new Schema({
  proveedor: {
    type: String,
    required: true,
  },
  linea: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  precioxkg: {
    type: Number,
    required: true,
  },
  fechaVigente: {
    type: String,
  },
});

PerfilxkgSchema.statics.obtenerCosto = async function (
  linea,
  color,
  proveedor
) {
  const costo = await this.find(
    { linea, color, proveedor },
    { precioxkg: 1, _id: 0 }
  ).lean();
  return costo[0].precioxkg;
};

module.exports = model("Perfilxkg", PerfilxkgSchema);
