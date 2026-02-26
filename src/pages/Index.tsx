import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VehicleSearch from "@/components/VehicleSearch";
import AboutSection from "@/components/AboutSection";
import VehicleGallery from "@/components/VehicleGallery";
import GoogleReviews from "@/components/GoogleReviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <VehicleSearch />
      <VehicleGallery />
      <AboutSection />
      <GoogleReviews />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
