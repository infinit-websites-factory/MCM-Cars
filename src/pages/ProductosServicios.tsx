import Header from "@/components/Header";
import Footer from "@/components/Footer";
import sectionServicios from "@/assets/section-servicios.jpg";
import section2 from "@/assets/section-2.png";
import section1 from "@/assets/section-1.png";
import postventa1 from "@/assets/postventa-1.png";

const ProductosServicios = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold">
              Descubre nuestros productos y servicios
            </h1>
          </div>
        </section>

        {/* Financiación - Text LEFT, Image RIGHT */}
        <section className="bg-[#1a1a1a] text-white">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-2 items-center gap-8 px-8 md:px-14 py-14 md:py-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Financiación
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Financiación con o sin entrada de todos nuestros vehículos. Ofrecemos las mejores condiciones financieras del mercado. Tú eliges la cantidad y duración de la operación. Y lo mejor de todo: la respuesta a tu solicitud es inmediata. Tu nuevo coche a la carta.
              </p>
              <a
                href="/financing"
                className="inline-block mt-8 bg-white text-black rounded-full px-8 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Más información
              </a>
            </div>
            <div className="overflow-hidden rounded-lg max-h-[400px]">
              <img
                src={sectionServicios}
                alt="Financiación MCM Cars"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Compra bajo pedido - Image LEFT, Text RIGHT */}
        <section className="bg-[#111] text-white">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-2 items-center gap-8 px-8 md:px-14 py-14 md:py-20">
            <div className="overflow-hidden rounded-lg max-h-[400px] order-2 md:order-1">
              <img
                src={section2}
                alt="Compra bajo pedido"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tu coche favorito bajo pedido
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Trabajamos tu coche favorito bajo pedido, ya sea nacional o importación. Elige al detalle color, motor, extras... etc. y nosotros te lo conseguiremos al mejor precio y en el mejor estado. Te asesoraremos de la mejor forma posible.
              </p>
              <a
                href="/contact"
                className="inline-block mt-8 bg-white text-black rounded-full px-8 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Contactar
              </a>
            </div>
          </div>
        </section>

        {/* Gestión de venta - Text LEFT, Image RIGHT */}
        <section className="bg-[#1a1a1a] text-white">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-2 items-center gap-8 px-8 md:px-14 py-14 md:py-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Gestión de venta de tu coche
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                También gestionamos la venta de tu coche, tú eliges el precio. Podemos, incluso, adelantarte hasta el 80% del valor de tasación de tu coche. Olvídate del tedioso procedimiento de vender tu vehículo y confía en nuestra experiencia.
              </p>
              <a
                href="/sell"
                className="inline-block mt-8 bg-white text-black rounded-full px-8 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Vender mi coche
              </a>
            </div>
            <div className="overflow-hidden rounded-lg max-h-[400px]">
              <img
                src={section1}
                alt="Gestión de venta MCM Cars"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* MCM Wash - Image LEFT, Text RIGHT */}
        <section className="bg-[#111] text-white">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-2 items-center gap-8 px-8 md:px-14 py-14 md:py-20">
            <div className="overflow-hidden rounded-lg max-h-[400px] order-2 md:order-1">
              <img
                src={postventa1}
                alt="MCM Wash"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                MCM Wash
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Servicio de limpieza y cuidado integral para tu vehículo. Lavado a mano, desinfección por ozono, pulido y mucho más.
              </p>
              <a
                href="https://www.montecarmelomadridcars.com/productos-y-servicios/mcm-wash"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-white text-black rounded-full px-8 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Ver MCM Wash
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductosServicios;
