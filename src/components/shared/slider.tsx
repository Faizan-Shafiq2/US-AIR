"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { slides } from "@/data/card-data";
import Link from "next/link";

const Slider = () => {
  return (
    <div className="w-full p-4 custom-styles">
      <Swiper
        spaceBetween={4}
        slidesPerView={3}
        pagination={{ clickable: true }}
        loop
        breakpoints={{
          768: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          391: { slidesPerView: 2 },
          200: { slidesPerView: 1 },
        }}
        className="custom-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center overflow-hidden relative"
          >
            <Link href={slide.url} className="w-full h-full">
              <div
                className="bg-cover bg-center hover:opacity-50 h-[300px] sm:h-[280px] md:h-[300px] lg:h-[360px] w-full flex items-end justify-start relative"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="bg-opacity-60 text-white text-start xs:text-sm sm:text-base md:text-xl lg:text-2xl px-4 md:px-6 lg:px-8 py-2 mb-4 rounded-md relative z-10"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                ></div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
