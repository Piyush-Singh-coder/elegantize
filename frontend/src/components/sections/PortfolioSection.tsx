import { Button } from "../common/Button";
import { portfolioContent } from "../../data/content";
import { motion, type Variants } from "framer-motion";

const portfolios = [
  {
    title: "",
    location: "",
    image:
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Adriana&Kyle/Copy%20of%20WhatsApp%20Image%202023-09-27%20at%2012.18.28.jpg?tr=w-1200,f-auto",
    category: "Floral Design",
  },
  {
    title: "",
    location: "",
    image:
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Ayesha&George/Copy%20of%20Copy%20of%20DSC09906.jpg?tr=w-1200,f-auto",
    category: "Lighting",
  },
  {
    title: "",
    location: "", // Keeping placeholder content variety
    image:
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Carolyn%20Mcfarlane/Copy%20of%20Copy%20of%20DSC01024.jpg?updatedAt=1768807830234&tr=w-1200,f-auto",
    category: "Concept",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export const PortfolioSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-24 bg-texture-floral"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            variants={itemVariants}
            className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4"
          >
            Curated Collection
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-display mb-6 text-gray-900"
          >
            {portfolioContent.heading}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {portfolioContent.description}
          </motion.p>
          <div className="mt-8">
            <motion.div variants={itemVariants}>
              <Button className="bg-primary text-white hover:bg-stone-800 border-none px-8 py-3">
                View All Weddings
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolios.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-4/5 mb-6">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
                  {/* {item.category} */}
                </div>
              </div>
              <h3 className="font-display text-2xl group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2 uppercase tracking-wide">
                {item.location}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center" variants={itemVariants}>
          <Button>View All Projects</Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
