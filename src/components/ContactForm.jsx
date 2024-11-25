import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");

  if (state.succeeded) {
    return (
      <Container className="py-5 text-center">
        <h3>Gracias por contactarnos!</h3>
        <p>Recibirás una respuesta pronto.</p>
      </Container>
    );
  }

  return (
    <section id="contact" className="contact-section py-5">
      <Container className='contact-form'>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h2 className="text-center display-6 mb-4" data-aos="fade-up">Contáctanos y haz tu pedido</h2>
            <Form onSubmit={handleSubmit} data-aos="fade-up">
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  required
                  placeholder="ej. Juan Perez"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  required
                  placeholder="ej. correo@mail.cl"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  required
                  rows={4}
                  placeholder="ej. Quiero comprar deliciosos macarons"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="w-100"
                disabled={state.submitting}
              >
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactForm;