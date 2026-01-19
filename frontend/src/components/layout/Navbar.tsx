import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "FAQ", href: "#faq" },
    
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm"
          : "bg-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo - Serif and lowercase/branded as in image "studio." -> "elegantize." */}
        {/* Logo */}
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src="https://ik.imagekit.io/v6xwevpjp/Elegentize/Elegantize-Logo.webp"
            alt="Elegantize Logo"
            className="h-12 w-auto object-contain"
          />
        </motion.div>

        {/* Desktop Menu - Centered roughly */}
        <div className="hidden lg:flex items-center space-x-10 text-xs font-bold uppercase tracking-widest text-gray-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-colors duration-300 relative group"
            >
              {link.name}
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </a>
          ))}
        </div>

        {/* CTA Button - Camel/Earth Gold */}
        <div className="hidden lg:block">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-white px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-stone-800 transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800 dark:text-gray-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col space-y-4 p-6 text-sm font-medium uppercase tracking-widest text-gray-800">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-primary text-white px-6 py-3 text-center text-xs font-bold uppercase tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Consultation
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
