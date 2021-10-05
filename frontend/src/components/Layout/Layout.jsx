import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import MenuMult from "../MenuMult";
import { Helmet } from "react-helmet";
import FixedContainer from "../ContainerFixed";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="mailto:devinginformatica@gmail.com">
        DevIngInformatica
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Multiproyec S.A.</title>
      </Helmet>
      <MenuMult />

      <FixedContainer>{children}</FixedContainer>
      <Copyright />
    </>
  );
};

export default Layout;
