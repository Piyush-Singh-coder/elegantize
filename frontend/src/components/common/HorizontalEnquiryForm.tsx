import { useState } from "react";
import { Button } from "./Button";
import { submitToGoogleSheets } from "../../utils/googleSheets";

export const HorizontalEnquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    location: "",
    phone: "",
  });

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.date && !formData.location && !formData.phone) return;

    setIsSubmitting(true);
    try {
      // In this specific mini-form, we might just be redirecting to the full contact page
      // OR submitting a partial lead. Let's submit what we have.
      // However, this form lacks email/name, so it's likely intended as a "Check Availability"
      // that redirects to the full form with pre-filled data.
      // But since the user said "every enquiry form", I will make it submit what it can.
      // A better UX might be redirecting to /contact?date=...&location=...

      // For now, let's submit it as a "lead" without contact info?
      // No, that's useless.
      // It's safer to redirect this specific form to the main contact area or open a modal.
      // But preserving the existing "Button" clicking behavior:

      // Let's assume for now it submits with "Anonymous" to check availability?
      // Actually, looking at the UI "Check Availability", it implies interaction.
      // Let's just hook it up to submit for now with a prompting alert or just submit.

      await submitToGoogleSheets({
        name: "Anonymous Lead",
        email: "Not provided",
        phone: formData.phone || "Not provided",
        eventDate: formData.date,
        message: `Checking availability for location: ${formData.location}`,
        serviceName: "Availability Check",
      });

      alert(
        "Availability request sent! We will need your contact details to respond. Please fill out the full contact form.",
      );
      // Ideally redirect to contact section here.
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-stone-50 py-12 px-6 border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 border-t-4 border-primary">
          <div className="w-full md:w-1/4">
            <h3 className="font-display text-xl text-gray-900">
              Let's start planning
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full md:w-3/4">
            <input
              type="text"
              placeholder="Wedding Date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="w-full bg-stone-50 border-none px-4 py-3 focus:ring-1 focus:ring-primary text-gray-600"
            />
            <input
              type="text"
              placeholder="Venue Location"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              className="w-full bg-stone-50 border-none px-4 py-3 focus:ring-1 focus:ring-primary text-gray-600"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full bg-stone-50 border-none px-4 py-3 focus:ring-1 focus:ring-primary text-gray-600"
            />
            <Button
              className="w-full"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Checking..." : "Check Availability"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
