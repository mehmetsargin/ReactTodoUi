import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import resim1 from './img/logo.png';

function BrandExample() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={resim1}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Yapılacaklar Listesi
          </Navbar.Brand>
        </Container>
      </Navbar>
    
  );
}

export default BrandExample;