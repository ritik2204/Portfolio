import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolioData from "@/data/portfolio.json";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Github, href: portfolioData.contact.links.github, label: "GitHub" },
    { icon: Linkedin, href: portfolioData.contact.links.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${portfolioData.contact.email}`, label: "Email" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/40"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-accent">
            {portfolioData.name.split(' ').map(name => name[0]).join('')}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === item.path ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            {socialLinks.map((link) => (
              <Button key={link.label} variant="ghost" size="icon" asChild>
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  <link.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
            <Button variant="default" size="sm" asChild>
              <a href={portfolioData.contact.links.resume_pdf} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4 mr-2" />
                CV
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium transition-colors hover:text-accent ${
                      location.pathname === item.path ? "text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  {socialLinks.map((link) => (
                    <Button key={link.label} variant="ghost" size="icon" asChild>
                      <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                        <link.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                  <Button variant="default" size="sm" asChild>
                    <a href={portfolioData.contact.links.resume_pdf} target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      CV
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;