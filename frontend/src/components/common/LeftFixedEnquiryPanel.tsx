import { Mail, Calendar, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../common/Button";

export const LeftFixedEnquiryPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button (Vertical text) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white py-6 px-2 rounded-l-md shadow-lg hover:bg-opacity-90 transition-all font-bold uppercase tracking-widest text-xs writing-vertical"
          style={{ writingMode: "vertical-rl" }}
        >
          Enquire Now
        </button>
      </div>

      {/* Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="h-full flex flex-col p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-display text-xl">Quick Enquiry</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-800"
            >
              <X size={24} />
            </button>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-500">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-stone-50 border border-gray-200 p-2 focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-500">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-stone-50 border border-gray-200 p-2 focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-500">
                Phone
              </label>
              <input
                type="tel"
                className="w-full bg-stone-50 border border-gray-200 p-2 focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-500">
                Event Date
              </label>
              <input
                type="date"
                className="w-full bg-stone-50 border border-gray-200 p-2 focus:border-primary focus:outline-none text-gray-500"
              />
            </div>
            <Button type="submit" className="w-full mt-4">
              Send Request
            </Button>
          </form>

          <div className="mt-auto pt-8 border-t border-gray-100">
            <div className="flex items-center space-x-3 mb-4 text-sm text-gray-600">
              <Mail size={16} className="text-primary" />
              <span>hello@elegantizeweddings.com</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Calendar size={16} className="text-primary" />
              <span>Mon - Fri: 9am - 6pm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
