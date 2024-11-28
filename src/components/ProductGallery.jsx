import { Container, Carousel, Card, Button } from "react-bootstrap";
import { products } from "../data/products";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import ProductModal from "./ProductModal";

function ProductGallery() {
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else {
        setItemsPerSlide(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOrderClick = (product) => {
    Swal.fire({
      title: product.name,
      text: `Te gustaría ordenar ${product.name} por $${new Intl.NumberFormat(
        "es-CL"
      ).format(product.price)}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#EC959C",
      cancelButtonColor: "#F8DC69",
      confirmButtonText: "Si, comprar ahora",
      cancelButtonText: "No por ahora",
    }).then((result) => {
      if (result.isConfirmed) {
        const message =
          `¡Hola! Quisiera comprar:\n\n` +
          `${product.name}\n` +
          `a $${new Intl.NumberFormat("es-CL").format(product.price)}\n\n` +
          `Deseo saber los pasos a seguir para completar mi pedido.`;

        const phoneNumber = "56950879950";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`;

        window.open(whatsappUrl, "_blank");
      }
    });
  };

  const getProductsForSlide = (startIndex) => {
    const slide = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      const productIndex = (startIndex + i) % products.length;
      slide.push(products[productIndex]);
    }
    return slide;
  };

  const totalSlides = Math.ceil(products.length / itemsPerSlide);
  const slides = Array.from({ length: totalSlides }, (_, index) =>
    getProductsForSlide(index * itemsPerSlide)
  );

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="products-section bg-light">
      <Container>
        <h2 className="text-center display-4 mb-5" data-aos="fade-up">
          Nuestros productos
        </h2>
        <Carousel
          indicators={false}
          className="product-carousel"
          interval={3000}
          pause={"hover"}
          controls={true}
          data-aos="fade-up"
        >
          {slides.map((slide, slideIndex) => (
            <Carousel.Item key={slideIndex}>
              <div className="d-flex justify-content-around">
                {slide.map((product, productIndex) => (
                  <Card
                    key={`${slideIndex}-${product.id}-${productIndex}`}
                    className="product-card m-2"
                  >
                    <Card.Img
                      className="product-img"
                      variant="top"
                      src={product.image}
                    />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{truncateText(product.description, 30)}</Card.Text>
                      <p className="h4 mb-3">
                        ${new Intl.NumberFormat("es-CL").format(product.price)}
                      </p>
                      <div className="d-flex gap-2">
                        <Button
                          variant="primary"
                          onClick={() => handleOrderClick(product)}
                        >
                          Comprar
                        </Button>
                        <Button
                          variant="outline-secondary"
                          onClick={() => handleShowModal(product)}
                        >
                          Más detalles
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <ProductModal
          product={selectedProduct}
          show={showModal}
          handleClose={handleCloseModal}
        />
      </Container>
    </section>
  );
}

export default ProductGallery;
