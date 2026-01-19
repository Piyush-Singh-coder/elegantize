import { aboutContent } from "../../data/content";
import { motion, type Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden bg-texture-floral"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          className="order-2 md:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.span
            variants={itemVariants}
            className="text-primary text-xs font-bold uppercase tracking-widest"
          >
            About Elegantize Weddings
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-display mt-4 mb-8"
          >
            {aboutContent.heading}
          </motion.h2>

          {aboutContent.text.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              className="text-gray-600 mb-6 leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.div variants={itemVariants} className="mt-8">
            <p className="font-display text-xl italic text-primary">
              {aboutContent.author.split("–")[0].trim()}
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              {aboutContent.author.split("–")[1]?.trim() ||
                "Event Decor Specialist"}
            </p>
          </motion.div>
        </motion.div>

        {/* Image kept as abstract/design element to match flow */}
        <motion.div
          className="order-1 md:order-2 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -top-6 -right-6 w-full h-full border-2 border-primary/20 bg-transparent"></div>
          <img
            alt="About Elegantize"
            className="relative z-10 w-full object-cover shadow-xl aspect-[3/4]"
            src="https://ik.imagekit.io/v6xwevpjp/Elegentize/raza-weding-decor-specialist-1.webp?tr=w-800"
          />
        </motion.div>
      </div>
    </section>
  );
};
