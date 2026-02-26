import mcmCarsLogo from "@/assets/mcm-cars-logo.png";

const SocialMedia = () => {
  return (
    <section className="py-16 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Síguenos en Redes sociales
          </h2>
          <p className="text-lg text-muted-foreground">
            Conecta con nosotros en nuestras plataformas oficiales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Facebook Card */}
          <a
            target="_blank"
            href="https://es-es.facebook.com/MCMCars25/"
            className="block p-8 border border-border rounded-lg bg-background transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <img
                  src={mcmCarsLogo}
                  alt="MCM Cars Logo"
                  className="w-12 h-12 rounded-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">MCM Cars</h3>
              <p className="text-muted-foreground mb-4">
                Descubre nuestras novedades y vehículos exclusivos en Facebook
              </p>
              <div className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-medium inline-block">
                Ver en Facebook
              </div>
            </div>
          </a>

          {/* Instagram Card */}
          <a
            target="_blank"
            href="https://www.instagram.com/mcmcars25/"
            className="block p-8 border border-border rounded-lg bg-background transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <img
                  src={mcmCarsLogo}
                  alt="MCM Cars Logo"
                  className="w-12 h-12 rounded-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">@mcmcars25</h3>
              <p className="text-muted-foreground mb-4">
                Fotos exclusivas de nuestros vehículos y eventos especiales
              </p>
              <div className="px-6 py-2 bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500 text-white rounded-full text-sm font-medium inline-block">
                Ver en Instagram
              </div>
            </div>
          </a>

          {/* X (Twitter) Card */}
          <a
            target="_blank"
            href="https://x.com/mcmcars25?lang=es"
            className="block p-8 border border-border rounded-lg bg-background transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <img
                  src={mcmCarsLogo}
                  alt="MCM Cars Logo"
                  className="w-12 h-12 rounded-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">@mcmcars25</h3>
              <p className="text-muted-foreground mb-4">
                Últimas noticias y actualizaciones de MCM Cars
              </p>
              <div className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium inline-block">
                Ver en X
              </div>
            </div>
          </a>

          {/* TikTok Card */}
          <a
            target="_blank"
            href="https://www.tiktok.com/@mcmcars25"
            className="block p-8 border border-border rounded-lg bg-background transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <img
                  src={mcmCarsLogo}
                  alt="MCM Cars Logo"
                  className="w-12 h-12 rounded-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">@mcmcars25</h3>
              <p className="text-muted-foreground mb-4">
                Vídeos exclusivos de nuestros vehículos en TikTok
              </p>
              <div className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium inline-block">
                Ver en TikTok
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
