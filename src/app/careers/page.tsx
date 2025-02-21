import Careers from "@/components/careers";
import React from "react";

export const metadata = {
  title: "Careers",
  description: "Explore career opportunities at US AIR TECH and join our innovative team.",
};

const CareerPage = () => {
  return (
    <div>
      <div className="max-w-[2000px] mx-auto px-4 md:px-16">
      <Careers />
      </div>
    </div>
  );
};

export default CareerPage;