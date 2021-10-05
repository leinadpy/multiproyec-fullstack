import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import useGetPerfiles from "../../hooks/perfiles/useGetPerfiles";

const ListaDePerfiles = () => {
  const [pageSize, setPageSize] = useState(10);
  const [perfiles, setPerfiles] = useState([]);

  const [perfilesData] = useGetPerfiles();

  useEffect(() => {
    let data = [];
    const unsuscribe = () => {
      data = perfilesData.map((perfil) => {
        return {
          id: perfil._id,
          codigo: perfil.codigo,
          descripcion: perfil.descripcion,
          linea: perfil.linea,
          color: perfil.color,
          pesoPorMetro: perfil.pesoPorMetro,
          precioPorBarra: perfil.precioPorBarra,
          proveedor: perfil.proveedor,
          fechaVigente: perfil.fechaVigente,
        };
      });
    };
    unsuscribe();
    setPerfiles(data);
    return unsuscribe;
  }, [perfilesData]);

  const rows = perfiles;

  const columns = [
    { field: "codigo", headerName: "Código", width: 150 },
    { field: "descripcion", headerName: "Descripción", width: 250 },
    { field: "linea", headerName: "Línea", width: 150 },
    { field: "color", headerName: "Color", width: 150 },
    { field: "pesoPorMetro", headerName: "Peso", width: 150 },
    { field: "precioPorBarra", headerName: "Precio", width: 130 },
    { field: "proveedor", headerName: "Proveedor", width: 150 },
    { field: "fechaVigente", headerName: "Fecha Vigente", width: 170 },
  ];

  return (
    <Layout>
      <Box
        sx={{ my: 4 }}
        style={{ height: `${pageSize === 5 ? "400" : "650"}px`, width: "100%" }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10]}
          pagination
        />
      </Box>
    </Layout>
  );
};

export default ListaDePerfiles;
