import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
  const phoneNumber = "56950879950";
  const message = "Hola! Vi tus productos en línea.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      data-aos="fade-left"
    >
      <FaWhatsapp size={34} />
    </a>
  );
}

export default WhatsAppButton;