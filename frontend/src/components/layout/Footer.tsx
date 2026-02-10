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
import { Link } from "react-router-dom";

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
            <h5 className="text-[14px] uppercase tracking-widest font-bold mb-6 text-white">
              Navigation
            </h5>
            <ul className="text-xs space-y-4 uppercase tracking-widest text-gray-400">
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="hover:text-primary transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="hover:text-primary transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={itemVariants}>
            <h5 className="text-[14px] uppercase tracking-widest font-bold mb-6 text-white">
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
                <span>8 Di Tomas Ct, Copiague, NY, 11726</span>
              </li>
              <li className="hover:text-primary transition-colors flex items-center gap-2">
                <Mail size={14} /> info@elegantize.com
              </li>
            </ul>
          </motion.div>

          {/* Featured Section */}
          <motion.div variants={itemVariants}>
            <h5 className="text-[14px] uppercase tracking-widest font-bold mb-6 text-white">
              Also Featured In
            </h5>
            <div className="flex flex-wrap items-center gap-5">

              {/* The Luxury Bride Magazine */}
              <img
                src="https://ik.imagekit.io/v6xwevpjp/Elegentize/Screenshot%202026-02-10%20205318.png"
                alt="The Luxury Bride Magazine"
                className="h-18 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />

              {/* Maharani */}              
                <img
                  src="https://ik.imagekit.io/v6xwevpjp/Elegentize/maharani.png"
                  alt="Maharani Weddings"
                  className="h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />

                
              
              

              {/* Vogue Weddings */}
              <img
                src="https://ik.imagekit.io/v6xwevpjp/Elegentize/358054850_1645118269287715_7591891286819020443_n.jpg"
                alt="Vogue Weddings"
                className="h-16 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 rounded-sm"
              />

              

              {/* Brides */}
              <img
                src="https://ik.imagekit.io/v6xwevpjp/Elegentize/212027854_503914070828276_8392782795759379749_n.jpg"
                alt="Brides"
                className="h-16 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 rounded-sm"
              />

              {/* Modern Luxury Weddings */}
              <img
                src="https://ik.imagekit.io/v6xwevpjp/Elegentize/497509931_18507082408031379_9071343399086700481_n.jpg"
                alt="Modern Luxury Weddings"
                className="h-16 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 rounded-sm"
              />


              {/* Carats & Cakes */}
              <img
                src="https://ik.imagekit.io/v6xwevpjp/Elegentize/568631337_18538482400017750_8428615054160921167_n.jpg"
                alt="Carats & Cakes"
                className="h-16 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 rounded-sm"
              />


              
              {/* Elle Weddings */}
              <img
                src="https://ik.imagekit.io/v6xwevpjp/Elegentize/326374167_520572563502506_3682989526405299889_n.jpg"
                alt="Elle Weddings"
                className="h-16 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 rounded-sm"
              />

              {/* Munaluchi Bride */}
              <img
                src="https://ik.imagekit.io/v6xwevpjp/Elegentize/MUNALUCHI_Horizontal_Black-web.png"
                alt="Munaluchi Bride"
                className="h-10 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-500"
              />
              
              {/* Wezoree */}
              
                <img
                  src="https://ik.imagekit.io/v6xwevpjp/Elegentize/Logo_Wezoree_Black-01.png"
                  alt="Wezoree"
                  className="h-8 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                />

              
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-500"
        >
          <p>© 2024 Elegantize Weddings. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
