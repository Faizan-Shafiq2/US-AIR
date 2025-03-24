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
  backgroundImage?: string;
}

const BackgroundImageCard: React.FC<BackgroundImageCardProps> = ({
  cards,
  backgroundImage,
}) => {

  return (
    <div className="relative bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
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
          >
            <div className="relative h-full flex flex-col justify-end items-start border border-white">
              <div className="h-[190px] flex flex-col gap-4 px-4 text-white">
                <h1 className="text-lg">{card.title}</h1>
                <p
                  dangerouslySetInnerHTML={{ __html: card.paragraph || "" }}
                ></p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BackgroundImageCard;
