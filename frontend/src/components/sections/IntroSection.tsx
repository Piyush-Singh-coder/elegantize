export const IntroSection = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-display leading-tight mb-8">
        Luxury Wedding Decor & Design in New York <br /> & New Jersey
      </h1>
      <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-lg mb-8">
        At Elegantize, we believe your wedding should feel as extraordinary as
        your love story. Every couple is unique — and so should be their wedding
        décor. Our design team blends creativity, technical expertise, and
        luxury styling to produce weddings that are deeply personal and visually
        breathtaking.
      </p>
      <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-lg mb-16">
        Serving New York City, New Jersey, and surrounding areas, we work with
        couples, planners, and venues to deliver wedding environments that feel
        elegant, seamless, and unforgettable.
      </p>

      {/* Branding / Featured In Strip */}
      <div className="border-t border-b border-gray-100 py-8">
        <p className="text-xs uppercase tracking-[0.3em] mb-8 text-gray-400">
          Also Featured In
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          <span className="text-xl md:text-2xl font-serif">
            Maharani Weddings
          </span>
          <span className="text-xl md:text-2xl font-serif">WEZOREE</span>
          <span className="text-xl md:text-2xl font-serif italic">
            The Knot
          </span>
          <span className="text-xl md:text-2xl font-serif">WeddingWire</span>
        </div>
      </div>
    </section>
  );
};
