import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Image as ImageIcon } from "lucide-react";

// Mock Data for YouTube Videos (replace with real IDs if available)
const videoGallery = [
  {
    id: "ALCysyBUBbg",
    title: "Elegance Unveiled: A Glimpse into Our Dazzling Decor ",
    thumbnail:
      "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC00021.jpg?tr=w-1200,f-auto",
    videoLength: "1:04",
  },
  {
    id: "VvkpCzqlJxI",
    title: "Nadia Mahadeo Reception Stage",
    thumbnail:
      "https://ik.imagekit.io/v6xwevpjp/Home%20Page%20-%20Elegantize/Home%20Page%20Images/Home%20Page%20Images/Copy%20of%20Copy%20of%20Copy%20of%20DSC00606.jpg?tr=w-1200,f-auto",
    videoLength: "0:19",
  }, // YouTube Dev placeholder
  {
    id: "PXJWdgfigUg",
    title: "Adriana & Kyle's Ceremony & Reception Décor",
    thumbnail:
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Adriana&Kyle/Copy%20of%20A+K-196.jpg?updatedAt=1768906357275",
    videoLength: "1:05",
  }, // Psy placeholder
  {
    id: "gfJpcRz8xpo",
    title: "Great Gatsby Theme Before And After",
    thumbnail:
      "https://ik.imagekit.io/v6xwevpjp/Home%20Page%20-%20Elegantize/Home%20Page%20Images/Home%20Page%20Images/Copy%20of%20Copy%20of%20A+K-202.jpg?tr=w-1200,f-auto",
    videoLength: "0:30",
  },
  {
    id: "5HgrU-RK2Ec",
    title: "Judi & Chris Video Review",
    thumbnail:
      "https://ik.imagekit.io/v6xwevpjp/Home%20Page%20-%20Elegantize/Home%20Page%20Images/Home%20Page%20Images/Copy%20of%20DSC09019.jpg?tr=w-1200,f-auto",
    videoLength: "0:33",
  },
];

// Reuse generic gallery images
const imageGallery = [
  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC05988.jpg?updatedAt=1768808966527?tr=w-1200,f-auto",

  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC08933.jpg?updatedAt=1768806984174?tr=w-1200,f-auto",

  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC09950.jpg?updatedAt=1768806984083?tr=w-1200,f-auto",

  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC00360.jpg?updatedAt=1768806984110?tr=w-1200,f-auto",

  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC01108.jpg?updatedAt=1768806984087?tr=w-1200,f-auto",

  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC00038.jpg?updatedAt=1768806984027?tr=w-1200,f-auto",

  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC09473.jpg?updatedAt=1768806984008?tr=w-1200,f-auto",

  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC09916.jpg?updatedAt=1768806984068?tr=w-1200,f-auto",

  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC08998.jpg?updatedAt=1768806983939?tr=w-1200,f-auto",

  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC00379.jpg?updatedAt=1768806984014?tr=w-1200,f-auto",

  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC08934.jpg?updatedAt=1768806983988?tr=w-1200,f-auto",

  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC00095.jpg?updatedAt=1768806983978?tr=w-1200,f-auto",

  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC01084.jpg?updatedAt=1768806983965?tr=w-1200,f-auto",

  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC00215.jpg?updatedAt=1768806983952?tr=w-1200,f-auto",

  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC00073.jpg?updatedAt=1768806981886?tr=w-1200,f-auto",

  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC00021.jpg?updatedAt=1768806981678?tr=w-1200,f-auto",

  "https://ik.imagekit.io/v6xwevpjp/Home%20Page%20-%20Elegantize/Home%20Page%20Images/Home%20Page%20Images/Copy%20of%20382098743.jpg?updatedAt=1768802743160?tr=w-1200,f-auto",

  "https://ik.imagekit.io/v6xwevpjp/Home%20Page%20-%20Elegantize/Home%20Page%20Images/Home%20Page%20Images/Copy%20of%20DSC00620.jpg?updatedAt=1768802742465?tr=w-1200,f-auto",

  "https://ik.imagekit.io/v6xwevpjp/Home%20Page%20-%20Elegantize/Home%20Page%20Images/Home%20Page%20Images/Copy%20of%20DSC09019.jpg?updatedAt=1768802739198?tr=w-1200,f-auto",

  "https://ik.imagekit.io/v6xwevpjp/Home%20Page%20-%20Elegantize/Home%20Page%20Images/Home%20Page%20Images/Copy%20of%20DSC00335.jpg?updatedAt=1768802742675?tr=w-1200,f-auto",
];

