import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    Swal.fire({
      title: "Enviando...",
      text: "Por favor, espera mientras procesamos tu mensaje.",
      icon: "info",
      showConfirmButton: false,
      allowOutsideClick: false,
    });

    fetch("https://formsubmit.co/ajax/0ddecb23dfb22bf423c51fc3ec14048c", {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            title: "¡Mensaje Enviado!",
            text: "¡Gracias por tu mensaje! Pronto nos pondremos en contacto contigo.",
            icon: "success",
            confirmButtonColor: "#EC959C",
          }).then(() => {
            form.reset();
            window.location.reload();
          });
        } else {
          throw new Error("Error al enviar el formulario.");
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Oops...",
          text: "Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.",
          icon: "error",
          confirmButtonColor: "#EC959C",
        });
      });
  };

  return (
    <section id="contact" className="contact-section py-5">
      <Container className="contact-form">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h2 className="text-center display-6" data-aos="fade-up">
              Contáctanos
            </h2>
            <h3 className="text-center display-7 mb-4" data-aos="fade-up">
              Haz tu pedido aquí
            </h3>
            <Form onSubmit={handleSubmit} data-aos="fade-up">
              <input
                type="hidden"
                name="_subject"
                value="Nuevo pedido de macarons"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_autoresponse"
                value="¡Gracias por tu mensaje! Pronto nos pondremos en contacto contigo."
              />
              <input type="hidden" name="_next" value="javascript:void(0);" />

              <Form.Group className="d-none">
                <Form.Control type="text" name="_honey" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  required
                  placeholder="Escribe tu nombre"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  required
                  placeholder="correo@mail.cl"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Teléfono (opcional)</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="+56 9 XXXX XXXX"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe tu pedido"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Enviar Mensaje
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactForm;
