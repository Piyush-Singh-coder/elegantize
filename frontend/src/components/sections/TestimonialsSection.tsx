import { motion } from "framer-motion";

export const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 bg-texture-floral">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-display mb-12"
        >
          Real Clients Feedbacks
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-stone-50 p-12 shadow-sm border border-gray-100 relative"
        >
          <span className="absolute top-8 left-8 text-6xl text-primary font-serif opacity-30">
            "
          </span>
          <p className="text-xl md:text-2xl italic text-gray-700 leading-relaxed mb-8 relative z-10">
            The team at Elegantize went above and beyond. From the initial
            concept to the final reveal, everything was seamless. They truly
            understood our vision and elevated it to a level we didn't think was
            possible.
          </p>
          <div>
            <div className="font-bold text-sm uppercase tracking-widest text-primary">
              Sarah & David
            </div>
            <div className="text-xs text-gray-400 mt-1">
              Married at The Plaza, NY
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
