import Careers from "@/components/careers";
import React from "react";

export const metadata = {
  title: "Careers",
  description: "Explore career opportunities at US AIR TECH and join our innovative team.",
};

const CareerPage = () => {
  return (
    <div className="bg-black">
      <div className="rounded-t-3xl px-4 md:px-16 bg-white">
      <Careers />
      </div>
    </div>
  );
};

export default CareerPage;