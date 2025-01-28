"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

interface CardData {
  title?: string;
  paragraph?: string;
}

interface BackgroundImageCardProps {
  cards: CardData[];
}

const BackgroundImageCard: React.FC<BackgroundImageCardProps> = ({ cards }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={`bg-cover bg-center`}
      style={{
        backgroundImage: "url('/assets/satellite-with-planet-earth.svg')",
      }}
    >
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        loop
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          200: { slidesPerView: 1 },
        }}
        className="h-[70vh] custom-swiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className=" h-full flex flex-col justify-end items-start border border-white">
              <div
                className={`h-[140px] pt-4  slider-details ${
                  hoveredIndex === index ? "hovered h-[180px]" : ""
                }`}
              >
                <h1
                  className={`slider-title ${
                    hoveredIndex === index ? "hidden" : ""
                  } px-6`}
                >
                  {card.title ? (
                    card.title
                  ) : (
                    <span className="text-[15px] text-justify">{card.paragraph}</span>
                  )}
                </h1>
                {hoveredIndex === index && card.paragraph && (
                  <div className="h-[180px] pt-4 bg-white" data-aos="fade-up">
                    <h1
                      className={`slider-title ${
                        hoveredIndex === index ? "slider-title-hovered" : ""
                      } px-6`}
                    >
                      {card.title}
                    </h1>
                    <p className="slider-description px-6 text-justify" data-aos="fade-up">
                      {card.paragraph}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BackgroundImageCard;
