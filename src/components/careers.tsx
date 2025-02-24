import Image from "next/image";
import Link from "next/link";

const Careers = () => {
  return (
    <>
      <div className="max-w-screen h-full flex flex-col justify-center items-center  p-10 gap-16">
        <div className="w-full sm:[50%] md:w-[45%] lg:ml-20 text-xl lg:text-3xl 2xl:text-4xl">
          <p className="bg-gradient-to-b from-[#939393] to-[#000000] bg-clip-text text-transparent">
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
            <div className="w-16 rounded-full bg-black">
            <Link href="https://www.linkedin.com/company/us-air-tech/">
              <Image
                src={"/linkedIn.svg"}
                alt="US AIR TECH"
                width={200}
                height={200}
              />
              </Link>
            </div>
            <div className="flex px-3 items-center justify-center w-16 rounded-full bg-black border-2 border-[#7f7f7f]">
              <Link href="mailto:info@usairtechcorp.com">
              <Image
                src={"/mail.svg"}
                alt="US AIR TECH"
                width={200}
                height={200}
              />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
