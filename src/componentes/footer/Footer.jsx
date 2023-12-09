
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './Footer.css';

function Footer() {
  return (
   
    <footer>
    <Container >
      <Row className='footer' >
        <Col>
         <Image src="./src/assets/imagenes/logo/logo.png"  className='logo_footer' fluid />
          
        </Col>
        <Col> 
             <h3>Pizzeria Best Choise</h3>
        </Col>
        <Col>
        <h6>Dirección: Sn Martin Viña del mar</h6>
        </Col>
      </Row>
    </Container>
    </footer>
  );
}

export default Footer;