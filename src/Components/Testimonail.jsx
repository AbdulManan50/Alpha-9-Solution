import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
export default function Testimonial() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img src="/public/image/asset 15.jpeg" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/public/image/asset 16.jpeg" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/public/image/asset 17.jpeg" alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/public/image/asset 18.jpeg" alt="Slide 4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/public/image/asset 19.jpeg" alt="Slide 5" />
      </SwiperSlide>
    </Swiper>
  );
}
