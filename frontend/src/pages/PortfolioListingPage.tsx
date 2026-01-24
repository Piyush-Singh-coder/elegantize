import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";
import { getOptimizedImage } from "../utils/imageUtils";
import { ContactSection } from "../components/sections/ContactSection";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const PortfolioListingPage = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header */}
      <section className="bg-stone-900 text-white py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src={getOptimizedImage(
              "https://ik.imagekit.io/v6xwevpjp/Portfolio/Adriana&Kyle/Copy%20of%20A+K-196.jpg",
              1920,
            )}
            alt="Portfolio Header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display mb-6"
          >
            Real Weddings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-light text-stone-300"
          >
            A collection of our most cherished celebrations.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioData.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group cursor-pointer"
              >
                <Link to={`/portfolio/${item.id}`}>
                  <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-gray-200">
                    <motion.img
                      src={getOptimizedImage(item.heroImage, 800)}
                      alt={item.title}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full object-cover transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
                      {item.category}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="font-display text-2xl">
                        {item.location}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-display text-2xl text-gray-900 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 uppercase tracking-wide">
                    {item.date}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};