export const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* ------------------- IMAGE GALLERY SECTION ------------------- */}

      {/* 1. Big Image Header for Images */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-stone-900 group">
        <div className="absolute inset-0 opacity-60 group-hover:opacity-50 transition-opacity duration-700">
          <img
            src="https://ik.imagekit.io/v6xwevpjp/Home%20Page%20-%20Elegantize/Home%20Page%20Images/Home%20Page%20Images/Copy%20of%20DSC00620.jpg?tr=w-2000,f-auto"
            alt="Image Gallery Header"
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-linear-to-t from-stone-900 via-stone-900/40 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <ImageIcon size={16} className="text-primary-300" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-100">
              Photography
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display uppercase tracking-widest text-shadow-lg">
            Image Gallery
          </h2>
          <p className="mt-4 text-xl font-light text-stone-200 max-w-2xl mx-auto px-6">
            Capturing the timeless details of your perfect day.
          </p>
        </motion.div>
      </section>

      {/* Image Grid */}
      <section className="py-20 px-4 md:px-12 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {imageGallery.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-sm shadow-md hover:shadow-2xl transition-all duration-500"
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  alt={`Gallery ${index}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 will-change-[opacity]">
                  <div className="p-4 bg-white/90 rounded-full border border-white/20 text-stone-900 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ImageIcon size={28} strokeWidth={1.5} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------- VIDEO GALLERY SECTION ------------------- */}

      {/* 2. Big Image Header for Videos */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-stone-900 group border-t-8 border-primary/20">
        <div className="absolute inset-0 opacity-60 group-hover:opacity-50 transition-opacity duration-700">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
          >
            <source
              src="https://ik.imagekit.io/v6xwevpjp/videos-Elegentize/Copy%20of%20Made%20for%20Me%20-%20Muni%20Long%20%20%20Dr.%20Violin%20Cover_3.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-linear-to-t from-stone-900 via-stone-900/40 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <Play
              size={16}
              className="text-secondary-300"
              fill="currentColor"
            />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary-100">
              Cinematography
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display uppercase tracking-widest text-shadow-lg">
            Video Gallery
          </h2>
          <p className="mt-4 text-xl font-light text-stone-200 max-w-2xl mx-auto px-6">
            Relive the movement, sound, and emotion of every celebration.
          </p>
        </motion.div>
      </section>

      {/* Video Grid */}
      <section className="py-20 px-4 md:px-12 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {videoGallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
                onClick={() => setSelectedVideo(item.id)}
              >
                <div
                  className={`relative overflow-hidden cursor-pointer ${
                    index === 0
                      ? "aspect-video md:aspect-[21/9]"
                      : "aspect-video"
                  }`}
                >
                  <img
                    src={item.thumbnail} // Placeholder thumbnail
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center pl-2 shadow-2xl group-hover:scale-110 transition-transform duration-300 text-stone-900">
                      <Play size={32} fill="currentColor" />
                    </div>
                  </div>

                  {/* Duration Badge (Mock) */}
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {item.videoLength ||
                      (index === 0 ? "Highlight Reel" : "4:15")}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      {"Event Highlight"}
                    </span>
                  </div>
                  <h3
                    className={`font-display mb-3 text-stone-900 ${
                      index === 0 ? "text-3xl" : "text-xl"
                    }`}
                  >
                    {item.title || `Cinematic Event ${index + 1}`}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                    Experience the atmosphere, joy, and unforgettable moments
                    captured in this beautiful celebration.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------- MODALS ------------------- */}

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              alt="Fullscreen"
              className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedVideo(null)}
            >
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-5xl aspect-video bg-black rounded shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
