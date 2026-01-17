import { Button } from "../common/Button";

const portfolios = [
  {
    title: "Enchanted Garden Ceremony",
    location: "Central Park, New York",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBuxrqT2JmlqP4KE5GlFe29ghIHCNN-meNViXJirwLNdu7wRvDrnBVXL_pW_Gs96gV4seTE3vkgD1oCCV2yE8Mri8qiOEr0WvDk9ScwF2ESOrwdCchf6igERBTRKah3QoK4Wk9vrhAkow1x8sHOwUFy3SaAJNJp9pOE0rhqzF9WJmca3fCRfjTbAi1-Wbc9kx_TKo4liew_RDjssACV11ZLsG2V2enVcF_Ebhy5tQBO5ivkTzWavrJiLsm5Q3nzkYR0qw9CAe58iCh",
    category: "Floral Design",
  },
  {
    title: "Grand Ballroom Opulence",
    location: "Jersey City Waterfront",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBnhlf_yvy_GjTOIXWLSFO8t0x4MOTn-JdZ_gu_ipLnKzxKUIM2NMZqd5Ra7atVs8KoorsuZWp3CM0gytj38dLjoEScspbXdgNI6Q7WQv6cw7sAxquTZiF3-qJh166tksdrGZI1NpFCm9B1P27fwyKX3CLYDIu9Gu3efra8b8Ucc9VzPCgPDro01XlbUCUCgSWPyRZ-ij2fhQwW1aAuHb69JJH6u1S5ks4BjjNewB03hLU-mZId67bKCLvxXy1gnR3-AVE8Rb9aJaxG",
    category: "Lighting",
  },
  {
    title: "Modern Minimalism",
    location: "Chengdu, China", // Keeping placeholder content variety
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDOzrAwaA7aG2f6FmtvpL20EUtHfdcm62LdprEnmMowwmE9HAyxFF9TlpLdkPaToZfAkv775xVmOEPTT4obcOphGjDN92AhQKL1mN5JNu_uBkCOv30mFPNCJR12hO5L-WXVoVjuNnZcvO0SNU-8xooKx5_tD5rCmkzX_JuUkQ16q1Og-X6VHnSBrGQYZ5qGmu9CRXtXOK7GrcXz5KwGpwMQLxTOdLjX91mSyJ0jn8jMUH8U-wE8a0F6eZ0etGjisdfZ0iFMF1Ksqwj",
    category: "Concept",
  },
];

export const PortfolioSection = () => {
  return (
    <section className="py-24 bg-stone-50" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6">
            Real Weddings. Real Experiences.
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We take pride in creating weddings that are not only visually
            stunning but deeply meaningful. Our portfolio features real couples,
            real venues, and real celebrations across New York City, New Jersey,
            and beyond — each designed with a unique story, color palette, and
            cultural expression.
          </p>
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
                  {item.category}
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
          <Button
            variant="outline"
            className="border-gray-800 text-gray-800 hover:text-white hover:bg-gray-800"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
