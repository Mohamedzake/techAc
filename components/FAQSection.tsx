"use client";

import { useState } from "react";
import { Add, Remove } from "react-ionicons";

const faqItems = [
  {
    question: "Where shall we begin?",
    answer:
      'Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn’t eiusmod tempor incididunt ut labore consectetur <span class="text-pink-500">adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
  },
  {
    question: "How do we work together?",
    answer:
      'Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn’t eiusmod tempor incididunt ut labore consectetur <span class="text-pink-500">adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
  },
  {
    question: "Why SCHOLAR is the best?",
    answer:
      'Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn’t eiusmod tempor incididunt ut labore consectetur <span class="text-pink-500">adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
  },
  {
    question: "Do we get the best support?",
    answer:
      'Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn’t eiusmod tempor incididunt ut labore consectetur <span class="text-pink-500">adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 bg-white ">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: Accordion */}
        <div className="bg-[#7b4eff] py-20 px-14 rounded-[3rem] text-white">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white text-black rounded-[2rem] py-4 px-6 mb-4 ${
                index === 0 ? "-mt-12" : ""
              }`}
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <h4
                  className={`text-lg font-semibold ${
                    index === 0 ? "text-[#7b4eff]" : ""
                  }`}
                >
                  {item.question}
                </h4>
                <div className="bg-[#7b4eff] text-white w-8 h-8 rounded-full flex items-center justify-center">
                  {activeIndex === index ? (
                    <Remove color="#ffffff" height="20px" width="20px" />
                  ) : (
                    <Add color="#ffffff" height="20px" width="20px" />
                  )}
                </div>
              </div>

              {/* Answer */}
              {activeIndex === index && (
                <div
                  className="mt-4 text-sm text-gray-600"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Right: About Us Text */}
        <div className="bg-[#f4f3ff] p-10 rounded-xl">
          <p className="text-[#7b4eff] font-semibold text-sm uppercase mb-2">
            About Us
          </p>
          <h2 className="text-3xl font-bold mb-4 leading-snug">
            What Make Us The Best Academy Online?
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravid risus commodo.
          </p>
          <button className="bg-white text-[#7b4eff] font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}
