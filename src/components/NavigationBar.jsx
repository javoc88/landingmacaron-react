import { Navbar, Nav, Container } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home">Bonbon.Macaron</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#about">Conócenos</Nav.Link>
            <Nav.Link href="#products">Productos</Nav.Link>
            <Nav.Link href="#contact">Contáctanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;