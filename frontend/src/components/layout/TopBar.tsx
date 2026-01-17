import { Phone } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="bg-stone-100 dark:bg-stone-900 border-b border-gray-200 dark:border-gray-800 py-2 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-xs tracking-widest uppercase text-gray-800 dark:text-gray-200">
        <div className="flex items-center space-x-4">
          <a
            href="tel:+15551234567"
            className="flex items-center hover:text-primary transition-colors"
          >
            <Phone size={14} className="mr-1" /> (555) 123-4567
          </a>
          <span className="hidden md:inline">Serving NY, NJ & Beyond</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-primary transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Pinterest
          </a>
        </div>
      </div>
    </div>
  );
};
