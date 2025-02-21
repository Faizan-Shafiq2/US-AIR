import Link from 'next/link';
import React from 'react'

interface GradientTextProps {
    text1: string;
    text2: string;
    link: string;
  }

const ContactDetailsSection: React.FC<GradientTextProps> = ({ text1, text2, link }) => {
  return (
    <div
    className="h-[25vh] flex flex-col justify-center items-center gap-2 rounded-xl m-auto"
    style={{
      backgroundImage: "url('/assets/galaxy-stars-background-img.svg')",
    }}
  >
    <h1 className="text-white uppercase text-[10px] sm:text-[12px] md:text-lg">
      {text1}
    </h1>
    <h1 className="text-white uppercase text-[10px] sm:text-[12px] md:text-lg">
      {text2} <Link href="mailto:info@usaitechcorp.com" className="uppercase text-blue-400">{link}</Link>
    </h1>
  </div>
  )
}
    

export default ContactDetailsSection
