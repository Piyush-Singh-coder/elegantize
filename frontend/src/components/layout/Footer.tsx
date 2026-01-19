import { Instagram, Facebook, Pin, Youtube, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-stone-950 border-t border-white/10 py-16 px-6 text-white text-texture"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-1"
          >
            <div className="text-2xl font-display font-bold tracking-tighter mb-3 text-white">
              ELEGANTIZE<span className="text-primary">.</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-widest">
              Luxury event design for the modern couple who seeks elegance,
              innovation, and artistry.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-white">
              Navigation
            </h5>
            <ul className="text-xs space-y-4 uppercase tracking-widest text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-primary transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="hover:text-primary transition-colors"
                >
                  Journal
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={itemVariants}>
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-white">
              Connect
            </h5>
            <ul className="text-xs space-y-4 uppercase tracking-widest text-gray-400">
              <li>
                <a
                  href="https://www.instagram.com/elegantizeevents/"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Instagram size={16} /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://in.pinterest.com/elegantizeevents/"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Pin size={16} /> Pinterest
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/Elegantize-Productions/100083099336478/"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Facebook size={16} /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="www.youtube.com/@elegantize"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Youtube size={16} /> Youtube
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-white">
              Contact
            </h5>
            <ul className="text-xs space-y-4 uppercase tracking-widest text-gray-400">
              <li className="hover:text-primary transition-colors flex items-center gap-2">
                <Phone size={18} /> +1(347)686-456
              </li>
              <li className="hover:text-primary transition-colors flex items-center gap-2">
                <span>
                  <MapPin size={18} />
                </span>
                10 Millers Lane New Hyde Park, New York 11040
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-500"
        >
          <p>© 2024 Elegantize Weddings. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
