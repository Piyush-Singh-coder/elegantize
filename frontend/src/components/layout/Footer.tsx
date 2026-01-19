import {
  Instagram,
  Facebook,
  Pin,
  Youtube,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 ">
          {/* Brand */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-1"
          >
            <div className="text-2xl font-display font-bold tracking-tighter mb-3  text-white">
              ELEGANTIZE<span className="text-primary">.</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-widest">
              Elegantize: Where weddings become legends! We’re not just a decor
              company in New York or in New Jersey; we’re your VIP pass to
              enchantment. From breathtaking florals to ceiling charm and vinyl
              floor allure, we’ve got the magic touch.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants} className="lg:ml-17">
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
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  About
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
                  href="#gallery"
                  className="hover:text-primary transition-colors"
                >
                  Gallery
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
                  Blog
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Connect */}
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

            
            <ul className="text-xs space-y-4 uppercase tracking-widest text-gray-400 mt-3">
              <li className="hover:text-primary transition-colors flex items-center gap-2">
                <Phone size={14} /> +1(347)686-4562
              </li>
              <li className="hover:text-primary transition-colors flex items-center gap-2">
                <MapPin size={14} className="shrink-0" />
                <span>10 Millers Lane New Hyde Park, NY 11040</span>
              </li>
              <li className="hover:text-primary transition-colors flex items-center gap-2">
                <Mail size={14} /> info@elegantize.com
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-white">
              Newsletter
            </h5>
            <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-widest mb-6">
              Sign up for our newsletter to get the latest news and updates.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors uppercase tracking-wider"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-stone-100 text-stone-900 py-3 px-6 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
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
