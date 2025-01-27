import React from "react";

interface HeadingContentProps {
  title: string;
  description?: string;
  bgColor?: string;
  textColor?: string;
  extraClasses?: string;
}
const HeadingContent: React.FC<HeadingContentProps> = ({
  title,
  description,
  bgColor = "bg-white",
  textColor = "text-black",
  extraClasses = "",
}) => {
  return (
    <div className={`h-max py-8 md:py-10 ${bgColor} text-center ${extraClasses}`}>
      <h1 className={`text-2xl md:text-4xl font-normal ${textColor}`}>{title}</h1>
      <p className={`mx-auto mt-4 px-8 md:px-28 text:md md:text-2xl text-gray-400 font-normal`}>
        {description}
      </p>
    </div>
  );
};

export default HeadingContent;
