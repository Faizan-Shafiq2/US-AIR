import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/navbar";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black max-w-[1900px] mx-auto text-white py-8 lg:px-4">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        <div className="h-auto flex flex-col items-start justify-start md:ml-8 md:h-[calc(40vh-50px)]">
          <h2 className="text-lg font-normal mb-4">Pages</h2>
          <div className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold hover:underline"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="h-auto flex flex-col items-start justify-start ">
          <h1 className="text-lg font-normal mb-4 md:mb-6">Inquire</h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-start gap-4 text-xs font-light">
            <h2>520-308-5512</h2>
            <p className="md:-ml-8">
              University of Arizona - Science and Technology Park 9040 South
              Rita Road, Suite 1270 - Tucson, AZ 85747-9192 USA
            </p>
            <Link
              href="mailto:info@usaitechcorp.com"
              className="text-blue-400 hover:underline"
            >
              info@usaitechcorp.com
            </Link>

            <div>
              <Link href="https://linkedin.com/">
                <Image
                  src={"/linkedIn.svg"}
                  alt={"Image"}
                  width={400}
                  height={200}
                  className="lg:w-[25%] md:w-[20%] w-[8%] lg:-mt-3 md:-mt-2 md:ml-10"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="md:container lg:mx-auto mt-6 grid md:place-items-start place-items-center gap-4 md:px-12">
        <div className="flex flex-row items-start justify-between gap-10 lg:justify-between ">
          <p className="text-xs">
            © 2023 USA AI TECH. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
