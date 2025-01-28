"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  description?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  title,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer image-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={src} alt={alt} width={100} height={100} className="image" />
      <div
        className={`absolute inset-0 flex items-end justify-start px-6 py-10 title transition-opacity duration-200 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        {title}
      </div>

      <div className={` ${isHovered ? "details" : ""}`}>
        {isHovered && description && (
          <div
            data-aos="fade-up"
            className={`details ${isHovered ? "hovered" : ""}`}
          >
            <h2 className={`title ${isHovered ? "title-hovered" : ""}`}>
              {title}
            </h2>
            <p className="description md:text-sm lg:text-md">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
