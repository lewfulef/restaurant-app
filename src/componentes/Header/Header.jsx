

import Carousel from 'react-bootstrap/Carousel';





const Header = () => {
  return (
    
    <Carousel data-bs-theme="ligth">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./src/assets/imagenes/banners/banner.png"
        alt="First slide"
      />
   
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./src/assets/imagenes/banners/banner2.png"
        alt="Second slide"
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./src/assets/imagenes/banners/banner3.png"
        alt="Third slide"
      />
  
    </Carousel.Item>
  </Carousel>

  )
}

export default Header;