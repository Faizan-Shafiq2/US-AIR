import React from "react";
import GradientText from "@/components/shared/gradient-text";
import Slider from "@/components/shared/slider";

export const metadata = {
  title: "US Air Tech",
  description:
    "Connecting the globe with groundbreaking satellite communication technology.",
};

const Home: React.FC = () => {
  return (
    <div>
        <div className="max-w-[2000px] mx-auto">
      <div className="flex justify-end items-end bg-white text-left">
        <div
          className="2xl:w-xlg lg:w-[900px] md:w-[700px] w-[500px] py-20 sm:py-16 md:py-20 px-10 sm:px-16 md:px-24 lg:px-32">
          <GradientText 
          text="Over 3 billion people lack reliable and affordable internet and cellphone access. Satellite communication can solve the current flaws of cellphone and internet services, however, current satellite communication solutions require over 30,000 satellites and large operational costs to connect the globe." />
        </div>
      </div>
      </div>
      <div
        className="py-20 sm:py-16 md:py-20 bg-cover bg-center max-w-[2000px] mx-auto"
        style={{ backgroundImage: "url('/assets/background-image.svg')" }}
      >
        <div className="flex 2xl:w-xlg lg:w-[900px] px-10 sm:px-24 md:px-32  text-white bg-opacity-20 overflow-hidden">
          <p
            className="text-base xs:leading-loose sm:leading-loose md:text-xl md:leading-relaxed lg:text-3xl leading-relaxed 2xl:text-4xl"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            Our groundbreaking, 3D-printed Luneburg lens is a game changer in
            satellite communication. Our technology connects all line-of-sight
            ground stations with orbiting satellites, requiring about 500
            satellites total to connect the globe. By facilitating the receipt
            of multiple satellite signals simultaneously, USAT drastically
            reduces expenses, environmental impact, and extends global
            connectivity far beyond current capabilities.
          </p>
        </div>
      </div>
      <div className="bg-white h-max py-4 max-w-[1900px] mx-auto">
        <Slider />
      </div>
    </div>
  );
}

export default Home;
