import React from "react";
import GradientText from "@/components/shared/gradient-text";
import Slider from "@/components/shared/slider";

export const metadata = {
  title: "US Air Tech",
  description: "Connecting the globe with groundbreaking satellite communication technology.",
};

export default function Home() {
  return (
    <div className=" bg-black">
      <div className="rounded-t-3xl  bg-white text-left">
        <div
          className="h-screen flex justify-center items-center px-10  sm:ml-20 md:ml-60 text-justify"
          data-aos-duration="6000"
        >
          <GradientText text="Over 3 billion people lack reliable and affordable internet and cellphone access. Satellite communication can solve the current flaws of cellphone and internet services, however, current satellite communication solutions require over 40,000 satellites and large operational costs to connect the globe." />
        </div>
      </div>
      <div
        className="h-screen bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: "url('/assets/background-image.svg')" }}
      >
        <div className="flex justify-center items-center px-10 sm:px-24 md:px-32  text-white bg-opacity-20 overflow-hidden">
          <p
            className="text-[16px] xs:leading-loose sm:text-xl sm:leading-loose md:text-[24px] md:leading-relaxed lg:text-[28px] leading-relaxed text-justify"
            data-aos="fade-up"
            data-aos-duration="2000"
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
      <div className="bg-white h-max">
        <Slider />
      </div>
    </div>
  );
}
