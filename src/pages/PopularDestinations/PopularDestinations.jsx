import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaLocationDot } from "react-icons/fa6";

import p1 from "../../assets/populer1.jpg";
const PopularDestinations = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={p1} alt="" />

            <div className="absolute flex justfy-center items-end  top-0 left-0 w-full h-full pl-[3rem]">
              <h1 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
              <FaLocationDot />
                London,England
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularDestinations;
