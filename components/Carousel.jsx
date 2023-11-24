"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carousel = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
      }}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="mb-16 md:mt-12 mt-8 flex md:h-72 h-80 flex-col items-center rounded-sm bg-gray-200 p-4 dark:bg-gray-700">
            <Image
              src={"/logo-(black)-transparan.png"}
              alt="logo"
              width={50}
              height={50}
            />
            <h1 className="mt-4 text-xl font-semibold text-gray-700 dark:text-gray-50">
              {slide.title}
            </h1>
            <hr className="mt-1 w-full border-black text-gray-700 dark:text-gray-50 " />
            <p className="mt-4 text-sm text-gray-700 dark:text-gray-50">
              {slide.description}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
