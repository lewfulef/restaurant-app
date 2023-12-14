
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './Footer.css';

function Footer() {
  return (
   
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-row">

          <div class="footer-col">
            <h4>Dona Gatona</h4>
            <ul>
              <li><a href="#">Sobre Nosotros</a></li>
              <li><a href="#">Nuestros Servicios</a></li>
              <li><a href="#">Politica de Privacidad</a></li>
              <li><a href="#">Trabaja con Nosotros</a></li>
            </ul>

          </div>
          <div class="footer-col">
            <h4>Categorias de Donas</h4>
            <ul>
              <li><a href="#">Donas tradicionales</a></li>
              <li><a href="#">Donas rellenas</a></li>
              <li><a href="#">Donas gatonas</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Contáctanos</h4>
            <ul>
              <li><a href="#">Correo electrónico</a></li>
              <li><a href="#">Whatsapp</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Síguenos</h4>
            <div class="social-links">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;