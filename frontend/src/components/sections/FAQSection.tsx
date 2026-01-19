import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../data/content";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-stone-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-4">
          Common Questions
        </h2>
        <div className="w-24 h-0.5 bg-primary mx-auto mb-16"></div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-100">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
              >
                <span className="font-bold uppercase text-xs tracking-widest text-gray-800">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-gray-400 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  size={16}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-6 pb-6 pt-2">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
