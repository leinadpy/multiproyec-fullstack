const MOD = require("../../models/MOD");
const modAlpha = {};

modAlpha.dosHojasCorredizasMod = async (newAbAlpha, pesoPerfiles) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = await MOD.obtenerCosto(48);
  const modFab = await MOD.obtenerCosto(49);
  const mod =
    Math.round(
      (((modCol * newAbAlpha.ancho * newAbAlpha.alto) / 1000000 +
        modFab * pesoPerfiles) /
        7000) *
        100
    ) / 100;
  return mod;
};

modAlpha.dosHojasUnaCorredizaUnaFijaMod = async (newAbAlpha, pesoPerfiles) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = await MOD.obtenerCosto(48);
  const modFab = await MOD.obtenerCosto(49);
  const mod =
    Math.round(
      (((modCol * newAbAlpha.ancho * newAbAlpha.alto) / 1000000 +
        modFab * pesoPerfiles) /
        7000) *
        100
    ) / 100;
  return mod;
};

modAlpha.tresHojasCorredizasMod = async (newAbAlpha, pesoPerfiles) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 5000;
  const modFab = await MOD.obtenerCosto(49);
  const mod =
    Math.round(
      (((modCol * newAbAlpha.ancho * newAbAlpha.alto) / 1000000 +
        modFab * pesoPerfiles) /
        7000) *
        100
    ) / 100;
  return mod;
};

modAlpha.tresHojasDosCorredizasUnaFijaMod = async (
  newAbAlpha,
  pesoPerfiles
) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 5000;
  const modFab = await MOD.obtenerCosto(49);
  const mod =
    Math.round(
      (((modCol * newAbAlpha.ancho * newAbAlpha.alto) / 1000000 +
        modFab * pesoPerfiles) /
        7000) *
        100
    ) / 100;
  return mod;
};

modAlpha.cuatroHojasDosCorredizasDosFijasMod = async (
  newAbAlpha,
  pesoPerfiles
) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = await MOD.obtenerCosto(48);
  const modFab = await MOD.obtenerCosto(49);
  const mod =
    Math.round(
      (((modCol * newAbAlpha.ancho * newAbAlpha.alto) / 1000000 +
        modFab * pesoPerfiles) /
        7000) *
        100
    ) / 100;
  return mod;
};

modAlpha.cuatroHojasCorredizasMod = async (newAbAlpha, pesoPerfiles) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 5000 * 2;
  const modFab = await MOD.obtenerCosto(49);
  const mod =
    Math.round(
      (((modCol * newAbAlpha.ancho * newAbAlpha.alto) / 1000000 +
        modFab * pesoPerfiles) /
        7000) *
        100
    ) / 100;
  return mod;
};

modAlpha.cuatroHojasTresCorredizasUnaFijaMod = async (
  newAbAlpha,
  pesoPerfiles
) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 5000 * 2;
  const modFab = await MOD.obtenerCosto(49);
  const mod =
    Math.round(
      (((modCol * newAbAlpha.ancho * newAbAlpha.alto) / 1000000 +
        modFab * pesoPerfiles) /
        7000) *
        100
    ) / 100;
  return mod;
};

modAlpha.cincoHojasCorredizasMod = async (newAbAlpha, pesoPerfiles) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 5000 * 3;
  const modFab = await MOD.obtenerCosto(49);
  const mod =
    Math.round(
      (((modCol * newAbAlpha.ancho * newAbAlpha.alto) / 1000000 +
        modFab * pesoPerfiles) /
        7000) *
        100
    ) / 100;
  return mod;
};

modAlpha.cincoHojasCuatroCorredizasUnaFijaMod = async (
  newAbAlpha,
  pesoPerfiles
) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 5000 * 3;
  const modFab = await MOD.obtenerCosto(49);
  const mod =
    Math.round(
      (((modCol * newAbAlpha.ancho * newAbAlpha.alto) / 1000000 +
        modFab * pesoPerfiles) /
        7000) *
        100
    ) / 100;
  return mod;
};

modAlpha.seisHojasCorredizasMod = async (newAbAlpha, pesoPerfiles) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 5000 * 4;
  const modFab = await MOD.obtenerCosto(49);
  const mod =
    Math.round(
      (((modCol * newAbAlpha.ancho * newAbAlpha.alto) / 1000000 +
        modFab * pesoPerfiles) /
        7000) *
        100
    ) / 100;
  return mod;
};

