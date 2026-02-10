import { useRef } from "react";
import {
  Star, // Excellence (10+ Years)
  Crown, // Luxury (500+ Weddings)
  Palette, // Custom Design
  Gem, // White-Glove
  Landmark, // Trusted Venues
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const StatsCard = ({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"],
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-80 rounded-xl bg-stone-900 border border-stone-800 p-6 flex flex-col items-center justify-center gap-6 group cursor-pointer"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="w-20 h-20 rounded-full bg-stone-800/50 flex items-center justify-center border border-stone-700 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_30px_-5px_#D4AF37] transition-all duration-500"
      >
        <Icon
          strokeWidth={1.5}
          size={40}
          className="text-stone-400 group-hover:text-[#D4AF37] transition-colors duration-500"
        />
      </div>

      <div
        style={{
          transform: "translateZ(50px)",
        }}
        className="text-center"
      >
        <h3 className="text-3xl font-display font-medium text-white mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
          {value}
        </h3>
        <p className="text-sm font-sans text-stone-400 uppercase tracking-widest leading-relaxed">
          {label}
        </p>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export const StatsSection = () => {
  const stats = [
    {
      icon: Star,
      value: "10+",
      label: "Years of Experience",
    },
    {
      icon: Crown,
      value: "500+",
      label: "Luxury Weddings",
    },
    {
      icon: Palette,
      value: "Custom",
      label: "Design & Build",
    },
    {
      icon: Gem,
      value: "Premium",
      label: "White-Glove Execution",
    },
    {
      icon: Landmark,
      value: "Trusted",
      label: "By Luxury Venues",
    },
  ];

  return (
    <section className="bg-stone-50 py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-stone-900">
            Excellence in Every Detail
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 perspective-1000">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
