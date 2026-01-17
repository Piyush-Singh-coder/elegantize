import { Button } from "./Button";

export const HorizontalEnquiryForm = () => {
  return (
    <div className="bg-stone-50 py-12 px-6 border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 border-t-4 border-primary">
          <div className="w-full md:w-1/4">
            <h3 className="font-display text-xl text-gray-900">
              Let's start planning
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-3/4">
            <input
              type="text"
              placeholder="Wedding Date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              className="w-full bg-stone-50 border-none px-4 py-3 focus:ring-1 focus:ring-primary text-gray-600"
            />
            <input
              type="text"
              placeholder="Venue Location"
              className="w-full bg-stone-50 border-none px-4 py-3 focus:ring-1 focus:ring-primary text-gray-600"
            />
            <Button className="w-full">Check Availability</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
