import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to determine link path
  const getLinkPath = (href: string) => {
    if (href === "#") return "/";
    if (href.startsWith("#")) {
      // If on home page, use hash. If not, use /#hash
      return location.pathname === "/" ? href : `/${href}`;
    }
    return href; // External or absolute
  };

  const navLinks = [
    { name: "Home", href: "#", isRouterLink: true, path: "/" },
    { name: "About", href: "/about", isRouterLink: true, path: "/about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "/gallery", isRouterLink: true, path: "/gallery" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "FAQ", href: "/faq", isRouterLink: true, path: "/faq" },
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
        {/* Logo */}
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Link to="/">
            <img
              src="https://ik.imagekit.io/v6xwevpjp/Elegentize/Elegantize-Logo.webp"
              alt="Elegantize Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10 text-xs font-bold uppercase tracking-widest text-gray-600">
          {navLinks.map((link) =>
            link.isRouterLink ? (
              <Link
                key={link.name}
                to={link.path!}
                className="hover:text-primary transition-colors duration-300 relative group"
              >
                {link.name}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ) : (
              <a
                key={link.name}
                href={getLinkPath(link.href)}
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
            ),
          )}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-block bg-primary text-white px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-stone-800 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Get In Touch
          </Link>
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
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 overflow-hidden shadow-lg h-screen"
          >
            <div className="flex flex-col space-y-4 p-6 text-sm font-medium uppercase tracking-widest text-gray-800">
              {navLinks.map((link, i) =>
                link.isRouterLink ? (
                  <Link
                    key={link.name}
                    to={link.path!}
                    className="hover:text-primary transition-colors block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <motion.span
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={getLinkPath(link.href)}
                    className="hover:text-primary transition-colors block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <motion.span
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {link.name}
                    </motion.span>
                  </a>
                ),
              )}
              <Link
                to="/contact"
                className="bg-primary text-white px-6 py-3 text-center text-xs font-bold uppercase tracking-widest mt-4 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
