import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "../index.css"; 

export default function Slider() {
  return (
    <>
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay, EffectFade]}
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={1000}
        >
          <SwiperSlide
            className="bg-cover bg-center w-full h-[85vh]"
            style={{ backgroundImage: "url('/image/asset 1.jpeg')" }}
          ></SwiperSlide>
          <SwiperSlide
            className="bg-cover bg-center w-full h-[85vh]"
            style={{ backgroundImage: "url('/image/asset 2.jpeg')" }}
          ></SwiperSlide>
          <SwiperSlide
            className="bg-cover bg-center w-full h-[85vh]"
            style={{ backgroundImage: "url('/image/asset 3.jpeg')" }}
          ></SwiperSlide>
        </Swiper>
    </>
  );
}
