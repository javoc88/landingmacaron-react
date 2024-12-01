import { Container, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="hero-section" id="home" ref={ref}>
      <video className="hero-video" autoPlay loop muted playsInline>
        <source
          src="https://cdn.pixabay.com/video/2023/03/08/153818-806178220_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <Container className="hero-content text-center text-white">
        <h1 className={`hero-title ${inView ? "fade-up visible" : "fade-up"}`}>
          Bonbon.Macaron
        </h1>
        <h2 className={`hero-subtitle ${inView ? "fade-up visible" : "fade-up"}`}>
          Pastelería artesanal
        </h2>
        <p
          className={`hero-info-text ${inView ? "fade-up visible" : "fade-up"}`}
          style={{ transitionDelay: "200ms" }}
        >
          Fusionamos la tradición artesanal con influencias internacionales,
          para ofrecer los macarons más exquisitos hechos con los mejores
          ingredientes.
        </p>
        <Button
          variant="outline-light"
          size="lg"
          href="#contact"
          className={`${inView ? 'fade-up visible' : 'fade-up'}`}
          style={{ transitionDelay: '400ms' }}
        >
          Contáctanos
        </Button>
      </Container>
    </div>
  );
}

export default HeroSection;
