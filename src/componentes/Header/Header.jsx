
import Carousel from 'react-bootstrap/Carousel';


const Header = () => {
  return (
    
    <Carousel data-bs-theme="ligth">
    <Carousel.Item>
      <img
        className="d-block w-90"
        src="./src/assets/imagenes/banners/donasBanner.png"
        alt="First slide"
      />
   
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block "
        src="./src/assets/imagenes/banners/donaLinda.webp"
        alt="Second slide"
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src="./src/assets/imagenes/banners/donaRellena.jpeg"
        alt="Third slide"
      />
  
    </Carousel.Item>
  </Carousel>

  )
}

export default Header;