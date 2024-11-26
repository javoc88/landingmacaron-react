import { Container, Row, Col, Image } from "react-bootstrap";

function AboutSection() {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="d-flex justify-content-center" data-aos="fade-right">
            <Image
              src="assets/img/preparacion-del-macaron.jpg"
              fluid
              rounded
              className="shadow-lg about-image"
              alt="Founder making macarons"
            />
          </Col>
          <Col lg={6} className="mt-4 mt-lg-0" data-aos="fade-left">
            <h2 className="display-4 mb-4">Nuestra historia</h2>
            <p className="lead">
              Carol Balague, venezolana y fundadora de Macaron Bombom, trae su
              pasión por la pastelería y chocolatería artesanal a Santiago de
              Chile, combinando técnicas tradicionales e internacionales para
              apoyar a emprendedores locales.
            </p>
            <p>
              "En Macaron Bombom creemos en la fuerza de lo artesanal. Nuestro
              compromiso es ofrecer productos de pastelería y chocolatería que
              destacan tanto por su calidad como por su autenticidad. Carol
              Balague, con años de experiencia en el rubro gastronómico, busca
              empoderar a otros emprendedores con opciones al por mayor y al por
              menor, ayudando a que sus negocios se diferencien con creaciones
              únicas. Si eres un emprendedor que valora la calidad artesanal y
              desea productos que sorprendan a sus clientes, Macaron Bombom es
              tu aliado en la cocina."
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
