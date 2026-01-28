import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, User, Mail, Phone } from "lucide-react";

interface ServiceEnquiryFormProps {
  serviceName: string;
  variant?: "horizontal" | "full";
}

export const ServiceEnquiryForm = ({
  serviceName,
  variant = "horizontal",
}: ServiceEnquiryFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(import.meta.env.VITE_GOOGLE_SHEET_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          ...formData,
          serviceName: serviceName || "Enquiry",
          submittedAt: new Date().toISOString(),
        }),
      });

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-primary/10 border border-primary/30 rounded-xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-display text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">
          We've received your enquiry for {serviceName}. Our team will contact
          you within 24 hours.
        </p>
      </motion.div>
    );
  }

  if (variant === "horizontal") {
    return (
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="bg-white shadow-xl p-6 md:p-8 border-t-4 border-primary flex flex-col gap-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-stone-50 border-none pl-10 pr-4 py-3 focus:ring-1 focus:ring-primary text-gray-600 text-sm focus:outline-none"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-stone-50 border-none pl-10 pr-4 py-3 focus:ring-1 focus:ring-primary text-gray-600 text-sm focus:outline-none"
            />
          </div>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full bg-stone-50 border-none pl-10 pr-4 py-3 focus:ring-1 focus:ring-primary text-gray-600 text-sm focus:outline-none"
            />
          </div>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Event Date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              value={formData.eventDate}
              onChange={(e) =>
                setFormData({ ...formData, eventDate: e.target.value })
              }
              className="w-full bg-stone-50 border-none pl-10 pr-4 py-3 focus:ring-1 focus:ring-primary text-gray-600 text-sm focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary-dark text-white font-bold uppercase tracking-wider text-xs py-3 px-6 transition-all duration-300 hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send className="w-3 h-3" /> Enquire
              </>
            )}
          </button>
        </div>
      </motion.form>
    );
  }

  // Full variant
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-white p-10 border border-t-4 border-gray-100 border-t-primary shadow-lg space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-gray-500">
            First Name
          </label>
          <input
            type="text"
            required
            value={formData.name.split(" ")[0]}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-stone-50 border border-gray-200 focus:outline-none focus:border-primary p-3 text-sm text-gray-900"
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-gray-500">
            Email Address
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full bg-stone-50 border border-gray-200 focus:outline-none focus:border-primary p-3 text-sm text-gray-900"
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-gray-500">
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full bg-stone-50 border border-gray-200 focus:outline-none focus:border-primary p-3 text-sm text-gray-900"
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-gray-500">
            Event Date
          </label>
          <input
            type="date"
            value={formData.eventDate}
            onChange={(e) =>
              setFormData({ ...formData, eventDate: e.target.value })
            }
            className="w-full bg-stone-50 border border-gray-200 focus:outline-none focus:border-primary p-3 text-sm text-gray-900"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-gray-500">
            Tell us about your vision
          </label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder={`Share your ideas for ${serviceName}...`}
            className="w-full bg-stone-50 border border-gray-200 focus:outline-none focus:border-primary p-3 text-sm text-gray-900 resize-none"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary-dark text-white font-bold uppercase tracking-[0.2em] text-xs py-4 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {isSubmitting ? "Sending Your Enquiry..." : <>Request Consultation</>}
      </button>
    </motion.form>
  );
};
