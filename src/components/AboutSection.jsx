import { Container, Row, Col, Image } from "react-bootstrap";

function AboutSection() {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Imagen */}
          <Col lg={6} className="d-flex justify-content-center" data-aos="fade-right">
            <Image
              src="assets/img/preparacion-del-macaron.jpg"
              fluid
              rounded
              className="shadow-lg about-image-vertical"
              alt="Preparación de macarons"
            />
          </Col>
          {/* Texto */}
          <Col lg={6} className="mt-4 mt-lg-0" data-aos="fade-left">
            <h2 className="display-4 mb-4">Nuestra Pasión por los Macarons</h2>
            <p className="lead">
              <strong>Bonbon.Macaron</strong> es el resultado de la pasión de <strong>Carol Balague</strong> por la repostería fina. Nos especializamos en macarons artesanales, combinando técnica y creatividad para ofrecerte una experiencia única.
            </p>
            <p>
              Cada macaron es elaborado cuidadosamente, utilizando ingredientes seleccionados para garantizar su <strong>sabor</strong> y <strong>textura perfectos</strong>. Diseñados para realzar tus eventos o negocios.
            </p>
            <p>
              Si buscas productos que resalten por su calidad y presentación, <strong>Bonbon.Macaron</strong> es tu mejor opción.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
