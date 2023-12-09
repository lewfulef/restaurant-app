import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "react-bootstrap/Image";
import logo from '../../assets/logo/logotipo.png'; // Adjust the path as needed
import '../navigation/navigation.css';
import '../../componentes/Header/Header';
import Header from "../../componentes/Header/Header";


function Navigation() {
  return (
   <header>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/Home">
          <Image src={logo} className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/Home">HOME</Nav.Link>
            <Nav.Link as={NavLink} to="/Nosotros">NOSOTROS</Nav.Link>
            <Nav.Link as={NavLink} to="/Menu">MENU</Nav.Link>
            <Nav.Link as={NavLink} to="/Reservas">RESERVAS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
      <Header/>
      </header>
  );
}

export default Navigation;

