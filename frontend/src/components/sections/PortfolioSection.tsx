import { Button } from "../common/Button";
import { portfolioContent } from "../../data/content";

const portfolios = [
  {
    title: "",
    location: "",
    image:
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Adriana&Kyle/Copy%20of%20WhatsApp%20Image%202023-09-27%20at%2012.18.28.jpg?tr=w-800,f-auto",
    category: "Floral Design",
  },
  {
    title: "",
    location: "",
    image:
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Ayesha&George/Copy%20of%20Copy%20of%20DSC09906.jpg?tr=w-800,f-auto",
    category: "Lighting",
  },
  {
    title: "",
    location: "", // Keeping placeholder content variety
    image:
      "https://ik.imagekit.io/v6xwevpjp/Portfolio/Carolyn%20Mcfarlane/Copy%20of%20Copy%20of%20DSC01024.jpg?updatedAt=1768807830234&tr=w-800,f-auto",
    category: "Concept",
  },
];

export const PortfolioSection = () => {
  return (
    <section className="py-24 bg-texture-floral" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
            Curated Collection
          </p>
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-gray-900">
            {portfolioContent.heading}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {portfolioContent.description}
          </p>
          <div className="mt-8">
            <Button className="bg-primary text-white hover:bg-stone-800 border-none px-8 py-3">
              View All Weddings
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolios.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
                  {/* {item.category} */}
                </div>
              </div>
              <h3 className="font-display text-2xl group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2 uppercase tracking-wide">
                {item.location}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button>View All Projects</Button>
        </div>
      </div>
    </section>
  );
};
