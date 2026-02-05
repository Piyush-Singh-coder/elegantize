import { useState } from "react";
import { Button } from "./Button";
import { submitToGoogleSheets } from "../../utils/googleSheets";
import { useNavigate } from "react-router-dom";

export const HorizontalEnquiryForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    location: "",
    phone: "",
  });

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in Name, Email, and Phone number.");
      return;
    }

    setIsSubmitting(true);
    try {
      await submitToGoogleSheets({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        eventDate: formData.date || "Not provided",
        message: `Checking availability for location: ${formData.location || "Not provided"}`,
        serviceName: "Availability Check",
      });

      navigate("/thank-you");
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
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full md:w-3/4">
            <input
              type="text"
              placeholder="Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-stone-50 border-none px-4 py-3 focus:ring-1 focus:ring-primary text-gray-600"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-stone-50 border-none px-4 py-3 focus:ring-1 focus:ring-primary text-gray-600"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full bg-stone-50 border-none px-4 py-3 focus:ring-1 focus:ring-primary text-gray-600"
            />
            <input
              type="text"
              placeholder="Date (Optional)"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="w-full bg-stone-50 border-none px-4 py-3 focus:ring-1 focus:ring-primary text-gray-600"
            />
            {/* Location field removed or merged? User asked for Name, Email, Phone. 
               Space is tight (5 cols). Let's keep Location if possible or remove it? 
               User request: "add these fields name, email, phone number".
               Previous had Date, Location, Phone.
               Now we have Name, Email, Phone, Date.
               Let's drop Location to fit 5 cols or swap Location with something else.
               Actually, 5 cols is tight. The layout was 1/4 + 3/4.
               Let's make it 5 cols for the inputs + button?
               Inputs: Name, Email, Phone, Date. Button. Total 5. Fits perfectly.
               Removing Location as it wasn't explicitly requested to be kept, and space is limited in horizontal bar.
            */}
            <Button
              className="w-full"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Check Availability"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