modAlpha.seisHojasCincoCorredizasUnaFijaMod = async (
  newAbAlpha,
  pesoPerfiles
) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 5000 * 4;
  const modFab = await MOD.obtenerCosto(49);
  const mod =
    Math.round(
      (((modCol * newAbAlpha.ancho * newAbAlpha.alto) / 1000000 +
        modFab * pesoPerfiles) /
        7000) *
        100
    ) / 100;
  return mod;
};

modAlpha.seisHojasCuatroCorredizasDosFijasMod = async (
  newAbAlpha,
  pesoPerfiles
) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 5000;
  const modFab = await MOD.obtenerCosto(49);
  const mod =
    Math.round(
      (((modCol * newAbAlpha.ancho * newAbAlpha.alto) / 1000000 +
        modFab * pesoPerfiles) /
        7000) *
        100
    ) / 100;
  return mod;
};

modAlpha.dosHojasCorredizasFijoInferiorMod = async (
  newAbAlpha,
  pesoPerfiles
) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = await MOD.obtenerCosto(48);
  const modFab = await MOD.obtenerCosto(49);
  const mod =
    Math.round(
      (((modCol * newAbAlpha.ancho * newAbAlpha.alto) / 1000000 +
        modFab * pesoPerfiles) /
        7000) *
        100
    ) / 100;
  return mod;
};

modAlpha.dosHojasUnaCorredizaUnaFijaFijoInferiorMod = async (
  newAbAlpha,
  pesoPerfiles
) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = await MOD.obtenerCosto(48);
  const modFab = await MOD.obtenerCosto(49);
  const mod =
    Math.round(
      (((modCol * newAbAlpha.ancho * newAbAlpha.alto) / 1000000 +
        modFab * pesoPerfiles) /
        7000) *
        100
    ) / 100;
  return mod;
};

modAlpha.cuatroHojasDosCorredizasDosFijasFijoInferiorMod = async (
  newAbAlpha,
  pesoPerfiles
) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = await MOD.obtenerCosto(48);
  const modFab = await MOD.obtenerCosto(49);
  const mod =
    Math.round(
      (((modCol * newAbAlpha.ancho * newAbAlpha.alto) / 1000000 +
        modFab * pesoPerfiles) /
        7000) *
        100
    ) / 100;
  return mod;
};

modAlpha.dosHojasCorredizasConTelaMod = async (newAbAlpha, pesoPerfiles) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 5000;
  const modFab = await MOD.obtenerCosto(49);
  const mod =
    Math.round(
      (((modCol * newAbAlpha.ancho * newAbAlpha.alto) / 1000000 +
        modFab * pesoPerfiles) /
        7000) *
        100
    ) / 100;
  return mod;
};

modAlpha.dosHojasUnaCorredizaUnaFijaConTelaMod = async (
  newAbAlpha,
  pesoPerfiles
) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 5000;
  const modFab = await MOD.obtenerCosto(49);
  const mod =
    Math.round(
      (((modCol * newAbAlpha.ancho * newAbAlpha.alto) / 1000000 +
        modFab * pesoPerfiles) /
        7000) *
        100
    ) / 100;
  return mod;
};

modAlpha.cuatroHojasDosCorredizasDosFijasConTelaMod = async (
  newAbAlpha,
  pesoPerfiles
) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 5000;
  const modFab = await MOD.obtenerCosto(49);
  const mod =
    Math.round(
      (((modCol * newAbAlpha.ancho * newAbAlpha.alto) / 1000000 +
        modFab * pesoPerfiles) /
        7000) *
        100
    ) / 100;
  return mod;
};

modAlpha.unaHojaOscilobatienteMod = async (newAbAlpha, pesoPerfiles) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 10000;
  const modFab = await MOD.obtenerCosto(49);
  const mod = Math.round(((modCol + modFab * pesoPerfiles) / 7000) * 100) / 100;
  return mod;
};

modAlpha.unaHojaOscilobatienteFijoInferiorMod = async (
  newAbAlpha,
  pesoPerfiles
) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 50000;
  const modFab = await MOD.obtenerCosto(49);
  const mod = Math.round(((modCol + modFab * pesoPerfiles) / 7000) * 100) / 100;
  return mod;
};

