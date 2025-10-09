import { useLanguage } from "@/contexts/LanguageContext";
import whatsappLogo from "@/assets/whatsapp-logo.png";

const FloatingWhatsApp = () => {
  const { getWhatsAppNumber } = useLanguage();

  return (
    <a
      href={`https://wa.me/${getWhatsAppNumber()}?text=Hola%20INFINIT%20Cars`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 shadow-elegant transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <img
        src={whatsappLogo}
        alt="WhatsApp"
        className="w-full h-full object-contain"
      />
    </a>
  );
};

export default FloatingWhatsApp;
