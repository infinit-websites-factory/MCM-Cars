import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock } from "lucide-react";
import ubicacionesHero from "@/assets/ubicaciones-hero.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const UbicacionesHorarios = () => {
  const { getAddress } = useLanguage();
  const address = getAddress();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-black text-white h-[70vh] md:h-[85vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${ubicacionesHero})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative container mx-auto px-4 max-w-5xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Ubicaciones</h1>
          </div>
        </section>

        {/* Encuéntranos */}
        <section className="bg-[#1a1a1a] text-white">
          <div className="container mx-auto max-w-6xl px-8 md:px-14 py-14 md:py-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Encuéntranos</h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl mb-12">
              MCM Cars se encuentra en Madrid, en la zona norte, en San Sebastián de los Reyes. Contamos con una amplia exposición de más de 3.000m2 y más de 125 vehículos en stock. Te ofrecemos un servicio integral en la compra de tu vehículo, recogiendo tu vehículo usado como forma de pago y ofreciéndote la mejor financiación.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Info */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin size={22} className="text-white/60 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Dirección</h3>
                    <p className="text-white/70">Calle Marie Curie 36</p>
                    <p className="text-white/70">28703 San Sebastián de los Reyes, Madrid</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={22} className="text-white/60 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Teléfono</h3>
                    <a href="tel:+34676517680" className="text-white/70 hover:text-white transition-colors">
                      676 51 76 80
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={22} className="text-white/60 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Horario de ventas</h3>
                    <p className="text-white/70">Lunes - Viernes: 09:30 - 14:30 y 16:00 - 20:00</p>
                    <p className="text-white/70">Sábado: 09:30 - 14:00</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href="/contact"
                    className="inline-block bg-white text-black rounded-full px-8 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
                  >
                    Contactar
                  </a>
                  <a
                    href="https://wa.me/34676517680"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-black rounded-full px-8 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden h-[350px] md:h-full min-h-[350px]">
                <iframe
                  src={address.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MCM Cars ubicación"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UbicacionesHorarios;
