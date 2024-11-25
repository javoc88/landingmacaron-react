import { Container, Carousel, Card, Button } from 'react-bootstrap';
import { products } from '../data/products';

function ProductGallery() {
  return (
    <section id="products" className="products-section py-5 bg-light">
      <Container>
        <h2 className="text-center display-4 mb-5" data-aos="fade-up">Nuestros productos</h2>
        <Carousel
          indicators={false}
          className="product-carousel"
          data-aos="fade-up"
        >
          {[0, 1].map((page) => (
            <Carousel.Item key={page}>
              <div className="d-flex justify-content-around flex-wrap">
                {products.slice(page * 3, (page + 1) * 3).map((product) => (
                  <Card 
                    key={product.id} 
                    className="product-card m-2 flex-grow-1"
                  >
                    <Card.Img 
                      variant="top" 
                      src={product.image} 
                      className="product-image"
                    />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <p className="h4 mb-3">${product.price}</p>
                      <Button variant="primary" href="#contact">
                        Contáctanos
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

export default ProductGallery;
