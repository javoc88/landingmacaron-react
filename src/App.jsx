import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./components/Loader";
import NavigationBar from "./components/NavigationBar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import AboutSection from "./components/AboutSection";
import ProductGallery from "./components/ProductGallery";
import ContactForm from "./components/ContactForm";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <NavigationBar />
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <ProductGallery />
      <ContactForm />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
