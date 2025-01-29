import Image from "next/image";
import React from "react";

const OurMission = () => {
  return (
    <>
      <div className="h-full bg-black flex flex-col justify-center items-center my-10 py-16 gap-20">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-4 gap-8 w-full">
          <div className="relative w-full md:w-1/3 flex justify-center">
          <h1 className="text-white lg:text-6xl md:text-5xl text-3xl">OUR <br /> MISSION</h1>
            <Image
              src={"/global.svg"}
              alt="US AIR TECH"
              width={320}
              height={320}
              className=" lg:-ml-52 md:-ml-40 sm:-ml-24 -ml-20 sm:w-[40%] w-[50%] md:w-[100%] lg:w-[80%] pt-4"
            />
          </div>

          <div className="w-full md:w-1/2 max-w-[700px]  px-10">
            <p className="text-white 2xl:text-3xl lg:text-xl md:text-lg">
              USAT seeks to promote human interconnectedness, development in all
              human activity ecosystems, and wellbeing through advanced
              satellite communication.
            </p>
          </div>
        </div>
        </div>
    </>
  );
};

export default OurMission;
