

import Container from "react-bootstrap/esm/Container";
import {Pizzas} from "../../componentes/Pizzas/Pizzas";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
/* import image from '../../assets/imagenes/pizzas/ */


function Menu(){
  return (

    <Container>
    <Row className="m-3">
     <Col md={4} className="mb-2">
    <div className="card">
     <Image src="https://res.cloudinary.com/dc1w1o2nl/image/upload/v1702495468/donachispitas_nmwgsq.webp" fluid />
     <Pizzas name= "Chispi Dona"
            description= "Exquisita dona glaseada con coloridas chispitas de multiples colores."
            valor= {1490}/>
   </div>
   </Col> 
   
   <Col md={4} className="mb-2">
     <div className="card">
     <Image src="https://res.cloudinary.com/dc1w1o2nl/image/upload/v1702495477/donadecoco_cqarjd.png" fluid />
     <Pizzas name= "Coco Dona"
            description= "Deliciosa dona glaseada con un delicioso topping de coco rallado"
            valor= {1490}/>
   </div>
   </Col> 
   <Col md={4} className="m-3">
   <div className="card">
     <Image src="https://res.cloudinary.com/dc1w1o2nl/image/upload/v1702495472/donablanconrayas_znhllp.jpg" fluid />
     <Pizzas name= "Raya Dona"
            description= "Apetitosa dona galaseada cubierta con divertidas rallitas de chocolate"
            valor= {1490}/>
   </div>
   </Col>
   </Row>  
   </Container>
            
      
      
  
  )
}

export default Menu;