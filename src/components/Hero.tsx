import heroBanner from "@/assets/hero-banner.png";

const Hero = () => {
  return (
    <section className="relative w-full">
      <img
        src={heroBanner}
        alt="MCM Cars - Especialistas en Vehículos Exclusivos"
        className="w-full h-auto object-cover"
      />
    </section>
  );
};

export default Hero;
