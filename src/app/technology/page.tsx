import Technology from "@/components/technology";
import React from "react";

export const metadata = {
  title: "Technology",
  description:
    "Discover the cutting-edge technology at US AIR TECH and how it is revolutionizing various sectors.",
};

const TechnologyPage = () => {
  return (
    <div className="max-w-[2000px] mx-auto">
      <Technology />
    </div>
  );
};

export default TechnologyPage;
