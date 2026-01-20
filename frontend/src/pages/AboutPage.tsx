import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react";
// import { FeaturedInStrip } from "../components/sections/FeaturedInStrip";
import { ClientsStrip } from "../components/sections/ClientsStrip";
import { ContactSection } from "../components/sections/ContactSection";
import { AboutSection } from "../components/sections/AboutSection";

const heroImages = [
  "https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC09950.jpg?tr=w-1920,f-auto",
  "https://ik.imagekit.io/v6xwevpjp/Home%20Page%20-%20Elegantize/Home%20Page%20Images/Home%20Page%20Images/Copy%20of%20382098743.jpg?tr=w-1920,f-auto",
  "https://ik.imagekit.io/v6xwevpjp/Home%20Page%20-%20Elegantize/Home%20Page%20Images/Home%20Page%20Images/Copy%20of%2095261302.jpg?tr=w-1920,f-auto",
  "https://ik.imagekit.io/v6xwevpjp/Home%20Page%20-%20Elegantize/Home%20Page%20Images/Home%20Page%20Images/Copy%20of%2005028235.jpg?tr=w-1920,f-auto",
];

export const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const slides = [
    {
      image:
        "https://ik.imagekit.io/v6xwevpjp/Portfolio/Adriana&Kyle/Copy%20of%20WhatsApp%20Image%202023-09-27%20at%2012.17.56.jpg?tr=w-1920,f-auto",
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
        "https://ik.imagekit.io/v6xwevpjp/Portfolio/kiran/Copy%20of%20KiranFritdjof-WeddingPhotos-1135.jpg?tr=w-1920,f-auto",
      quote:
        "Choosing Elegantize for our wedding decor was one of the best decisions we made. Their attention to detail and creative flair transformed our wedding venue in New York into a dream come true. Highly recommended!",
      author: "Devan & Ashish",
      link: "#",
    },
    {
      image:
        "https://ik.imagekit.io/v6xwevpjp/Portfolio/jaya/Copy%20of%20DSC00122.jpg?tr=w-1920,f-auto",
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

  const faqs = [
    {
      question:
        "What types of events does Elegantize specialize in decorating?",
      answer:
        "Elegantize specializes in decorating a wide range of events, including weddings, corporate events, private parties, and more. Whether you’re planning an intimate gathering or a lavish affair, we have the expertise to elevate your event decor to the next level.",
    },
    {
      question: "How far in advance should I book Elegantize for my event?",
      answer:
        "We recommend booking Elegantize as early as possible to ensure availability for your desired date. Our calendar fills up quickly, especially during peak wedding and event seasons. Contact us to discuss your event date and secure our services in advance.",
    },
    {
      question:
        "Can Elegantize accommodate specific themes or design preferences for my event?",
      answer:
        "Absolutely! At Elegantize, we pride ourselves on our versatility and ability to tailor our decor to match your unique vision. Whether you have a specific theme in mind or prefer a custom design, our team will work closely with you to bring your ideas to life.",
    },
    {
      question: "What is included in Elegantize's event decor services?",
      answer:
        "Our event decor services typically include a consultation to discuss your vision, design concept development, decor setup and installation, and teardown after the event. We offer a range of decor options, including floral arrangements, table settings, backdrops, lighting, and more.",
    },
    {
      question:
        "How do I request a quote for event decor services from Elegantize?",
      answer:
        "Requesting a quote from Elegantize is easy! Simply fill out our online contact form or reach out to us via email or phone. Provide us with details about your event, including the date, location, estimated guest count, and any specific decor preferences or requirements. We’ll promptly get back to you with a customized quote tailored to your needs.",
    },
  ];

  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="bg-stone-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentHeroSlide}
              src={heroImages[currentHeroSlide]}
              alt="About Hero"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light tracking-wide max-w-3xl mx-auto"
          >
            Crafting Unforgettable Moments
          </motion.p>
        </div>
      </section>

      {/* Section 1: Elegantize Weddings */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <AboutSection />
      </section>

      {/* Section 2: Consultation */}
      <section className="py-24 px-6 bg-[#8ca18e] text-stone-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative z-10 group">
              {/* Offset Border Background */}
              <div className="absolute top-6 left-6 w-full h-full border-2 border-white/40 z-0 transition-transform duration-700 group-hover:top-3 group-hover:left-3" />
              <div className="relative z-10 shadow-2xl">
                <img
                  src="https://ik.imagekit.io/v6xwevpjp/Gallery-Elegantize/Gallery-Elegentize/DSC00038.jpg?tr=w-800"
                  alt="Consultation"
                  className="w-full h-auto object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="order-1 lg:order-2"
          >
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/80 mb-2">
              Personalized Service
            </h4>
            <h2 className="text-4xl md:text-5xl font-display text-white mb-8">
              Dream Wedding Event Consultation
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              At Elegantize, we’re ready to embark on your journey toward
              creating the wedding event of your dreams. Let’s connect and
              discuss how we can bring your vision to life! Our Wedding
              Decoration team is dedicated to crafting unforgettable experiences
              that reflect your unique style and personality. Whether you’re
              planning a wedding at New York, anniversary celebration in New
              Jersey, or another special event, we’re here to make it truly
              memorable. Schedule a consultation with us today and let’s start
              planning your extraordinary occasion.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-white text-stone-900 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Decor Team */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
            Meet The Experts
          </h4>
          <h2 className="text-4xl md:text-5xl font-display text-stone-900">
            The Decor Team
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            The passionate individuals behind every masterpiece.
          </p>
        </div>

        {/* Member 1: Farhan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="relative group"
          >
            <div className="relative z-10 p-2">
              {/* Offset Background Box */}
              <div className="absolute top-4 -right-4 w-full h-full bg-[#8ca18e]/20 border border-[#8ca18e] z-0 transition-all duration-500 group-hover:top-2 group-hover:-right-2" />
              <div className="relative z-10 overflow-hidden shadow-xl">
                <img
                  src="https://ik.imagekit.io/v6xwevpjp/Elegentize/farhan-wedding-carpenter-specialist.webp?tr=w-800"
                  alt="Farhan"
                  className="w-full h-auto object-cover aspect-4/5 transform group-hover:scale-105 transition-transform duration-700 grayscale-20 group-hover:grayscale-0"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <h3 className="text-3xl font-display text-stone-900 mb-2">
              Farhan
            </h3>
            <p className="text-[#647a66] font-bold uppercase tracking-widest text-xs mb-6">
              Financials & Carpenter
            </p>
            <p className="text-gray-600 leading-relaxed">
              Meet Farhan, our meticulous financial manager and skilled
              carpentry expert at Elegantize. With a keen eye for detail and a
              passion for precision, Farhan ensures that every aspect of our
              projects, from budgeting to carpentry work, is executed with
              utmost professionalism and excellence. With his expertise, we can
              guarantee that your event decor is not only visually stunning but
              also financially sound and structurally sound.
            </p>
          </motion.div>
        </div>

        {/* Member 2: Karla */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="md:order-2 relative group"
          >
            <div className="relative z-10 p-2">
              {/* Offset Background Box */}
              <div className="absolute top-4 -left-4 w-full h-full bg-[#8ca18e]/20 border border-[#8ca18e] z-0 transition-all duration-500 group-hover:top-2 group-hover:-left-2" />
              <div className="relative z-10 overflow-hidden shadow-xl">
                <img
                  src="https://ik.imagekit.io/v6xwevpjp/Elegentize/karla-lead-florist.webp?tr=w-600"
                  alt="Karla"
                  className="w-full h-auto object-cover aspect-4/5 transform group-hover:scale-105 transition-transform duration-700 grayscale-20 group-hover:grayscale-0"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="md:order-1 text-right md:text-right"
          >
            <h3 className="text-3xl font-display text-stone-900 mb-2">Karla</h3>
            <p className="text-[#647a66] font-bold uppercase tracking-widest text-xs mb-6">
              Lead Florist
            </p>
            <p className="text-gray-600 leading-relaxed">
              Introducing Karla, the talented lead florist at Elegantize. With a
              passion for flowers and an artistic touch, Karla orchestrates
              breathtaking floral arrangements that add an enchanting ambiance
              to every event. From romantic bouquets to elaborate centerpieces,
              Karla’s expertise and creativity shine through in every petal.
              With an eye for color, texture, and composition, Karla ensures
              that each floral design perfectly complements the overall
              aesthetic of your celebration. Trust Karla to transform your venue
              into a floral paradise and elevate your event to new heights of
              elegance and beauty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Slider */}
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

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-[#647a66] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h5 className="text-xs uppercase tracking-[0.2em] mb-4 text-[#d4ded6]">
              F.A.Q.S
            </h5>
            <h2 className="text-4xl md:text-5xl font-display mb-8">
              Event Decor Related Questions
            </h2>
            <p className="text-[#d4ded6] text-lg leading-relaxed">
              We’re here to address all your event decor inquiries and turn your
              vision into a stunning reality! Let’s connect and explore how
              Elegantize can transform your special occasion into an
              unforgettable experience.
            </p>
          </div>
          <div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white text-stone-900 overflow-hidden text-left"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-8 py-6 flex justify-between items-center text-left font-display text-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="pr-4">{faq.question}</span>
                    {activeAccordion === index ? (
                      <Minus size={20} className="shrink-0" />
                    ) : (
                      <Plus size={20} className="shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {activeAccordion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-8 pb-6 text-gray-600 leading-relaxed"
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-125 lg:h-auto">
            <img
              src="https://ik.imagekit.io/v6xwevpjp/Portfolio/kiran/Copy%20of%20KiranFritdjof-WeddingPhotos-1135.jpg?tr=w-1200"
              alt="Couple"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-12 lg:p-24 flex flex-col justify-center">
            <h5 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
              Sign Up
            </h5>
            <h2 className="text-4xl font-display text-stone-900 mb-4">
              Subscribe to the Newsletter
            </h2>
            <p className="text-gray-500 mb-12">
              For the latest inspiration and insider tips straight to your
              inbox.
            </p>

            <form className="space-y-8 max-w-md">
              <div>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full border border-gray-300 px-6 py-4 focus:outline-none focus:border-[#647a66] transition-colors placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full border border-gray-300 px-6 py-4 focus:outline-none focus:border-[#647a66] transition-colors placeholder-gray-400"
                />
              </div>
              <button
                type="submit"
                className="rounded-full border border-stone-900 px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all duration-300"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>

      <ClientsStrip />
      <ContactSection />
    </div>
  );
};
