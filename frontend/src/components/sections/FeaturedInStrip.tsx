export const FeaturedInStrip = () => {
  return (
    <div className="bg-stone-950 border-t border-white/10 py-12">
      <p className="text-xs uppercase tracking-[0.3em] mb-8 text-center text-gray-500">
        Also Featured In
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
        <span className="text-xl md:text-2xl font-serif text-white">
          Maharani Weddings
        </span>
        <span className="text-xl md:text-2xl font-serif text-white">
          WEZOREE
        </span>
        <span className="text-xl md:text-2xl font-serif italic text-white">
          WeddingWire
        </span>
      </div>
    </div>
  );
};
