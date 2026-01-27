import { motion, useInView } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useRef, useEffect, useState } from "react";
import { Users, Leaf, Droplets, TrendingUp, Globe } from "lucide-react";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  delay?: number;
}

const AnimatedCounter = ({ value, suffix, label, icon: Icon, delay = 0 }: StatProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        
        const counter = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
        
        return () => clearInterval(counter);
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4">
        <Icon className="w-8 h-8 text-accent" />
      </div>
      <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
        {count.toLocaleString()}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="text-muted-foreground">{label}</div>
    </motion.div>
  );
};

const stats = [
  { value: 2.5, suffix: "M+", label: "Farmers Empowered", icon: Users },
  { value: 850, suffix: "K", label: "Hectares Monitored", icon: Leaf },
  { value: 40, suffix: "%", label: "Water Saved", icon: Droplets },
  { value: 35, suffix: "%", label: "Yield Increase", icon: TrendingUp },
  { value: 12, suffix: "", label: "Countries Active", icon: Globe },
];

export const ImpactSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Impact at Scale
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Transforming{" "}
            <span className="text-gradient-earth">Agriculture</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real farms. AGRA v∞ is making a measurable difference 
            in food security and farmer livelihoods worldwide.
          </p>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 mb-20">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={stat.label}
              {...stat}
              delay={index * 0.15}
            />
          ))}
        </div>

        {/* Testimonial */}
        <ScrollReveal delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-card rounded-3xl p-8 md:p-12 border border-border overflow-hidden">
              {/* Quote decoration */}
              <div className="absolute top-4 left-4 text-8xl font-display text-accent/10 leading-none">
                "
              </div>
              
              <blockquote className="relative z-10">
                <p className="text-xl md:text-2xl text-foreground mb-6 italic">
                  AGRA v∞ didn't just give me data—it gave me understanding. 
                  I can now predict problems before they happen and make decisions 
                  that used to take weeks in just minutes.
                </p>
                <footer className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-leaf flex items-center justify-center text-white font-semibold">
                    AK
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Amara Keita</div>
                    <div className="text-sm text-muted-foreground">
                      Lead Farmer, Mali Cooperative
                    </div>
                  </div>
                </footer>
              </blockquote>

              {/* Decorative gradient */}
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-accent/5 to-transparent" />
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.5} className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-2xl bg-accent text-accent-foreground font-semibold text-lg shadow-glow hover:shadow-[0_0_60px_-10px_hsl(142_69%_58%_/_0.5)] transition-shadow"
          >
            Join the Revolution
          </motion.button>
        </ScrollReveal>
      </div>
    </section>
  );
};
