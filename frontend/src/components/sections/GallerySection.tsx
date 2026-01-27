import { Button } from "../common/Button";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Using placeholder images for gallery as specific gallery images weren't in the data file
// I'll reuse some from content.ts and add typical placeholders where needed for the 4x3 grid mentioned in PDF
const galleryImages = [
  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC08933.jpg?tr=w-1200,f-auto",
  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC00360.jpg?tr=w-1200,f-auto",
  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC05988.jpg?tr=w-1200,f-auto",
  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC01108.jpg?tr=w-1200,f-auto",
  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC09950.jpg?tr=w-1200,f-auto",
  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC09916.jpg?tr=w-1200,f-auto",
  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC00038.jpg?tr=w-1200,f-auto",
  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC00379.jpg?tr=w-1200,f-auto",
];

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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <motion.section
      id="gallery"
      className="py-24 px-6 bg-stone-50 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-primary text-xs font-bold uppercase tracking-widest"
        >
          Our Work
        </motion.span>
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-3xl md:text-5xl font-display mb-12 mt-2 uppercase tracking-widest"
        >
          Visual Inspiration
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              layoutId={`gallery-image-${index}`}
              variants={itemVariants}
              className="overflow-hidden h-64 group relative cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors"
                aria-label="Close"
              >
                <X size={40} />
              </button>
              <motion.img
                layoutId={
                  selectedImage
                    ? `gallery-image-${galleryImages.indexOf(selectedImage)}`
                    : undefined
                }
                src={selectedImage}
                alt="Full screen"
                className="max-w-full max-h-[90vh] object-contain rounded-sm"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
              />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="mt-12"
        >
          <Link to="/gallery">
            <Button variant="primary">View All Projects</Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};
