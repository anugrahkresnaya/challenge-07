import {
  Navbar,
  Container,
  Button,
  Offcanvas,
  Nav
} from 'react-bootstrap';
import styles from './NavbarComponent.module.css';

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid="md">
          <Navbar.Brand href="/">BCR</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                BCR
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#our-services">Our Services</Nav.Link>
                <Nav.Link href="#why-us">Why Us</Nav.Link>
                <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                <Nav.Link href="#faq">FAQ</Nav.Link>
                <Button variant="success" className={styles.btnGreen}>Register</Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div >
  );
};

export default NavbarComponent;
