import React from "react";
import ImageCard from "@/components/shared/image-card";
import CommercialApplicationsSlider from "@/components/shared/application-slider";
import Accordion from "@/components/shared/accordion";
import HeadingContent from "@/components/shared/heading-content";
import GradientText from "@/components/shared/gradient-text";
import ContactDetailsSection from "@/components/shared/contact-details-section";
import { accordionData } from "@/data/accordion-data";
import { stellaFeaturesData } from "@/data/accordion-data";
import { backgroundcardsData } from "@/data/card-data";
import { defenseCapabilitiesData } from "@/data/card-data";
import { imageCards } from "@/data/card-data";

export const metadata = {
  title: "Technology",
  description: "Discover the cutting-edge technology at US AIR TECH and how it is revolutionizing various sectors.",
};

const TechnologyPage = () => {
  return (
    <div className=" bg-black">
      <div className="rounded-t-3xl h-max px-4 md:pb-20 md:px-16 bg-white text-center">
        <HeadingContent title="OUR TECHNOLOGY" />

        <div className="md:px-2 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
          {imageCards.map((card, index) => (
            <ImageCard
              key={index}
              src={card.src}
              alt={card.alt}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      <div className="pt-4 bg-white">
        <HeadingContent
          title="COMMERCIAL APPLICATIONS"
          description="USAT is revolutionizing the commercial sector with our Luneburg lens technology, offering unparalleled connectivity and efficiency."
          bgColor="bg-white"
          textColor="text-black"
          extraClasses=""
        />
      </div>

      <div>
        <CommercialApplicationsSlider cards={backgroundcardsData} />
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
        <CommercialApplicationsSlider cards={defenseCapabilitiesData} />
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
          <GradientText
            text="Our CubeSat technology replaces current satellite technology with energy-efficient production and operation."
          />
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

export default TechnologyPage;
