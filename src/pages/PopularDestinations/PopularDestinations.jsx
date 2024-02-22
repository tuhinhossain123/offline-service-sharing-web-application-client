import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaLocationDot } from "react-icons/fa6";

import p1 from "../../assets/populer1.jpg";
import p2 from "../../assets/populer2.jpg";
import p3 from "../../assets/populer3.jpg";
import p4 from "../../assets/populer4.jpg";
import p5 from "../../assets/populer5.jpg";
import p6 from "../../assets/populer6.jpg";

const PopularDestinations = () => {
  return (
    <div className="my-10">
      <h2 className="text-4xl md:text-4xl text-center px-6 md:px-10 pb-8 md:-pb-0 md:text-5xl text-[#5f988f] font-semibold">
        Popular Destinations
      </h2>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-16"
      >
        <SwiperSlide className="">
          <img src={p1} alt="" className="h-[10rem] md:h-full"/>
          <h3 className="text-center -mt-16  text-white font-semibold text-sm md:text-xl   uppercase flex items-center justify-center gap-2">
            <FaLocationDot className="hidden md:block"/>
            London
          </h3>
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={p2} alt="" className="h-[10rem] md:h-full"/>
          <h3 className="text-center -mt-16 text-white font-semibold text-sm md:text-xl  uppercase flex items-center justify-center gap-2">
            <FaLocationDot className="hidden md:block"/>
            Bankok
          </h3>
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={p3} alt="" className="h-[10rem] md:h-full"/>
          <h3 className="text-center -mt-16  text-white font-semibold text-sm md:text-xl  uppercase flex items-center justify-center gap-2">
            <FaLocationDot className="hidden md:block"/>
            Canada
          </h3>
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={p4} alt="" className="h-[10rem] md:h-full"/>
          <h3 className="text-center -mt-16  text-white font-semibold text-sm md:text-xl  uppercase flex items-center justify-center gap-2">
            <FaLocationDot className="hidden md:block"/>
            France
          </h3>
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={p5} alt="" className="h-[10rem] md:h-full"/>
          <h3 className="text-center -mt-16  text-white font-semibold text-sm md:text-xl  uppercase flex items-center justify-center gap-2">
            <FaLocationDot className="hidden md:block"/>
            Italy
          </h3>
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={p6} alt="" className="h-[10rem] md:h-full"/>
          <h3 className="text-center -mt-16  text-white font-semibold text-sm md:text-xl  uppercase flex items-center justify-center gap-2">
            <FaLocationDot className="hidden md:block"/>
            morokko
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularDestinations;
