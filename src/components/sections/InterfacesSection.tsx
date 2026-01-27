import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useRef } from "react";
import { Smartphone, Monitor, Tablet, Phone } from "lucide-react";

const devices = [
  {
    type: "Feature Phone",
    icon: Phone,
    description: "USSD & SMS based interface",
    screen: (
      <div className="bg-slate-900 p-4 h-full flex flex-col justify-center">
        <div className="text-green-500 font-mono text-xs space-y-2">
          <p>AGRA MENU:</p>
          <p>1. Weather Today</p>
          <p>2. Crop Advice</p>
          <p>3. Market Prices</p>
          <p>4. Report Issue</p>
          <p className="animate-pulse">_</p>
        </div>
      </div>
    ),
    width: "w-32",
  },
  {
    type: "Smartphone Basic",
    icon: Smartphone,
    description: "Voice-first mobile experience",
    screen: (
      <div className="bg-gradient-to-b from-primary to-primary/80 h-full p-3 flex flex-col">
        <div className="text-xs text-white/60 mb-2">AGRA v∞</div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-white text-xs">
            🌤 Sunny, 28°C
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-white text-xs">
            💧 Water crops today
          </div>
          <div className="bg-accent rounded-lg p-3 text-center">
            <div className="w-8 h-8 mx-auto mb-1 rounded-full bg-white/20 flex items-center justify-center">
              🎤
            </div>
            <div className="text-xs text-accent-foreground">Tap to speak</div>
          </div>
        </div>
      </div>
    ),
    width: "w-40",
  },
  {
    type: "Tablet Advanced",
    icon: Tablet,
    description: "Full dashboard experience",
    screen: (
      <div className="bg-background h-full p-2 flex flex-col">
        <div className="flex gap-1 mb-2">
          <div className="flex-1 bg-accent/10 rounded p-1">
            <div className="text-[8px] text-muted-foreground">Yield</div>
            <div className="text-xs font-bold text-accent">+23%</div>
          </div>
          <div className="flex-1 bg-sky/10 rounded p-1">
            <div className="text-[8px] text-muted-foreground">Water</div>
            <div className="text-xs font-bold text-sky">-15%</div>
          </div>
        </div>
        <div className="flex-1 bg-muted rounded p-1">
          <div className="h-full flex items-end gap-0.5">
            {[40, 65, 45, 80, 55, 70, 60].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-accent/60 rounded-t"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
    width: "w-56",
  },
  {
    type: "Expert Desktop",
    icon: Monitor,
    description: "Full analytical suite",
    screen: (
      <div className="bg-slate-950 h-full p-2 flex gap-2">
        <div className="w-1/3 space-y-1">
          <div className="bg-slate-800 rounded p-1 text-[6px] text-slate-400">
            ML Models
          </div>
          <div className="bg-accent/20 rounded p-1 text-[6px] text-accent">
            Yield Predictor v3
          </div>
          <div className="bg-slate-800 rounded p-1 text-[6px] text-slate-400">
            Disease Classifier
          </div>
        </div>
        <div className="flex-1 bg-slate-900 rounded p-1">
          <div className="grid grid-cols-3 gap-0.5 h-full">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="bg-accent/20 rounded"
                style={{ opacity: 0.3 + Math.random() * 0.7 }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
    width: "w-72",
  },
];

export const InterfacesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  return (
    <section className="relative py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Adaptive Interfaces
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Every Device,{" "}
            <span className="text-gradient-earth">Every User</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From basic feature phones to advanced workstations, AGRA v∞ delivers 
            the right experience for every context.
          </p>
        </ScrollReveal>

        {/* Horizontal scroll devices */}
        <div 
          ref={containerRef}
          className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {devices.map((device, index) => (
            <ScrollReveal 
              key={device.type} 
              delay={index * 0.15}
              direction="right"
              className="snap-center flex-shrink-0"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="flex flex-col items-center"
              >
                {/* Device Frame */}
                <div className={`${device.width} relative`}>
                  {/* Device body */}
                  <div className="bg-slate-800 rounded-[2rem] p-2 device-shadow">
                    {/* Notch / Camera */}
                    <div className="flex justify-center mb-1">
                      <div className="w-12 h-1.5 bg-slate-700 rounded-full" />
                    </div>
                    
                    {/* Screen */}
                    <div className="rounded-2xl overflow-hidden bg-slate-900 aspect-[9/16]">
                      {device.screen}
                    </div>
                    
                    {/* Home indicator */}
                    <div className="flex justify-center mt-2">
                      <div className="w-8 h-1 bg-slate-600 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Device Info */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 mb-2">
                    <device.icon className="w-4 h-4 text-accent" />
                    <h3 className="font-semibold text-foreground">{device.type}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground max-w-[200px]">
                    {device.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Scroll progress indicator */}
        <div className="flex justify-center mt-8">
          <div className="w-32 h-1 bg-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              style={{ scaleX: scrollXProgress, transformOrigin: "left" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
