import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// import BotonCerrarSesion from "./../elements/BotonCerrarSesion";

const MenuMult = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Multiproyec S.A.</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          Inicio
        </Nav.Link>
        <NavDropdown title="Materiales" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/perfiles">
            Perfiles
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/perfiles/new-perfil">
            Nuevo perfil
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/perfilesxkg">
            Perfiles por kg
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/perfilesxkg/new-perfil">
            Nuevo perfil por kg
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/accesorios">
            Accesorios
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/accesorios/new-accesorio">
            Nuevo accesorio
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/mods">
            Mano de obra
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/mods/new-mod">
            Nueva mano de obra
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/vidrios">
            Vidrios
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/vidrios/new-vidrio">
            Nuevo vidrio
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/servicios">
            Servicios
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/servicios/new-servicio">
            Nuevo servicio
          </NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
        <NavDropdown title="Personas" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/clientes">
            Clientes
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/clientes/new-cliente">
            Nuevo cliente
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/vendedores">
            Vendedores
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/vendedores/new-vendedor">
            Nuevo vendedor
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Calculadoras" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/calculadoras/abalpha">
            Aberturas Alpha
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/calculadoras/abtemplado">
            Aberturas Templado
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/calculadoras/absuprema">
            Aberturas Suprema
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/calculadoras/abinova">
            Aberturas Inova
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/calculadoras/abgold">
            Aberturas Gold
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Presupuestos" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/presupuestos">
            Presupuestos
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/presupuestos/new-presupuesto">
            Nuevo presupuesto
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      {/* <BotonCerrarSesion /> */}
    </Navbar>
  );
};

export default MenuMult;
