"use client";
import Card from "../shared/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { RelatedPostProps } from "@/types/index"; // Import statement added

const RelatedPost = ({ blogPost }: RelatedPostProps) => {
  return (
    <div className="relative">
      <h1 className="uppercase md:text-2xl font-semibold py-6">
        Related Posts
      </h1>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={2}
        slidesPerView={3}
        autoplay={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          200: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          640: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          1440: {
            slidesPerView: 3,
            centeredSlides: false,
          },
        }}
      >
        {blogPost?.map((items, index) => (
          <SwiperSlide key={index} className="pr-4">
            <Link href={`/news/${items.slug.current}`}>
              <Card
                imageUrl={urlFor(items?.imageUrl).url()}
                date={items?.time}
                title={items?.title}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedPost;
