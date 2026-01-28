import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Feature Phone", href: "/agra-one/feature-phone" },
  { name: "Basic App", href: "/agra-one/basic" },
  { name: "Advanced", href: "/agra-one/advanced" },
  { name: "Analyst", href: "/agra-one/analyst" },
  { name: "Knowledge", href: "/agra-one/knowledge" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled && "border-b border-white/10"
      )}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-leaf flex items-center justify-center"
            >
              <span className="font-display font-bold text-white text-lg">∞</span>
            </motion.div>
            <span className="font-display font-bold text-xl text-white">
              Dharti v∞
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-white/70 hover:text-white transition-colors text-sm font-medium",
                  location.pathname === link.href && "text-white underline underline-offset-8 decoration-accent"
                )}
              >
                {link.name}
              </Link>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-medium text-sm hover:shadow-glow transition-shadow"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block text-white/70 hover:text-white transition-colors",
                  location.pathname === link.href && "text-white font-bold"
                )}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full py-3 rounded-full bg-accent text-accent-foreground font-medium">
              Get Started
            </button>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};
