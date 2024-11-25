import { Container, Carousel, Card, Button } from "react-bootstrap";
import { products } from "../data/products";
import Swal from "sweetalert2";

function ProductGallery() {
  const handleOrderClick = (product) => {
    Swal.fire({
      title: product.name,
      text: `Te gustaría ordenar ${product.name} por $${product.price}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#EC959C",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, comprar ahora",
      cancelButtonText: "No por ahora",
    }).then((result) => {
      if (result.isConfirmed) {
        const message = `¡Hola! Quisiera comprar:\n\n` +
          `${product.name}\n` +
          `a $${product.price}\n\n` +
          `Deseo saber los pasos a seguir para completar mi pedido.`;
        
        const phoneNumber = "56950879950";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
      }
    });
  };
  
  return (
    <section id="products" className="products-section py-5 bg-light">
      <Container>
        <h2 className="text-center display-4 mb-5" data-aos="fade-up">
          Nuestros productos
        </h2>
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
                      <Button 
                        variant="primary" 
                        onClick={() => handleOrderClick(product)}>
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
