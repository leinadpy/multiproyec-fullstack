import * as React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import { Helmet } from "react-helmet";
import favicon from "./images/logo.png";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RutaProtegida from "./components/RutaPrivada";
import ListaDePerfiles from "./components/Perfil/ListaDePerfiles";
import "bootstrap/dist/css/bootstrap.min.css";
import PerfilNuevo from "./components/Perfil/PerfilNuevo";

import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const Index = () => {
  return (
    <React.Fragment>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <BrowserRouter>
          <Switch>
            <RutaProtegida path="/perfiles/new-perfil">
              <PerfilNuevo />
            </RutaProtegida>
            <RutaProtegida path="/perfiles">
              <ListaDePerfiles />
            </RutaProtegida>
            <Route path="/" exact component={App} />
          </Switch>
        </BrowserRouter>
      </LocalizationProvider>
    </React.Fragment>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
