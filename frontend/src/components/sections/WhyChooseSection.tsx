export const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display mb-12 text-center">
          Why Couples Choose Elegantize Weddings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-widest border-b border-white/20 pb-4">
              Our Promise
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="material-icons-outlined mr-3 text-white/80">
                  check_circle
                </span>
                <span>
                  Couples across New York and New Jersey trust Elegantize
                  because we deliver more than décor — we deliver flawless
                  wedding experiences.
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-icons-outlined mr-3 text-white/80">
                  check_circle
                </span>
                <span>
                  Every detail we create is intentional, elegant, and crafted
                  with precision.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold uppercase tracking-widest border-b border-white/20 pb-4 mb-6">
              Key Highlights
            </h3>
            <ul className="space-y-4 text-sm md:text-base opacity-90">
              {[
                "Over 10 years of combined experience in luxury wedding design",
                "More than 150 weddings designed and executed across NY and NJ",
                "Dedicated in-house design and production team",
                "Experience with high-end venues, ballrooms, estates, and outdoor spaces",
                "Seamless coordination with planners, photographers, and venues",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="block min-w-2 w-2 h-2 rounded-full bg-white mt-2 mr-4"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
