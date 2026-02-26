import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone } from "lucide-react";
import sectionGaleria from "@/assets/section-galeria.jpg";
import section1 from "@/assets/section-1.png";

const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-black text-white h-[70vh] md:h-[85vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${section1})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative container mx-auto px-4 max-w-5xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold">¿Quiénes somos?</h1>
          </div>
        </section>

        {/* About content */}
        <section className="bg-[#1a1a1a] text-white">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-2 items-center gap-8 px-8 md:px-14 py-14 md:py-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sobre nosotros
              </h2>
              <div className="flex items-start gap-3 mb-8">
                <MapPin size={20} className="text-white/60 mt-1 flex-shrink-0" />
                <p className="text-white/70 text-lg leading-relaxed">
                  Nos encontramos en Madrid capital, en la zona norte, en San Sebastián de los Reyes.
                </p>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <span className="text-white/40 mt-0.5">—</span>
                  <span className="text-white/70">Contamos con una amplia exposición de más de 3.000m2 y más de 100 vehículos en stock.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/40 mt-0.5">—</span>
                  <span className="text-white/70">Te ofrecemos un servicio integral en la compra de tu vehículo, recogiendo tu vehículo usado como forma de pago.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/40 mt-0.5">—</span>
                  <span className="text-white/70">También trabajamos por encargo, buscándote tu vehículo deseado, tu nuevo coche a la carta.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/40 mt-0.5">—</span>
                  <span className="text-white/70">Nuestro amplio conocimiento del mercado te ayudará a tomar la mejor decisión en algo tan importante como elegir tu nuevo vehículo.</span>
                </li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-lg max-h-[400px]">
              <img
                src={sectionGaleria}
                alt="MCM Cars exposición"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#111] text-white">
          <div className="container mx-auto max-w-6xl px-8 md:px-14 py-14 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">¡VEN A VISITARNOS!</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-block bg-white text-black rounded-full px-8 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Contactar
              </a>
              <a
                href="/ubicaciones-y-horarios"
                className="inline-block bg-white text-black rounded-full px-8 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Ubicaciones
              </a>
              <a
                href="tel:+34676517680"
                className="inline-flex items-center gap-2 bg-white text-black rounded-full px-8 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                <Phone size={16} />
                676 51 76 80
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuienesSomos;
