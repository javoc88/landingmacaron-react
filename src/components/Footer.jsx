import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer position-relative py-4 py-md-5">
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-overlay"></div>
      <Container className="position-relative zindex-2 pt-4 pt-md-2 pt-xl-4 pt-xxl-5">
        <Row className="py-md-3 mb-4 mb-md-5">
          <Col md={7} lg={6} xxl={5} className="mb-sm-4 mb-md-0">
            <h2 className="display-6 mb-4 mb-md-5">
              Déjanos endulzar tus momentos especiales
            </h2>
            <div className="d-sm-flex align-items-center">
              <a
                className="btn btn-primary btn-lg me-sm-3 me-lg-4"
                href="#contact"
              >
                ¡Compra aquí!
              </a>
              <p className="fs-sm py-3 py-sm-0 ps-sm-2 mb-0">
                Te ofrecemos productos artesanales de alta calidad, perfectos
                para todo tipo de ocasiones. <br /> ¡Estamos listos para crear
                algo delicioso para ti!
              </p>
            </div>
          </Col>
          <Col md={5} className="offset-lg-1 offset-xxl-2 d-flex flex-column">
            <div className="nav mx-n2 mx-lg-n4 mb-2 mb-sm-3 d-flex align-items-center flex-column fs-4">
              <a
                className="nav-link px-0 justify-content-center"
                href="mailto:contacto@sweetmacarons.com"
              >
                contacto@sweetmacarons.com
              </a>
              <a
                className="nav-link px-0 justify-content-center"
                href="tel:+56950879950"
              >
                +56 9 5087 9950
              </a>
            </div>
            <div className="nav mx-n2 mt-auto d-flex justify-content-center">
              <a
                href="https://wa.me/56950879950?text=Hello"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={40} />
              </a>
              <a
                href="#"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={40} />
              </a>
            </div>
          </Col>
        </Row>
        <p className="fs-sm pt-3 pb-2 pb-lg-0 mb-0 text-center">
          <span>
            © Todos los derechos reservados. Desarrollado con{" "}
            <span style={{ color: "#d2691e" }}>❤️</span> por
          </span>
          <a
            className="nav-link d-inline fw-normal p-0 ms-1"
            href="https://codelium.cl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="assets\img\logoverdehorizo_800px-min.svg"
              alt="Codelium"
              style={{ width: "80px", height: "20px" }}
            />
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
