import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "../data/servicesData";
import { ContactSection } from "../components/sections/ContactSection";
import { Check, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { getOptimizedImage } from "../utils/imageUtils";

export const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find((s) => s.id === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // If service not found, redirect to services index (or 404 page)
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Filter out the current service to show "Explore More"
  const otherServices = servicesData.filter((s) => s.id !== id).slice(0, 4);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={getOptimizedImage(service.heroImage, 1920)}
            alt={service.heroTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4 leading-tight">
              {service.heroTitle}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-4">
              {service.intro.heading}
            </h2>
            <p className="text-xl font-serif italic text-primary mb-6">
              {service.intro.subheading}
            </p>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg font-light">
              {service.intro.description.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-3">
              {service.whyChooseUs.title}
            </h2>
            <div className="w-16 h-px bg-primary mx-auto" />
          </div>

          {/* Changed to flex for centered orphan items */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {service.whyChooseUs.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-8 shadow-sm border border-stone-100 flex-1 min-w-75 max-w-100 hover:shadow-md transition-shadow duration-300 rounded-xl"
              >
                <h3 className="text-xl font-display text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Services */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-3">
              {service.signatureServices.title}
            </h2>
            <div className="w-16 h-px bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
            <div>
              <div className="space-y-6">
                {service.signatureServices.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 font-light text-sm leading-relaxed">
                        {item.description}
                      </p>
                      {item.features && (
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 font-light text-sm leading-relaxed">
                          {item.features.map((feature, fIdx) => (
                            <li key={fIdx}>{feature}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-stone-100 translate-x-6 translate-y-6 -z-10" />
              <img
                src={getOptimizedImage(
                  service.portfolioImages[1] || service.heroImage,
                  800,
                )}
                alt="Service Feature"
                className="w-full aspect-4/3 object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              {service.process.title}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto font-light">
              {service.process.description}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-center max-w-7xl mx-auto ">
            {service.process.steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group rounded-xl p-8 shadow-sm flex-1 min-w-75 max-w-100 hover:shadow-md  duration-300"
              >
                <span className="absolute -top-2 left-8 text-5xl font-display text-white/5 select-none text-outline group-hover:text-white/10 transition-colors">
                  0{idx + 1}
                </span>
                <h3 className="text-xl font-display mb-3 relative z-10">
                  {step.title}
                </h3>
                <p className="text-white/60 font-light text-sm relative z-10 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {service.testimonials && service.testimonials.length > 0 && (
        <section className="py-16 px-6 bg-stone-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-12 text-center">
              What Our Couples Say
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {service.testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-white p-8 shadow-sm relative flex-1 min-w-75 max-w-lg"
                >
                  <span className="text-5xl font-serif text-primary/20 absolute top-4 left-4">
                    "
                  </span>
                  <p className="text-gray-600 italic mb-6 relative z-10 font-light">
                    {t.quote}
                  </p>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">
                      {t.author}
                    </p>
                    <p className="text-xs text-primary uppercase tracking-widest">
                      {t.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display text-gray-900 mb-4">
            Ready to Begin?
          </h2>
          <p className="text-xl text-gray-600 font-light mb-8">
            Let’s create magic together. Contact us today to start designing
            your dream event.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-stone-900 transition-colors hover:shadow-lg transform hover:-translate-y-1 duration-300"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-3">
              Explore Our Portfolio
            </h2>
            <p className="text-gray-500 font-light">
              Discover how we’ve transformed weddings into masterpieces.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {service.portfolioImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                className="relative aspect-square cursor-pointer group overflow-hidden bg-gray-200"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={getOptimizedImage(img, 600)}
                  alt="Portfolio"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ArrowRight className="text-white w-8 h-8 -rotate-45" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white p-2 hover:text-primary transition-colors">
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              alt="Full Screen"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Explore More Services */}
      <section className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-display text-gray-900 mb-8 text-center">
            Explore More Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {otherServices.map((s) => (
              <Link key={s.id} to={`/services/${s.id}`} className="group block">
                <div className="aspect-4/5 overflow-hidden mb-3 bg-gray-100 relative">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                  <img
                    src={getOptimizedImage(s.heroImage, 400)}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 group-hover:text-primary transition-colors text-center">
                  {s.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};
