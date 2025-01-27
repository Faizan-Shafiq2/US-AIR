"use client";

import Image from "next/image";

const Introduction = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center p-10 gap-20">
      <div className="flex flex-col md:flex-row justify-center items-center lg:gap-4 gap-8 w-full">
        <div className="relative w-full md:w-1/4 flex justify-center">
          <Image
            src={"/introduction.svg"}
            alt="US AIR TECH"
            width={320}
            height={320}
            className="w-[40%] md:w-[100%] lg:w-[70%]"
          />
        </div>

        <div className="w-full md:w-2/3">
          <p className="text-justify text-gray-800 2xl:text-3xl lg:text-xl md:text-lg">
            <span className="font-bold lg:text-3xl ">USAT</span> was founded in
            2017 by Dr. Patrick Gbele, a visionary in electrical and optical
            research. Dr. Gbele helped develop the Luneburg lens while earning
            his PhD in Electrical & Computer Engineering from the University of
            Arizona. Today, USAT is powered by a small team of dedicated
            engineers and researchers who challenge the limits of existing
            technology. We’re an ethical, results-driven, R&D-focused team with
            a deliberate desire to explore the uncharted.
          </p>
        </div>
      </div>
      <hr className="w-[90%] border-[#D9D9D9]" />
    </div>
  );
};

export default Introduction;
