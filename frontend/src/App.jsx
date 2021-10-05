import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Layout from "./components/Layout/Layout";

const App = ({children}) => {
  return (
    <Layout>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          APP MULTIPROYEC S.A.
        </Typography>
      </Box>
    </Layout>
  );
};

export default App;
