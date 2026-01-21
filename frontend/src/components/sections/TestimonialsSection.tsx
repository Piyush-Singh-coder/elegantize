import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      image:
        "https://ik.imagekit.io/v6xwevpjp/Portfolio/Adriana&Kyle/Copy%20of%20WhatsApp%20Image%202023-09-27%20at%2012.17.56.jpg?tr=w-2000,f-auto",
      quote:
        "If you're fortunate enough to have Elegantize as your event decor specialist, consider yourselves truly blessed. We highly endorse their services!",
      author: "Adrian & Kyle",
      link: "#",
    },
    // {
    //   image:
    //     "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC09950.jpg?tr=w-1920,f-auto",
    //   quote:
    //     "Elegantize transformed our venue into a fairytale. The attention to detail was simply unmatched. Truly a magical experience!",
    //   author: "Sarah & Mike",
    //   link: "#",
    // },
    {
      image:
        "https://ik.imagekit.io/v6xwevpjp/Portfolio/kiran/Copy%20of%20KiranFritdjof-WeddingPhotos-1135.jpg?tr=w-2000,f-auto",
      quote:
        "Choosing Elegantize for our wedding decor was one of the best decisions we made. Their attention to detail and creative flair transformed our wedding venue in New York into a dream come true. Highly recommended!",
      author: "Devan & Ashish",
      link: "#",
    },
    {
      image:
        "https://ik.imagekit.io/v6xwevpjp/Portfolio/jaya/Copy%20of%20DSC00122.jpg?tr=w-2000,f-auto",
      quote:
        "Elegantize Weddings exceeded all our expectations and brought our vision to life in the most spectacular way. From the initial consultation to the final touches in our wedding, Elegantize team's professionalism and expertise shone through. We couldn't be happier with the results!",
      author: "Judi & Chris",
      link: "#",
    },
    // {
    //   image:
    //     "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC00038.jpg?tr=w-1920,f-auto",
    //   quote:
    //     "From the initial consultation to the final reveal, the team at Elegantize exceeded all our expectations.",
    //   author: "Amanda & Robert",
    //   link: "#",
    // },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1, // Ensure opacity is 1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 1, // Keep opacity 1 so it doesn't fade
    }),
  };

  return (
    <section className="relative h-[80vh] bg-stone-900 text-white overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[currentSlide].image}
            alt="Highlight"
            className="w-full h-full object-cover opacity-70"
          />
          {/* <div className="absolute inset-0 bg-black/40" /> */}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-6 md:px-20">
        <motion.div
          key={`text-${currentSlide}`}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl bg-white/10 backdrop-blur-xs border border-white/20 rounded-2xl p-10 md:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Shine effect */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

          <h3 className="text-xl md:text-xl font-serif italic leading-relaxed mb-6 text-white drop-shadow-lg text-left relative z-10">
            "{slides[currentSlide].quote}"
          </h3>
          <div className="flex flex-col items-start gap-2 relative z-10">
            <p className="text-sm md:text-base font-display tracking-widest uppercase text-white/90">
              {slides[currentSlide].author}
            </p>
            <a
              href={slides[currentSlide].link}
              className="text-xs underline underline-offset-4 hover:text-primary transition-colors text-white/80"
            >
              View the wedding
            </a>
          </div>
        </motion.div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-sm transition-all text-white z-20"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-sm transition-all text-white z-20"
      >
        <ChevronRight size={32} />
      </button>
    </section>
  );
};
