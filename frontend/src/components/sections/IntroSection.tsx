export const IntroSection = () => {
  return (
    <section className="py-32 px-6 bg-stone-950 text-white relative overflow-hidden">
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-display leading-tight mb-8">
          Make Your Dreams <br /> Come True
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-lg mb-12">
          We specialize in creating breathtaking weddings that reflect the
          unique vision of every couple we work with. From elegant garden
          ceremonies to luxurious ballroom receptions, we make your dream
          wedding a reality.
        </p>

        <div className="inline-block border border-primary/50 p-1">
          <button className="bg-primary text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-black transition-all duration-500">
            View Our Work
          </button>
        </div>
      </div>

      {/* Featured In Strip (Integrated into Dark Section) */}
      <div className="mt-24 border-t border-white/10 pt-12">
        <p className="text-xs uppercase tracking-[0.3em] mb-8 text-center text-gray-500">
          As Seen In
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          <span className="text-xl md:text-2xl font-serif text-white">
            Maharani Weddings
          </span>
          <span className="text-xl md:text-2xl font-serif text-white">
            WEZOREE
          </span>
          <span className="text-xl md:text-2xl font-serif italic text-white">
            The Knot
          </span>
          <span className="text-xl md:text-2xl font-serif text-white">
            WeddingWire
          </span>
        </div>
      </div>
    </section>
  );
};
