import Image from "next/image";

const Careers = () => {
  return (
    <>
      <div className="max-w-screen h-full flex flex-col justify-center items-center  p-10 gap-16">
        <div className="w-full sm:[50%] md:w-[45%] lg:ml-20 text-lg lg:text-xl 2xl:text-3xl">
          <p className="bg-gradient-to-b from-[#c9c9c9] to-[#000000] bg-clip-text text-transparent">
            We are a team ignited by our mission and committed to our cause.
            Come join us and be part of a dynamic and innovative environment.
          </p>
        </div>
        <hr className="w-[90%] border-[#D9D9D9]" />
        <div className="flex flex-col items-center justify-center gap-4 pb-5">
          <h1 className="text-2xl text-bold">Opportunities</h1>
          <p className="text-center">
            See our open positions here or drop us a note at
          </p>
          <div className="flex gap-3">
            <div className="px-3 py-3 w-[40px] rounded-full bg-[#6EADF1]">
              <Image
                src={"/linkedIn.svg"}
                alt="US AIR TECH"
                width={200}
                height={200}
              />
            </div>
            <div className="px-3 py-4 w-[40px] rounded-full bg-[#6EADF1]">
              <Image
                src={"/mail.svg"}
                alt="US AIR TECH"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
