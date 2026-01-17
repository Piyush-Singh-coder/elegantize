import { MapPin, Mail } from "lucide-react";
import { Button } from "../common/Button";

export const ContactSection = () => {
  return (
    <section className="py-24 px-6 relative" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div>
          <h2 className="text-5xl font-display mb-8">
            Ready to design <br />
            <span className="italic">your day?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Let's create something extraordinary together. Fill out the form to
            schedule your initial design consultation.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="p-2 bg-stone-100 rounded-full text-primary">
                <MapPin size={20} />
              </span>
              <span className="text-sm uppercase tracking-widest text-gray-800">
                Manhattan, NY & Jersey City, NJ
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="p-2 bg-stone-100 rounded-full text-primary">
                <Mail size={20} />
              </span>
              <span className="text-sm uppercase tracking-widest text-gray-800">
                hello@elegantizeweddings.com
              </span>
            </div>
          </div>
        </div>

        <form className="bg-white p-10 border border-t-4 border-gray-100 border-t-primary shadow-lg space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-gray-500">
                First Name
              </label>
              <input
                type="text"
                className="w-full bg-stone-50 border border-gray-200 focus:outline-none focus:border-primary p-3"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-gray-500">
                Last Name
              </label>
              <input
                type="text"
                className="w-full bg-stone-50 border border-gray-200 focus:outline-none focus:border-primary p-3"
              />
            </div>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-gray-500">
              Email Address
            </label>
            <input
              type="email"
              className="w-full bg-stone-50 border border-gray-200 focus:outline-none focus:border-primary p-3"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-gray-500">
              Wedding Date
            </label>
            <input
              type="date"
              className="w-full bg-stone-50 border border-gray-200 focus:outline-none focus:border-primary p-3 text-gray-500"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-gray-500">
              Tell us about your vision
            </label>
            <textarea
              rows={4}
              className="w-full bg-stone-50 border border-gray-200 focus:outline-none focus:border-primary p-3"
            ></textarea>
          </div>
          <Button type="submit" className="w-full py-4 tracking-[0.2em]">
            Request Consultation
          </Button>
        </form>
      </div>
    </section>
  );
};
