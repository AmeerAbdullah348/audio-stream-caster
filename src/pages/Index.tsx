import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConverterCard from "@/components/converter/ConverterCard";
import FeatureSection from "@/components/sections/FeatureSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section with Converter */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <ConverterCard />
          </div>
        </section>

        {/* How It Works Section */}
        <HowItWorksSection />
        
        {/* Features Section */}
        <FeatureSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
