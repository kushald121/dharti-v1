import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { InterfacesSection } from "@/components/sections/InterfacesSection";
import { SubsystemsSection } from "@/components/sections/SubsystemsSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grain">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <div id="philosophy">
          <PhilosophySection />
        </div>
        
        <div id="interfaces">
          <InterfacesSection />
        </div>
        
        <div id="ecosystem">
          <SubsystemsSection />
        </div>
        
        <div id="impact">
          <ImpactSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
