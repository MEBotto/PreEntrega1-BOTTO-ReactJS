import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo.png";
import CartWidget from './CartWidget/CartWidget.jsx'
import "./Navbar-styles.css";

function NavbarExport({count, funcionOnClick}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand id="logoNavbar" href=""><img src={Logo} alt="logo" width="64px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between">
          <Nav className="">
              <Nav.Link href="">Inicio</Nav.Link>
              <Nav.Link href="">Tienda</Nav.Link>
          </Nav>
          <Nav>
            <CartWidget count={count} funcionOnClick={funcionOnClick}/>
          </Nav>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarExport;