modAlpha.unaHojaBatienteMod = async (newAbAlpha, pesoPerfiles) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 10000;
  const modFab = await MOD.obtenerCosto(49);
  const mod = Math.round(((modCol + modFab * pesoPerfiles) / 7000) * 100) / 100;
  return mod;
};

modAlpha.unaHojaBatienteFijoInferiorMod = async (newAbAlpha, pesoPerfiles) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 50000;
  const modFab = await MOD.obtenerCosto(49);
  const mod = Math.round(((modCol + modFab * pesoPerfiles) / 7000) * 100) / 100;
  return mod;
};

modAlpha.dosHojasBatientesMod = async (newAbAlpha, pesoPerfiles) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 50000;
  const modFab = await MOD.obtenerCosto(49);
  const mod = Math.round(((modCol + modFab * pesoPerfiles) / 7000) * 100) / 100;
  return mod;
};

modAlpha.dosHojasBatientesFijoInferiorMod = async (
  newAbAlpha,
  pesoPerfiles
) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 90000;
  const modFab = await MOD.obtenerCosto(49);
  const mod = Math.round(((modCol + modFab * pesoPerfiles) / 7000) * 100) / 100;
  return mod;
};

modAlpha.dosHojasOscilobatientesMod = async (newAbAlpha, pesoPerfiles) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 50000;
  const modFab = await MOD.obtenerCosto(49);
  const mod = Math.round(((modCol + modFab * pesoPerfiles) / 7000) * 100) / 100;
  return mod;
};

modAlpha.dosHojasOscilobatientesFijoInferiorMod = async (
  newAbAlpha,
  pesoPerfiles
) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 90000;
  const modFab = await MOD.obtenerCosto(49);
  const mod = Math.round(((modCol + modFab * pesoPerfiles) / 7000) * 100) / 100;
  return mod;
};

modAlpha.unaPuertaHojaBatienteMod = async (newAbAlpha, pesoPerfiles) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 30000;
  const modFab = await MOD.obtenerCosto(49);
  const mod = Math.round(((modCol + modFab * pesoPerfiles) / 7000) * 100) / 100;
  return mod;
};

modAlpha.unaPuertaDosHojasBatientesMod = async (newAbAlpha, pesoPerfiles) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 90000;
  const modFab = await MOD.obtenerCosto(49);
  const mod = Math.round(((modCol + modFab * pesoPerfiles) / 7000) * 100) / 100;
  return mod;
};

modAlpha.unaHojaProyectanteMod = async (newAbAlpha, pesoPerfiles) => {
  // Mano de obra montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 10000;
  const modFab = await MOD.obtenerCosto(49);
  const mod = Math.round(((modCol + modFab * pesoPerfiles) / 7000) * 100) / 100;
  return mod;
};

modAlpha.unaHojaProyectanteFijoInferiorMod = async (
  newAbAlpha,
  pesoPerfiles
) => {
  // Mano de obra montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 50000;
  const modFab = await MOD.obtenerCosto(49);
  const mod = Math.round(((modCol + modFab * pesoPerfiles) / 7000) * 100) / 100;
  return mod;
};

modAlpha.unaHojaAbatibleMod = async (newAbAlpha, pesoPerfiles) => {
  // Mano de obra montaje 48 y fabricación 49
  const modCol = (await MOD.obtenerCosto(48)) + 10000;
  const modFab = await MOD.obtenerCosto(49);
  const mod = Math.round(((modCol + modFab * pesoPerfiles) / 7000) * 100) / 100;
  return mod;
};

modAlpha.unaHojaFijaMod = async (newAbAlpha, pesoPerfiles) => {
  // Mano de obra montaje 48 y fabricación 49
  let modCol = await MOD.obtenerCosto(48);
  const area = (newAbAlpha.ancho * newAbAlpha.alto) / 1000000;
  area < 1 ? (modCol = modCol) : (modCol = modCol * area);
  const modFab = await MOD.obtenerCosto(49);
  const mod = Math.round(((modCol + modFab * pesoPerfiles) / 7000) * 100) / 100;
  return mod;
};

module.exports = modAlpha;
