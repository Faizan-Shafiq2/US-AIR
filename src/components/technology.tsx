'use client'
import React, { useState } from "react";
// import ImageCard from "@/components/shared/image-card";
import CommercialApplicationsSlider from "@/components/shared/application-slider";
import Accordion from "@/components/shared/accordion";
import HeadingContent from "@/components/shared/heading-content";
import GradientText from "@/components/shared/gradient-text";
import ContactDetailsSection from "@/components/shared/contact-details-section";
import { accordionData } from "@/data/accordion-data";
import { stellaFeaturesData } from "@/data/accordion-data";
import { backgroundcardsData, technologyContent } from "@/data/card-data";
import { defenseCapabilitiesData } from "@/data/card-data";


const Technology = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleTitleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className=" bg-black">
      <div className="rounded-t-3xl max-h-[100vh] px-4 md:pb-20 md:px-16 bg-white text-center">
        <HeadingContent title="OUR TECHNOLOGY" />

        <div className=" flex flex-col md:flex-row justify-center items-center lg:gap-20 gap-10">
          <div className="flex flex-col justify-center gap-4 text-sm max-w-[300px]">
            {technologyContent.map((card, index) => (
              <button key={index} onClick={() => handleTitleClick(index)}>
                <h2 className={`text-left ${activeIndex === index ? "font-semibold text-center bg-black border-black border-[1px] text-white p-2 rounded-lg" : "p-2 text-center text-[#888888] rounded-lg bg-[#F9F9F9] border-[1px] border-gray-500"}`}>{card.title}</h2>
              </button>
            ))}
          </div>
          <div className="h-[50%] flex flex-col items-start justify-center text-start md:text-lg text-sm max-h-[600px] max-w-[500px] p-4 bg-[#F9F9F9] rounded-lg">
            {technologyContent.map((card, index) => (
              <div key={index} className={`${activeIndex === index ? " block" : "hidden"}`}>
                <h3>{card.description}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white lg:pt-0 md:pt-10 sm:pt-10 pt-10">
        <HeadingContent
          title="COMMERCIAL APPLICATIONS"
          description="USAT is revolutionizing the commercial sector with our Luneburg lens technology, offering unparalleled connectivity and efficiency."
          bgColor="bg-white"
          textColor="text-black"
          extraClasses=""
        />
      <div>
        <CommercialApplicationsSlider 
        cards={backgroundcardsData}
        backgroundImage="/assets/commercial_application.png"
        />
        </div>
        <div className="h-max bg-white p-12">
          <h1 className="text-2xl font-normal text-center pb-4">
            COMMERCIAL USE CASES & SOCIETAL IMPACT
          </h1>
          <Accordion data={accordionData} />
        </div>
        <div className="pb-12 px-12 bg-white">
          <ContactDetailsSection
            text1="DISCOVER HOW USAT CAN TRANSFORM YOUR COMMERCIAL COMMUNICATION NEEDS."
            text2="CONTACT US AT"
            link="INFO@USAIRTECHCORP.COM"
          />
        </div>
        <HeadingContent
          title="DEFENSE CAPABILITIES"
          description="USAT's technologies will advance defense activities that rely on satellite communications and antemma technologies. Our advanced antenna technology, STELLA ®, offers "
          bgColor="bg-white"
          textColor="text-black"
          extraClasses=""
        />
      </div>

      <div>
        <CommercialApplicationsSlider 
        cards={defenseCapabilitiesData} 
        backgroundImage="/assets/defense_capabilities.png"
        />
      </div>

      <div className="h-max bg-white px-12 py-20">
        <h1 className="text-2xl font-normal text-center pb-4">
          STELLA <sup className="text-2xl">®</sup> FEATURES
        </h1>
        <Accordion data={stellaFeaturesData} />
      </div>

      <div className="h-max bg-white grid grid-cols-1  sm:grid-cols-2 place-items-center sm:px-12 sm:pt-16">
        <h1 className="text-xl md:text-5xl mx-auto flex justify-center items-center p-4">
          CUBESAT TECHNOLOGY
        </h1>
        <div className="px-4">
          <GradientText text="Our CubeSat technology replaces current satellite technology with energy-efficient production and operation." />
        </div>
      </div>

      <div className="p-12 bg-white">
        <ContactDetailsSection
          text1="To discuss partnership opportunities,"
          text2="please contact us at "
          link="info@usairtechcorp.com"
        />
      </div>
    </div>
  );
};

export default Technology;
