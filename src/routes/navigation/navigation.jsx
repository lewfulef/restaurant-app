import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "react-bootstrap/Image";
import logo from '../../assets/logo/pusheenLogotipo.png';
import '../navigation/navigation.css';
import '../../componentes/Header/Header';
import Header from "../../componentes/Header/Header";


function Navigation() {
  return (
   
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand as={NavLink} to="/Home">
          <Image src={logo} className="logo" />
          <h1 className="navbarTitle">La Dona Gatona</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/Home">INICIO</Nav.Link>
            <Nav.Link as={NavLink} to="/Nosotros">NOSOTROS</Nav.Link>
            <Nav.Link as={NavLink} to="/Menu">MENU</Nav.Link>
            <Nav.Link as={NavLink} to="/Reservas">ADOPTA</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
      
      
  );
}

export default Navigation;

