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
      <div className="rounded-t-3xl bg-white text-left">
        <div
          className="h-max py-20 sm:py-16 md:py-24 flex justify-center items-center px-10 sm:px-24 md:px-32 text-justify"
          data-aos-duration="6000"
        >
          <GradientText text="Over 3 billion people lack reliable and affordable internet and cellphone access. Satellite communication can solve the current flaws of cellphone and internet services, however, current satellite communication solutions require over 40,000 satellites and large operational costs to connect the globe." />
        </div>
      </div>
      <div
        className="h-max py-20 sm:py-16 md:py-24 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: "url('/assets/background-image.svg')" }}
      >
        <div className="flex justify-center items-center px-10 sm:px-24 md:px-32  text-white bg-opacity-20 overflow-hidden">
          <p
            className="xs:leading-loose sm:leading-loose md:text-lg md:leading-relaxed lg:text-xl leading-relaxed 2xl:text-3xl text-justify"
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
      <div className="bg-white h-max py-4 ">
        <Slider />
      </div>
    </div>
  );
}
