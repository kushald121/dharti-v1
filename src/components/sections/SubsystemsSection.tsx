import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  CloudSun, 
  Droplets, 
  Bug, 
  LineChart, 
  Truck, 
  Coins,
  Leaf,
  Satellite,
  AlertTriangle
} from "lucide-react";
import { useState } from "react";

const subsystems = [
  {
    id: "climate",
    name: "Climate Intel",
    icon: CloudSun,
    description: "Hyperlocal weather predictions with satellite integration",
    color: "from-sky to-sky/50",
    bgColor: "bg-sky/10",
    hoverEffect: "clouds",
  },
  {
    id: "water",
    name: "Water Management",
    icon: Droplets,
    description: "Smart irrigation scheduling and water conservation",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-500/10",
    hoverEffect: "ripples",
  },
  {
    id: "pest",
    name: "Pest Detection",
    icon: Bug,
    description: "AI-powered disease and pest identification",
    color: "from-red-400 to-orange-500",
    bgColor: "bg-orange-500/10",
    hoverEffect: "scan",
  },
  {
    id: "analytics",
    name: "Yield Analytics",
    icon: LineChart,
    description: "Predictive models for crop performance",
    color: "from-accent to-leaf",
    bgColor: "bg-accent/10",
    hoverEffect: "chart",
  },
  {
    id: "logistics",
    name: "Supply Chain",
    icon: Truck,
    description: "End-to-end logistics and market access",
    color: "from-secondary to-amber-600",
    bgColor: "bg-secondary/10",
    hoverEffect: "route",
  },
  {
    id: "finance",
    name: "Agri-Finance",
    icon: Coins,
    description: "Credit scoring and financial inclusion tools",
    color: "from-yellow-400 to-amber-500",
    bgColor: "bg-yellow-500/10",
    hoverEffect: "coins",
  },
  {
    id: "soil",
    name: "Soil Health",
    icon: Leaf,
    description: "Nutrient analysis and regenerative practices",
    color: "from-primary to-accent",
    bgColor: "bg-primary/10",
    hoverEffect: "grow",
  },
  {
    id: "satellite",
    name: "Remote Sensing",
    icon: Satellite,
    description: "Satellite imagery and NDVI monitoring",
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-500/10",
    hoverEffect: "orbit",
  },
  {
    id: "alerts",
    name: "Early Warning",
    icon: AlertTriangle,
    description: "Disaster preparedness and risk alerts",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-500/10",
    hoverEffect: "pulse",
  },
];

export const SubsystemsSection = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Integrated Subsystems
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            A Complete{" "}
            <span className="text-gradient-earth">Ecosystem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nine interconnected modules working in harmony to transform 
            agricultural intelligence from data to action.
          </p>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {subsystems.map((system, index) => (
            <ScrollReveal 
              key={system.id} 
              delay={index * 0.08}
              className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <motion.div
                onHoverStart={() => setHoveredId(system.id)}
                onHoverEnd={() => setHoveredId(null)}
                whileHover={{ scale: 1.02 }}
                className="bento-card group cursor-pointer h-full min-h-[200px]"
              >
                {/* Icon with gradient background */}
                <div className={`relative w-14 h-14 rounded-2xl ${system.bgColor} flex items-center justify-center mb-4 overflow-hidden`}>
                  <system.icon className="w-7 h-7 text-foreground relative z-10" />
                  
                  {/* Hover effect background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${system.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  
                  {/* Animated icon on hover */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: hoveredId === system.id ? 1 : 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <system.icon className="w-7 h-7 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {system.name}
                </h3>
                <p className="text-muted-foreground">
                  {system.description}
                </p>

                {/* Hover indicator line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 rounded-b-3xl bg-gradient-to-r ${system.color}`}
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Central connection visualization */}
        <ScrollReveal delay={0.5} className="mt-16">
          <div className="relative max-w-md mx-auto">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-accent/30"
            />
            <div className="text-center py-12 px-6 bg-card rounded-3xl border border-border">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse-glow">
                <span className="text-3xl font-display font-bold text-white">∞</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                AGRA ONE Core
              </h3>
              <p className="text-muted-foreground">
                Unified intelligence layer connecting all subsystems
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
