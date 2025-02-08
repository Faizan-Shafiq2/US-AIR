import React from "react";

interface GradientTextProps {
  text: string;
}

const GradientText: React.FC<GradientTextProps> = ({ text }) => {
  return (
    <div className="w-full xs:leading-loose sm:leading-loose md:text-xl md:leading-relaxed lg:text-3xl 2xl:text-4xl leading-relaxed">
      <p
        className="bg-gradient-to-b from-[#939393] to-[#000000] bg-clip-text text-transparent"
        data-aos="fade-up"
        data-aos-duration="10000"
        data-aos-once="true"
      >
        {text}
      </p>
    </div>
  );
};

export default GradientText;
