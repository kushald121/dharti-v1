import { motion } from "framer-motion";
import { Leaf, Twitter, Linkedin, Github, Mail } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "API", "Changelog"],
  Company: ["About", "Careers", "Press", "Partners", "Contact"],
  Resources: ["Documentation", "Community", "Support", "Blog", "Webinars"],
  Legal: ["Privacy", "Terms", "Security", "Cookies"],
};

export const Footer = () => {
  return (
    <footer className="bg-primary/5 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-leaf flex items-center justify-center">
                <span className="font-display font-bold text-white text-lg">∞</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                AGRA v∞
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Revolutionizing agriculture through intelligent systems. 
              One farm at a time, one planet to save.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 AGRA v∞. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Leaf className="w-4 h-4 text-accent" />
            <span>Built for a sustainable future</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
