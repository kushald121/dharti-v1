import { motion } from "framer-motion";
import { GlassButton } from "@/components/ui/GlassButton";
import { AnimatedHeadline, TypewriterText, AnimatedParagraph } from "@/components/ui/AnimatedText";
import { FloatingParticles, GradientOrb } from "@/components/effects/ParticleEffects";
import heroFallback from "@/assets/hero-fallback.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fallback Image Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroFallback})` }}
      />
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster={heroFallback}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay with gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, hsla(150, 55%, 5%, 0.6) 0%, hsla(150, 55%, 3%, 0.75) 50%, hsla(150, 55%, 5%, 0.9) 100%)"
          }}
        />
      </div>

      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Gradient Orbs */}
      <GradientOrb className="w-[600px] h-[600px] bg-accent top-1/4 -left-1/4" />
      <GradientOrb className="w-[400px] h-[400px] bg-sky bottom-1/4 -right-1/4" />
      <GradientOrb className="w-[300px] h-[300px] bg-sunrise top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Infinity badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium text-white/80">Revolutionary Agricultural Intelligence</span>
        </motion.div>

        {/* Main headline */}
        <AnimatedHeadline 
          delay={0.4}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.95]"
        >
          <span className="block">AGRA</span>
          <span className="block text-gradient-earth">v∞</span>
        </AnimatedHeadline>

        {/* Subtitle with typewriter */}
        <div className="max-w-3xl mx-auto mb-8">
          <AnimatedParagraph 
            delay={0.8}
            className="text-xl md:text-2xl text-white/70 mb-4"
          >
            The Farming Intelligence Ecosystem
          </AnimatedParagraph>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-lg md:text-xl text-white/50"
          >
            <TypewriterText 
              text="One system. Infinite possibilities. From soil to sky."
              delay={1.4}
              speed={0.04}
            />
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <GlassButton variant="primary">
            Explore the Ecosystem
          </GlassButton>
          <GlassButton variant="secondary">
            Watch Demo
          </GlassButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-white/40">Scroll to discover</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-accent"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
