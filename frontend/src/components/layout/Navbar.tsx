import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx"; // Install clsx if not present, otherwise use template literals or install it. Assuming I installed it.

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
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Gallery", href: "#gallery" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <nav
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm"
          : "bg-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-display font-bold tracking-tighter text-gray-900">
          ELEGANTIZE<span className="text-primary">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest text-gray-800">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden lg:block bg-primary hover:bg-opacity-90 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all animate-pulse"
        >
          Book a Consultation
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800 dark:text-gray-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4 text-sm font-medium uppercase tracking-widest text-gray-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary text-white px-6 py-3 text-center text-xs font-bold uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
