import sectionEspecialistas from "@/assets/section-1.png";
import sectionPostventa from "@/assets/section-4.jpeg";
import sectionServicios from "@/assets/section-3.png";
import sectionGaleria from "@/assets/section-2.png";

const AboutSection = () => {
  return (
    <div>
      {/* Section 1: Especialistas en vehículos exclusivos */}
      <section className="relative bg-[#1a1a2e] overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 min-h-[400px]">
            {/* Text */}
            <div className="flex flex-col justify-center px-6 md:px-12 py-12 md:py-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Especialistas en vehículos exclusivos
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                MCM Cars, especialistas en coches exclusivos en Madrid. Disponemos de una flota de más de 100 vehículos, de las marcas BMW, AUDI, Mercedes-Benz, Porsche, MINI, Land Rover, Ferrari y Lamborghini. Nuestra experiencia y prestigio nos avalan, más de 2000 coches, si buscas algún vehículo especial es probable que lo tengamos, sino te lo podemos conseguir. Contacta con nosotros.
              </p>
            </div>
            {/* Image - Red Audi in MCM Cars showroom */}
            <div className="relative min-h-[250px] md:min-h-full">
              <img
                src={sectionEspecialistas}
                alt="Especialistas en vehículos exclusivos"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Postventa */}
      <section className="relative bg-[#f5f5f5] overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 min-h-[400px]">
            {/* Image - Porsche cutaway */}
            <div className="relative min-h-[250px] md:min-h-full">
              <img
                src={sectionPostventa}
                alt="Postventa MCM Cars"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col justify-center px-6 md:px-12 py-12 md:py-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                Postventa
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                En MCM Cars, entregamos los vehículos con todas las garantías. Contamos con una red de talleres concertados en todo el territorio nacional para poder solucionar cualquier problema que te pueda surgir en el coche. Tras la compra de tu vehículo, disponemos de todo tipo de servicios para el cuidado de tu coche.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Servicios + Galería side by side */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Servicios Card - BMW i8 */}
            <div className="bg-[#f5f5f5] rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-[220px] md:h-[260px]">
                <img
                  src={sectionServicios}
                  alt="Servicios MCM Cars"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Servicios
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Nuestro objetivo es que te sientas en buenas manos antes y después de elegir un vehículo. Nuestro personal te asesorará en todo momento de manera exhaustiva, competente y con la mejor atención.
                </p>
              </div>
            </div>

            {/* Galería de vehículos Card - Racing cars */}
            <div className="bg-[#f5f5f5] rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-[220px] md:h-[260px]">
                <img
                  src={sectionGaleria}
                  alt="Galería de vehículos MCM Cars"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Galería de vehículos
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  En la siguiente galería de imágenes podrá ver algunos ejemplos de nuestras últimas entregas. En redes sociales somos conocidos por hacer los mejores vídeos en HD de todos nuestros vehículos, fuimos pioneros en ofrecerle este servicio a nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
