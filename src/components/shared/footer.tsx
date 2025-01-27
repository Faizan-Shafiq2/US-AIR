import React from "react";
import Link from "next/link";
import { navLinks } from "@/data/navbar";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="h-auto md:ml-28 md:h-[calc(40vh-50px)]">
          <h2 className="text-lg font-normal mb-4">Pages</h2>
          <ul className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[10px] font-semibold hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="h-auto">
          <h2 className="text-lg font-normal mb-4 md:mb-6">Inquire</h2>
          <ul className="flex flex-col md:flex-row gap-4 lg:gap-12 xl:gap-12 2xl:gap-14 text-[10px] font-light">
            <li>520-308-5512</li>
            <li>
              University of Arizona - Science and Technology Park <br />
              9040 South Rita Road, Suite 1270 - Tucson, AZ 85747-9192 USA
            </li>
            <li>
              <a
                href="mailto:info@usaitechcorp.com"
                className="text-blue-400 hover:underline"
              >
                info@usaitechcorp.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="md:container lg:mx-auto mt-6 grid grid-cols-2 lap:place-items-center gap-4 px-4 lg:px-20">
        <div className="flex flex-row items-start justify-between gap-10 lg:justify-between ">
          <p className="text-[10px] lg:pl-12">
            © 2023 USA AI TECH. All Rights Reserved
          </p>
        </div>
        <div className="lg:text-center">
          {" "}
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border lg:border-white w-8 h-8 md:w-10 md:h-10 hover:bg-white hover:text-black"
          >
            <span className="block text-xs md:text-base">in</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
