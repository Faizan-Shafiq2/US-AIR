import React from "react";

interface HeadingContentProps {
  title: string;
  description?: string;
  bgColor?: string;
  textColor?: string;
  extraClasses?: string;
  id?: string; 
}

const HeadingContent: React.FC<HeadingContentProps> = ({
  title,
  description,
  bgColor = "bg-white",
  textColor = "text-black",
  extraClasses = "",
  id, 
}) => {
  return (
    <div id={id} className={`h-max py-8 md:py-10 ${bgColor} text-center ${extraClasses}`}>
      <h1 className={`text-xl md:text-3xl font-normal ${textColor}`}>{title}</h1>
      <p className={`max-w-[1000px] mx-auto mt-4 px-8 md:px-28 2xl:text-3xl lg:text-xl md:text-lg text-gray-400 font-normal`}>
        {description}
      </p>
    </div>
  );
};

export default HeadingContent;
