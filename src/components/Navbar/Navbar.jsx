import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Carrito from "../../assets/carrito.png";
import Logo from "../../assets/logo.png";
import "./Navbar-styles.css";

function NavbarExport(props) {
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
          <div className="">
            <div className="position-relative" onClick={props.funcionOnClick}>
              <img src={Carrito} alt="" width="32px"/>
              <Badge className="position-absolute top-0 start-100 translate-middle rounded-circle" bg="primary">{props.count}</Badge>
            </div>
          </div>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarExport;
