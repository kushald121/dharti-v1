import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Users, GraduationCap, Microscope, Brain, Building2, ArrowRight } from "lucide-react";

const userTypes = [
  {
    icon: Users,
    title: "Illiterate Farmer",
    description: "Voice-first, visual guidance with local language support",
    color: "bg-sunrise/20 text-sunrise",
    features: ["Voice commands", "Visual indicators", "Simple icons"],
  },
  {
    icon: GraduationCap,
    title: "Literate Farmer",
    description: "Text-based interface with intuitive navigation",
    color: "bg-leaf/20 text-leaf",
    features: ["SMS alerts", "Basic dashboards", "Weather updates"],
  },
  {
    icon: Microscope,
    title: "Technical Expert",
    description: "Advanced analytics and precision agriculture tools",
    color: "bg-sky/20 text-sky",
    features: ["Data analytics", "Crop modeling", "Yield predictions"],
  },
  {
    icon: Brain,
    title: "AI Specialist",
    description: "Full access to ML models and algorithm tuning",
    color: "bg-accent/20 text-accent",
    features: ["ML pipelines", "Custom models", "API access"],
  },
  {
    icon: Building2,
    title: "Enterprise",
    description: "Multi-farm management with comprehensive reporting",
    color: "bg-secondary/20 text-secondary",
    features: ["Fleet management", "Supply chain", "ROI tracking"],
  },
];

export const PhilosophySection = () => {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            The Philosophy
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            One System,{" "}
            <span className="text-gradient-earth">Infinite Users</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AGRA v∞ adapts to every user's expertise level, from voice-guided interfaces 
            for farmers without literacy to advanced AI tools for researchers.
          </p>
        </ScrollReveal>

        {/* User Type Cards */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {userTypes.map((user, index) => (
              <ScrollReveal key={user.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative group"
                >
                  <div className="bento-card h-full">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl ${user.color} flex items-center justify-center mb-4`}>
                      <user.icon className="w-7 h-7" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {user.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {user.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-1">
                      {user.features.map((feature) => (
                        <li key={feature} className="text-xs text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Hover arrow */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="absolute bottom-6 right-6 text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Arrow connecting cards (desktop) */}
                  {index < userTypes.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="w-6 h-6 rounded-full bg-background border-2 border-border flex items-center justify-center"
                      >
                        <ArrowRight className="w-3 h-3 text-muted-foreground" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.6} className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            See how AGRA v∞ transforms complexity into simplicity
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-lg transition-shadow"
          >
            Explore All Interfaces
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </ScrollReveal>
      </div>
    </section>
  );
};
