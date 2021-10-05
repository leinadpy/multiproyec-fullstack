import { Box } from "@mui/system";
import React from "react";
import Layout from "../Layout/Layout";
import FormularioPerfil from "./FormularioPerfil";

const PerfilNuevo = () => {
  return (
    <Layout>
      <Box sx={{ my: 4, display: "flex", flexDirection: "column", alignItems: "center"}}>
        <FormularioPerfil />
      </Box>
    </Layout>
  );
};

export default PerfilNuevo;
