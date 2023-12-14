import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../Nosotros/Nosotros.css';


const Nosotros = () => {
    return (
        <Container>
             <section>
            <Row className="mt-5"> 
                <Col md={6} className="p-5"> 
                    <div>
                        <h2>La Dona Gatona</h2>
                    </div>
                    <div>
                        <p>La Dona Gatona inicia desde el sueño de generar un espacio de reunión entre amantes del café y los gatos.
                            <br />
                            En nuestro local podrás encontrar el mejor café de especialidad y la mejor compañía junto a los gatitos que visitan nuestro espacio y también con las y los mininos que viven en este espacio ya que La Dona Gatona se levanta como un espacio de acogida donde diversos amigos gatunos nos visitan hasta que alguien decide adoptar a uno de ellos.
                            <br />
                            ¡¡Así que no tengas vergüenza y consulta por nuestra ficha para solicitar la adopción de alguno de nuestros tripulantes!!
                            <br />
                            Sabemos que para ti, no es solo una mejor dona. Es una reunión familiar, un cumpleaños inolvidable, una celebración de trabajo o simplemente una gran comida. Nuestro objetivo es garantizar que siempre tengas los mejores ingredientes y la mejor compañía en toda ocación.</p>
                    </div>
                </Col>

                <Col md={6} className="p-2"> 
                    <div>
                        <Image src="./src/assets/imagenes/banners/donasPreparacion.jpg" fluid />
                    </div>
                </Col>
            </Row>
            </section>
            <section>
            <Row mt-10 m-5>
           
                <div  className='D_imgLocal'>
                <Col md={12} className="p-"> 
               <Image  src="./src/assets/imagenes/banners/mostrandoDona.webp" fluid  />
               </Col >   
               </div>
           
            </Row>
            </section>
           
        </Container>
    );
}

export default Nosotros;




