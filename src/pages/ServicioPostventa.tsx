import Header from "@/components/Header";
import Footer from "@/components/Footer";
import postventa1 from "@/assets/postventa-1.png";
import postventa2 from "@/assets/postventa-2.png";
import postventa3 from "@/assets/postventa-3.png";
import postventaTaller from "@/assets/postventa-taller.png";

const ServicioPostventa = () => {
  const limpiezaItems = [
    "Tratamiento de desinfección por ozono",
    "Pulido de faros",
    "Aspirado profundo del interior del habitáculo y maletero",
    "Lavado de alfombrillas e higienización con ozono",
    "Lavado de la tapicería, moquetas, alfombrillas y maletero",
    "Renovado del salpicadero y paneles de las puertas",
    "Limpieza de cristales interior",
    "Lavado a mano de la carrocería incluyendo encerado",
    "Limpieza de los marcos del coche",
    "Limpieza de llantas y neumáticos",
    "Limpieza de cristales exterior",
    "Descontaminación de carrocería",
    "Abrillantado con cera sintética",
    "Desinfección y desodorización con ozono",
    "Limpieza de conductos de aireación",
    "Repelente de lluvia en parabrisas",
    "Protección y descontaminación de llantas",
  ];

  const mecanicaItems = [
    "Estado de los neumáticos",
    "Relleno de niveles",
    "Calidad de líquidos",
    "Sistema de iluminación",
    "Inspección de carrocería",
    "Elementos mecánicos",
    "Revisión de frenos",
    "Reseteo de la centralita",
    "Sistema de escape",
    "Sistema de carga eléctrico",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero - Full screen workshop image */}
        <section className="relative bg-black text-white h-[70vh] md:h-[85vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${postventaTaller})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative container mx-auto px-4 max-w-5xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Servicios Postventa</h1>
          </div>
        </section>

        {/* Limpieza integral - Text LEFT, Image RIGHT */}
        <section className="bg-[#1a1a1a] text-white">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-[3fr_2fr] items-center gap-8 px-8 md:px-14 py-14 md:py-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Limpieza integral del vehículo
              </h2>
              <ul className="space-y-3">
                {limpiezaItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-white/40 mt-0.5">—</span>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://www.montecarmelomadridcars.com/productos-y-servicios/mcm-wash"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-white text-black rounded-full px-8 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Ver MCM Wash
              </a>
            </div>
            <div className="overflow-hidden rounded-lg max-h-[400px]">
              <img
                src={postventa1}
                alt="Postventa MCM Wash"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Vehículos exclusivos - Image LEFT, Text RIGHT */}
        <section className="bg-[#111] text-white">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-[2fr_3fr] items-center gap-8 px-8 md:px-14 py-14 md:py-20">
            <div className="overflow-hidden rounded-lg max-h-[400px] order-2 md:order-1">
              <img
                src={postventa2}
                alt="Postventa vehículos exclusivos"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Vehículos exclusivos
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Trabajamos con las mejores marcas del mercado para ofrecerte vehículos exclusivos de la más alta calidad.
              </p>
              <div className="flex flex-wrap gap-3">
                {["AUDI", "BMW", "Porsche", "Ferrari", "Lamborghini", "Mercedes-Benz", "MINI", "Land Rover"].map((brand) => (
                  <span
                    key={brand}
                    className="border border-white/20 rounded-full px-5 py-2 text-sm font-semibold text-white/80"
                  >
                    {brand}
                  </span>
                ))}
              </div>
              <a
                href="https://www.montecarmelomadridcars.com/mcm-rental-cars/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-white text-black rounded-full px-8 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Alquiler de coches
              </a>
            </div>
          </div>
        </section>

        {/* Mecánica y revisión - Text LEFT, Image RIGHT */}
        <section className="bg-[#1a1a1a] text-white">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-[3fr_2fr] items-center gap-8 px-8 md:px-14 py-14 md:py-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Mecánica y revisión
              </h2>
              <ul className="space-y-3">
                {mecanicaItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-white/40 mt-0.5">—</span>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="inline-block mt-8 bg-white text-black rounded-full px-8 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Encuéntranos
              </a>
            </div>
            <div className="overflow-hidden rounded-lg max-h-[400px] bg-[#222]">
              <img
                src={postventa3}
                alt="Postventa mecánica y revisión"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicioPostventa;
