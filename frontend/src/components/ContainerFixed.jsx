import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function FixedContainer({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false">
        <Box sx={{ height: "85vh" }}>{children}</Box>
      </Container>
    </React.Fragment>
  );
}
