import { aboutContent } from "../../data/content";

export const AboutSection = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden bg-texture-floral">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">
            About Elegantize Weddings
          </span>
          <h2 className="text-4xl md:text-5xl font-display mt-4 mb-8">
            {aboutContent.heading}
          </h2>

          {aboutContent.text.map((paragraph, index) => (
            <p key={index} className="text-gray-600 mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}

          <div className="mt-8">
            <p className="font-display text-xl italic text-primary">
              {aboutContent.author.split("–")[0].trim()}
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              {aboutContent.author.split("–")[1]?.trim() ||
                "Event Decor Specialist"}
            </p>
          </div>
        </div>
        {/* Image kept as abstract/design element to match flow */}
        <div className="order-1 md:order-2 relative">
          <div className="absolute -top-6 -right-6 w-full h-full border-2 border-primary/20 bg-transparent"></div>
          <img
            alt="About Elegantize"
            className="relative z-10 w-full object-cover shadow-xl aspect-[3/4]"
            src="https://ik.imagekit.io/v6xwevpjp/Elegentize/raza-weding-decor-specialist-1.webp?tr=w-800"
          />
        </div>
      </div>
    </section>
  );
};
