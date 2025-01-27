import React from "react";

interface GradientTextProps {
  text: string;
}

const GradientText: React.FC<GradientTextProps> = ({ text }) => {
  return (
    <div className="w-full text-[16px] xs:leading-loose sm:text-xl sm:leading-loose md:text-[24px] md:leading-relaxed lg:text-[28px] 2xl:text-[32px] 2xlg:text-[38px] leading-relaxed">
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
