import React from "react";

interface GradientTextProps {
  text: string;
}

const GradientText: React.FC<GradientTextProps> = ({ text }) => {
  return (
    <div className="w-full xs:leading-loose sm:leading-loose md:text-lg md:leading-relaxed lg:text-xl 2xl:text-3xl 2xlg:text-[38px] leading-relaxed">
      <p
        className="bg-gradient-to-b from-[#c9c9c9] to-[#000000] bg-clip-text text-transparent"
        data-aos="fade-up"
        data-aos-duration="10000"
      >
        {text}
      </p>
    </div>
  );
};

export default GradientText;
