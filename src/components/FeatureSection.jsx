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
        <Row className="g-4" ref={ref}>
          {features.map((feature, index) => (
            <Col xs={4} key={index}>
              <div 
                className={`feature-card text-center ${inView ? 'fade-up visible' : 'fade-up'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="feature-icon mb-2">
                  {feature.icon}
                </div>
                <h3 className="feature-title h5 mb-2">{feature.title}</h3>
                <p className="feature-description small mb-0">{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default FeatureSection;
