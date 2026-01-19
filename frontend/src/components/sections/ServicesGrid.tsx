import { services } from "../../data/content";

export const ServicesGrid = () => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-gray-900">
            Our Signature Wedding Decor Services
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mt-6"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            We provide complete wedding décor and design services for
            ceremonies, receptions, and multi-day wedding celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden cursor-pointer h-[28rem]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors" />

              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h4 className="font-display text-2xl mb-4">{service.title}</h4>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
