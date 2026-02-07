import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/haiderlabs", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/alyhaiderdev", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* <p className="text-sm text-muted-foreground font-mono flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-primary fill-primary" /> by Ali Haider
          </p> */}

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
