const { Schema, model } = require("mongoose");

const PresupuestoSchema = new Schema(
  {
    nropresupuesto: { type: String, required: true },
    fecha: { type: String, required: true },
    referencia: { type: String, required: true },
    cliente: String,
    atencion: String,
    titulo: String,
    aberturas: [String],
    observaciones: String,
    total: Number,
    totalLetras: String,
    plazoEntrega: String,
    vendedor: String,
    formaPago: String,
    oferta: String,
    factor: Number,
    tasaCambio: Number,
    comisionCliente: { type: Number, default: 1 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Presupuesto", PresupuestoSchema);
