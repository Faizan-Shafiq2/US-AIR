"use client";
import React, { useState } from "react";
// import ImageCard from "@/components/shared/image-card";
import CommercialApplicationsSlider from "@/components/shared/application-slider";
import Accordion from "@/components/shared/accordion";
import HeadingContent from "@/components/shared/heading-content";
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
    <div className="w-full">
      <div className="px-4 md:px-16 py-10 bg-white text-center">
        <HeadingContent title="OUR TECHNOLOGY" id="our-technology" />

        <div className="h-[80%] flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 lg:gap-20 w-full max-w-screen-xl mx-auto">
          <div className="flex flex-col justify-center gap-4 text-sm max-w-[400px]">
            {technologyContent.map((card, index) => (
              <button key={index} onClick={() => handleTitleClick(index)}>
                <h2
                  className={`text-left ${activeIndex === index ? "font-semibold text-center md:text-base text-xs bg-[#e1e1e1] text-black p-2 rounded-lg" : "md:text-base text-xs text-center bg-black text-white p-2 rounded-lg"}`}
                >
                  {card.title}
                </h2>
              </button>
            ))}
          </div>
          <div className="flex flex-col items-start justify-center text-start md:text-lg text-sm h-[370px] max-w-[500px] p-4 bg-[#F9F9F9] rounded-lg">
            {technologyContent.map((card, index) => (
              <div
                key={index}
                className={`${activeIndex === index ? " block" : "hidden"}`}
              >
                <h3>{card.description}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white ">
        <HeadingContent
          title="COMMERCIAL APPLICATIONS"
          description="USAT is revolutionizing the commercial sector with our Luneburg lens technology, offering unparalleled connectivity and efficiency."
          bgColor="bg-white"
          textColor="text-black"
          extraClasses=""
          id="commercial-applications"
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
          description="USAT's technologies will advance defense activities that rely on satellite communications and antemma technologies. Our advanced antenna technology, STELLA ®, offers: "
          bgColor="bg-white"
          textColor="text-black"
          extraClasses=""
          id="defense-capabilities"
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
          STELLA <span className="text-3xl -ml-2">®</span> FEATURES
        </h1>
        <Accordion data={stellaFeaturesData} />
      </div>

      <div className="h-max bg-white grid grid-cols-1 sm:grid-cols-2 place-items-center sm:px-12 sm:pt-16">
        <h1 className="text-xl md:text-5xl mx-auto flex justify-center items-center p-4">
          CUBESAT TECHNOLOGY
        </h1>
        <div className="px-4">
          <p className=" bg-gradient-to-b from-[#939393] to-[#000000] bg-clip-text text-transparent w-full xs:leading-loose sm:leading-loose md:text-xl md:leading-relaxed lg:text-3xl 2xl:text-4xl leading-relaxed">
            Our CubeSat technology replaces current satellite technology with
            energy-efficient production and operation.
          </p>
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
