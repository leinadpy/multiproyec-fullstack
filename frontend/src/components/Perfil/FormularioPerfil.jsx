import { Box, MenuItem, TextField } from "@material-ui/core";
import { Select } from "@mui/material";
import React, { useState, useEffect } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import frLocale from "date-fns/locale/fr";

const FormularioPerfil = ({ dato }) => {
  const [perfil, setPerfil] = useState({
    codigo: "",
    descripcion: "",
    linea: "Linea Alpha",
    color: "Bronce 1003",
    pesoPorMetro: "",
    precioPorBarra: "",
    proveedor: "Alumerco S.R.L.",
    fechaVigente: new Date(),
  });
  const [fecha, setFecha] = useState(new Date());

  const handleChange = (e) => {
    console.log(e);
    setPerfil({
      ...perfil,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          name="codigo"
          value={perfil.codigo}
          onChange={handleChange}
          id="outlined-required"
          label="Código"
          variant="outlined"
          style={{ marginBottom: "10px" }}
        />
        <TextField
          required
          name="descripcion"
          value={perfil.descripcion}
          onChange={handleChange}
          id="outlined-required"
          label="Descripción"
          variant="outlined"
          style={{ marginBottom: "10px" }}
        />
        <Select
          labelId="linea"
          id="linea"
          value={perfil.linea}
          label="Línea *"
          name="linea"
          onChange={handleChange}
          style={{ marginBottom: "10px" }}
        >
          {lineas.map((linea) => (
            <MenuItem key={linea.id} value={linea.id}>
              {linea.text}
            </MenuItem>
          ))}
        </Select>
        <Select
          labelId="color"
          id="color"
          value={perfil.color}
          label="Color *"
          name="color"
          onChange={handleChange}
          style={{ marginBottom: "10px" }}
        >
          {colores.map((color) => (
            <MenuItem key={color.id} value={color.id}>
              {color.text}
            </MenuItem>
          ))}
        </Select>
        <TextField
          required
          name="pesoPorMetro"
          value={perfil.pesoPorMetro}
          onChange={handleChange}
          id="outlined-required"
          label="Peso"
          variant="outlined"
          style={{ marginBottom: "10px" }}
        />
        <TextField
          required
          name="precioPorBarra"
          value={perfil.precioPorBarra}
          onChange={handleChange}
          id="outlined-required"
          label="Precio"
          variant="outlined"
          style={{ marginBottom: "10px" }}
        />
        <Select
          labelId="proveedor"
          id="proveedor"
          value={perfil.proveedor}
          label="Proveedor *"
          name="proveedor"
          onChange={handleChange}
          style={{ marginBottom: "10px" }}
        >
          {proveedores.map((proveedor) => (
            <MenuItem key={proveedor.id} value={proveedor.id}>
              {proveedor.text}
            </MenuItem>
          ))}
        </Select>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale}>
          <DatePicker
            label="Basic example"
            value={fecha}
            onChange={(newValue) => {
              setFecha(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>
    </>
  );
};

const lineas = [
  { text: "Linea Alpha", id: "Linea Alpha" },
  { text: "Linea Inova", id: "Linea Inova" },
  { text: "Linea Gold", id: "Linea Gold" },
  { text: "Linea Suprema", id: "Linea Suprema" },
  { text: "Linea Templado", id: "Linea Templado" },
];

const colores = [
  { text: "Bronce 1003", id: "Bronce 1003" },
  { text: "Bronce 1002", id: "Bronce 1002" },
  { text: "Fosco", id: "Fosco" },
  { text: "Blanco", id: "Blanco" },
  { text: "Efecto Madera", id: "Efecto Madera" },
];

const proveedores = [
  { text: "Vidriocar S.A.", id: "Vidriocar S.A." },
  { text: "Alumerco S.R.L.", id: "Alumerco S.R.L." },
];

export default FormularioPerfil;
