import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { InterfacesSection } from "@/components/sections/InterfacesSection";
import { SubsystemsSection } from "@/components/sections/SubsystemsSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { Footer } from "@/components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { LogIn, LayoutDashboard } from "lucide-react";

const Index = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background grain">
      <Navigation />
      
      {/* Quick Access Bar */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        {isAuthenticated ? (
          <Button onClick={() => navigate('/dashboard')} className="shadow-lg">
            <LayoutDashboard className="w-4 h-4 mr-2" />
            Dashboard
          </Button>
        ) : (
          <Button onClick={() => navigate('/login')} className="shadow-lg">
            <LogIn className="w-4 h-4 mr-2" />
            Login
          </Button>
        )}
      </div>

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
          <div className="container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/subsystems/community" className="glass-card p-4 text-center hover:bg-white/10 transition-colors">Community</Link>
            <Link to="/subsystems/land" className="glass-card p-4 text-center hover:bg-white/10 transition-colors">Land</Link>
            <Link to="/subsystems/energy" className="glass-card p-4 text-center hover:bg-white/10 transition-colors">Energy</Link>
            <Link to="/subsystems/seed" className="glass-card p-4 text-center hover:bg-white/10 transition-colors">Seed</Link>
          </div>
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
