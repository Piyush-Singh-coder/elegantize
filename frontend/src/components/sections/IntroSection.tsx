import { introContent } from "../../data/content";

export const IntroSection = () => {
  return (
    <section className="py-32 px-6 bg-stone-950 text-white relative overflow-hidden">
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-display leading-tight mb-8">
          {introContent.heading}
        </h1>
        {introContent.text.map((paragraph, index) => (
          <p
            key={index}
            className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-lg mb-6"
          >
            {paragraph}
          </p>
        ))}

        <div className="inline-block border border-primary/50 p-1 mt-6">
          <button className="bg-primary text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-black transition-all duration-500">
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
};
