import {
  CalendarClock,
  Gem,
  Landmark,
  PencilRuler,
  HandPlatter,
  Building2,
} from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: CalendarClock,
      label: "10+ Years of Experience",
    },
    {
      icon: Gem,
      label: "500+ Luxury Weddings",
      isCustomIcon: false,
    },
    {
      icon: Landmark,
      label: "South Asian Wedding Specialists",
    },
    {
      icon: PencilRuler,
      label: "Custom Design & Build",
    },
    {
      icon: HandPlatter,
      label: "White-Glove Execution",
    },
    {
      icon: Building2,
      label: "Trusted by Luxury Venues",
    },
  ];

  return (
    <section className="bg-stone-50 py-12 px-6 border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl border-t-4 border-[#A68A64] p-8 md:p-12 relative overflow-hidden">
          {/* Adds a subtle inner glow/shadow if needed, but per image it's flat */}

          <div className="flex flex-wrap items-start justify-center md:justify-between gap-y-12 gap-x-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center w-[160px] md:w-auto flex-1 min-w-[140px] p-6 transition-all duration-500  hover:bg-stone-900 hover:text-white  hover:rounded-xl hover:shadow-xl hover:cursor-pointer group cursor-pointer"
                >
                  <div className="mb-4 text-[#976f38] transition-colors duration-500">
                    <Icon strokeWidth={1} size={40} />
                  </div>
                  <h4 className="text-stone-500 font-serif text-sm md:text-base leading-tight max-w-[150px] transition-colors duration-500 group-hover:text-white">
                    {stat.label}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
