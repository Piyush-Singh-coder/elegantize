export const AboutSection = () => {
  return (
    <>
      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display mb-8">
                Why Couples Choose <br />
                <span className="italic font-normal">Elegantize</span>
              </h2>
              <ul className="space-y-6 text-sm md:text-base opacity-90">
                <li className="flex items-start">
                  <span className="block min-w-4 w-4 h-[2px] bg-white mt-3 mr-4"></span>
                  Over 10 years of combined experience in luxury wedding design
                </li>
                <li className="flex items-start">
                  <span className="block min-w-4 w-4 h-[2px] bg-white mt-3 mr-4"></span>
                  More than 150 weddings designed and executed across NY and NJ
                </li>
                <li className="flex items-start">
                  <span className="block min-w-4 w-4 h-[2px] bg-white mt-3 mr-4"></span>
                  Dedicated in-house design and production team
                </li>
                <li className="flex items-start">
                  <span className="block min-w-4 w-4 h-[2px] bg-white mt-3 mr-4"></span>
                  Experience with high-end venues, ballrooms, estates, and
                  outdoor spaces
                </li>
                <li className="flex items-start">
                  <span className="block min-w-4 w-4 h-[2px] bg-white mt-3 mr-4"></span>
                  Seamless coordination with planners, photographers, and venues
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-12 backdrop-blur-sm border border-white/20">
              <div className="flex mb-6 text-yellow-300">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="material-icons-outlined">
                    star
                  </span>
                ))}
              </div>
              <p className="text-xl italic font-display mb-6">
                "They turned our wedding dreams into reality. Every detail was
                perfect, from the breathtaking decor to the flawless execution.
                We couldn't have asked for more."
              </p>
              <span className="text-sm uppercase tracking-widest font-bold">
                — Jessica & Michael
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Elegantize Weddings */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden bg-texture-floral">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">
              About Elegantize Weddings
            </span>
            <h2 className="text-4xl md:text-5xl font-display mt-4 mb-8">
              Turning Your Wedding <br /> Dreams Into Reality
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              At Elegantize Weddings, we are dedicated to turning your wedding
              dreams into reality. With our team’s expertise and passion for
              creating unforgettable wedding experiences in New York and New
              Jersey, we specialize in crafting bespoke celebrations that
              reflect your unique love story.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Drawing from over 10 years of combined experience and having
              designed over 150 weddings across New York and New Jersey, we
              bring both creative vision and logistical mastery to every event.
              From initial concept to final installation, we manage every design
              detail with care, professionalism, and artistic excellence.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe that luxury lies in the details — from the way florals
              frame your ceremony to how lighting transforms your reception.
              When you entrust us with your wedding day, you gain a dedicated
              design partner focused on making every moment beautiful and
              effortless.
            </p>

            <div className="mt-8">
              <p className="font-display text-xl italic text-primary">Raza</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Event Decor Specialist
              </p>
            </div>
          </div>
          {/* Image kept as abstract/design element to match flow */}
          <div className="order-1 md:order-2 relative">
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-primary/20 bg-transparent"></div>
            <img
              alt="About Elegantize"
              className="relative z-10 w-full object-cover shadow-xl aspect-[3/4]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr9Q7O-SUcGj4vIJ3zD9Z741SgGHNyqhs7nZoZNKVSedlvJtmwjoad29EzoZYyCy9QqGc1TYjjsQy4FXAqipb8w5eYohb24TSx9rtumspMZsNnjSeUaCtLoOPyrJlSAg91R8VPxuGsSIgW3DMetDGgLllNFAoiNXpYk66ErKIMaDPSyBV3javi4uaUL1xiB84z39HU4dmlfkM2fDjJlD4OSn4ihCWrR5DYb6MVpjpPEO9n4MAfaeNVRGb0YlyS3Kk0vrckwuEOPmG1"
            />
          </div>
        </div>
      </section>
    </>
  );
};
