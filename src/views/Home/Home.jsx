import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './Home.css'
import Button from 'react-bootstrap/Button'; 

const Home = () => {
    return (
        <Container>
            <section>
            <Row className="mt-5 m-2">
             
                <div className="calltoaction">
                <h2>Revisa nuestra carta de las mejores Pizzas </h2>
                <br />
                <Button variant="danger" href="/Menu">Haz click aquí</Button>
                </div>
            </Row>
            </section>
              <section>
            <Row className="mt-5"> 
          
                <Col md={6} className="p-5"> 
                    <div>
                        <h2> Pizzeria Best choice</h2>
                    </div>
                    <div>
                        <p>El secreto del éxito se asemeja bastante a hacer una mejor pizza... cuanto más empeño pongas, mejor será el resultado. Hoy en día, buscamos la perfección como lo venimos haciendo desde el momento en que inauguramos nuestro primer restaurante hace más de 30 años. Hoy mantenemos el deseo de ser los mejores en preparar nuevos productos y nuevas e innovadoras recetas.
                            <br />
                            La calidad es esencial para nosotros. Ha sido nuestra base desde la primera pizza que preparamos en nuestro primer local en Jeffersonville, IN, hasta las que hacemos hoy en día en los más de 5,000 restaurantes en 44 países y territorios alrededor del mundo.</p>
                  
                     <a  className="link"   href="/Nosotros">Ver más</a>
                    </div>
                </Col>

                <Col> 
                    <div>
                        <Image src="./src/assets/imagenes/banners/5.jpg" fluid />
                    </div>
                </Col>
               
            </Row>
            </section>
            
            <section>
            <Row className="mt-5 m-2">
             
                <div className="calltoaction2">
                <h2>Reserva con nosotros</h2>
                <br />
                <Button variant="danger" href="/Reservas">Haz click aquí</Button>
                </div>
            </Row>
            </section>
            
        </Container>
    );
}

export default Home;
