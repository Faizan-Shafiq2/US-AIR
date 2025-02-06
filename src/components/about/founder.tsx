import Image from "next/image";
import React from "react";

const Founder = () => {
  return (
    <>
      <div>
        <div className="max-w-screen h-full flex flex-col justify-center items-center md:px-10 px-4">
          <div className="flex flex-col md:flex-row items-center md:gap-16 gap-8 w-full">
            <div className="w-full flex flex-col gap-4 lg:w-[60%] md:w-[75%]">
            <h1 className="font-bold lg:text-3xl ">About our Founder</h1>
              <p className="text-gray-800 2xl:text-3xl lg:text-xl md:text-lg">
                Dr. Gbele has a PhD in Electrical & Computer Engineering and a Master’s in
                Electrical Engineering with a specialization in Microwave
                Engineering and Optical Sciences (NIR) from The University of
                Arizona. He has deep experience with laser devices, such as
                Vertical External Cavity Surface Emitting Laser (VECSEL/VCSEL),
                microwave antenna design and fabrication, microwave passive and
                active circuit components, and cleanroom nano-structure
                development. He has joint patents and leads ongoing research in
                advanced antenna technologies.
              </p>
            </div>
            <div className="relative w-full md:w-1/4 mx-auto flex flex-col items-center justify-center pt-8">
              <Image
                src={"/founder.svg"}
                alt="US AIR TECH"
                width={320}
                height={320}
                className="w-[45%] sm:w-[30%] md:w-[90%] lg:w-[80%] pb-3"
              />
              <h2 className="text-lg font-semibold">Dr. Patrick Gbele</h2>
              <p className="text-sm">Founder and CEO</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founder;
