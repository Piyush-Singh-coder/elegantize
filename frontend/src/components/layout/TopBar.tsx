import { Facebook, Instagram, MapPin, Phone, Pin, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export const TopBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-stone-100 dark:bg-stone-900 border-b border-gray-200 dark:border-gray-800 py-2 px-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center text-xs tracking-widest uppercase text-gray-800 dark:text-gray-200">
        <div className="flex items-center space-x-4">
          <a
            href="tel:+15551234567"
            className="flex items-center hover:text-primary transition-colors"
          >
            <Phone size={18} className="mr-1" /> +1(347)686-4562
          </a>
          <MapPin size={18} className="mr-1" />
          <span className="hidden md:inline">
            10 Millers Lane New Hyde Park, New York 11040
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/elegantizeevents/"
            className="hover:text-primary transition-colors flex items-center gap-2"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://in.pinterest.com/elegantizeevents/"
            className="hover:text-primary transition-colors flex items-center gap-2"
          >
            <Pin size={18} />
          </a>
          <a
            href="https://www.facebook.com/people/Elegantize-Productions/100083099336478/"
            className="hover:text-primary transition-colors flex items-center gap-2"
          >
            <Facebook size={18} />
          </a>
          <a
            href="www.youtube.com/@elegantize"
            className="hover:text-primary transition-colors flex items-center gap-2"
          >
            <Youtube size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
