import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './Home.css'
import Button from 'react-bootstrap/Button'; 
import Header from '../../componentes/Header/Header';


const Home = () => {
    return (     

        <> 
        
            <Header/>

            <Container>
                <section>
                <Row className="mt-5 m-2">
                
                    <div className="calltoaction">
                    <h2>Revisa nuestra carta con las mejores donas </h2>
                    <br />
                    <Button variant="danger" href="/Menu">Haz click aquí</Button>
                    </div>
                </Row>
                </section>
                <section>
                <Row className="mt-5"> 
            
                    <Col md={6} className="p-5"> 
                        <div>
                            <h2>Fábrica de donas</h2>
                            <h1>La Dona Gatona</h1>
                        </div>
                        <div>
                            <p> Ven a probar las mejores donas y compartir con gatitos en nuestro local. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla libero fugit enim, ratione doloremque repellat sequi qui eaque facere ab at sit perspiciatis voluptatum quis repellendus voluptate, suscipit totam ipsam.
                                <br />
                                <br />
                                Si lo deseas también puedes adoptar a un gatito que lo necesite</p>
                    
                        <a  className="link"   href="/Nosotros">Ver más</a>
                        </div>
                    </Col>

                    <Col> 
                        <div>
                            <Image src="./src/assets/imagenes/banners/adopta.jpeg" fluid />
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

        </>
    );
}


export default Home;
