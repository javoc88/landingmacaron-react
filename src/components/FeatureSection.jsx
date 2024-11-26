import { Container, Row, Col } from 'react-bootstrap';
import { FaHeart, FaStar, FaTruck } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

function FeatureSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <FaHeart />,
      title: 'Hecho a mano',
      description: 'Hecho con amor e ingredientes de primera calidad',
    },
    {
      icon: <FaStar />,
      title: 'Calidad prémium',
      description: 'Receta y técnica auténticas',
    },
    {
      icon: <FaTruck />,
      title: 'Entrega rápida',
      description: 'Entrega fresca a tu puerta',
    },
  ];

  return (
    <section className="features-section" id="features">
      <Container>
        <Row ref={ref}>
          {features.map((feature, index) => (
            <Col md={4} key={index}>
              <div
                className={`feature-card ${inView ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default FeatureSection;
