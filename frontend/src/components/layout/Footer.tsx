import { ArrowRight, Instagram, Facebook, Pin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-display font-bold tracking-tighter mb-6 text-gray-900">
              ELEGANTIZE<span className="text-primary">.</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-widest">
              Luxury event design for the modern couple who seeks elegance,
              innovation, and artistry.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-gray-900">
              Navigation
            </h5>
            <ul className="text-xs space-y-4 uppercase tracking-widest text-gray-500">
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
          </div>

          {/* Connect */}
          <div>
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-gray-900">
              Connect
            </h5>
            <ul className="text-xs space-y-4 uppercase tracking-widest text-gray-500">
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Instagram size={14} /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Pin size={14} /> Pinterest
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Facebook size={14} /> Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-gray-900">
              Newsletter
            </h5>
            <p className="text-xs text-gray-500 mb-4 uppercase tracking-widest">
              Stay updated with decor trends.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="bg-stone-100 border-none p-3 text-xs w-full focus:ring-1 focus:ring-primary focus:outline-none text-gray-600"
              />
              <button className="bg-primary text-white p-3 hover:bg-opacity-90 transition-all">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-400">
          <p>© 2024 Elegantize Weddings. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
