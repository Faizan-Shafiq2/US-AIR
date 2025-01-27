"use client";
import React, { useState, useRef, useEffect } from "react";

interface AccordionItem {
  title: string;
  description?: string;
}

interface AccordionProps {
  data: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (activeIndex === index) {
          ref.style.maxHeight = `${ref.scrollHeight}px`;
          ref.style.transition = "max-height 0.4s ease, opacity 0.4s ease";
          ref.style.opacity = "1";
        } else {
          ref.style.maxHeight = "0";
          ref.style.opacity = "0";
        }
      }
    });
  }, [activeIndex]);

  return (
    <div className="w-full max-w-xl mx-auto bg-white ">
      {data.map((item, index) => (
        <div key={index} className="border-t border-gray-200">
          <div
            className="pt-6 pb-4 px-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-medium 2xl:text-2xl">{item.title}</span>
            <span className="text-xl font-semibold 2xl:text-2xl">
              {activeIndex === index ? "−" : "+"}
            </span>
          </div>

          <div
            ref={(el) => {
              contentRefs.current[index] = el;
            }}
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              maxHeight: "0",
              opacity: "0",
            }}
          >
            {item.description && (
              <p className="text-gray-900 text-sm px-4 pb-4">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
