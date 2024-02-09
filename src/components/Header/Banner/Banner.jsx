// import { useTypewriter } from "react-simple-typewriter";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import banner1 from "../../../assets/banner1.png";
import banner2 from "../../../assets/banner2.png";
import banner3 from "../../../assets/banner3.png";
import banner4 from "../../../assets/banner4.png";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 7000,
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
        <div className=" relative w-full h-full">
          <img src={banner1} className="w-full" />
          <div className="absolute flex items-center gap-3 left-0 top-0 bottom-0 bg-gradient-to-r from-[#0D0907] 0.00] to-[21, 21, 21, 0.00]  h-full">
            <div className="text-white  md:w-3/4 pl-16 md:pl-24">
              <h2 className=" text-2xl md:text-4xl font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet, quidem!
              </h2>

              <div className="pt-4">
                <button className="btn  bg-[#3e7172] border-none text-white  mr-3">
                  Book Now
                </button>
                <button className="btn btn-outline text-white">
                  +888 0156356376
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" relative w-full h-full">
          <img src={banner2} className="w-full" />
          <div className="absolute flex items-center gap-3 left-0 top-0 bottom-0 bg-gradient-to-r from-[#0D0907] 0.00] to-[21, 21, 21, 0.00]  h-full">
            <div className="text-white  md:w-3/4 pl-16 md:pl-24">
              <h2 className=" text-2xl md:text-4xl font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet, quidem!
              </h2>

              <div className="pt-4">
                <button className="btn  bg-[#3e7172] border-none text-white  mr-3">
                  Book Now
                </button>
                <button className="btn btn-outline text-white">
                  +888 0156356376
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" relative w-full h-full">
          <img src={banner3} className="w-full" />
          <div className="absolute flex items-center gap-3 left-0 top-0 bottom-0 bg-gradient-to-r from-[#0D0907] 0.00] to-[21, 21, 21, 0.00]  h-full">
            <div className="text-white  md:w-3/4 pl-16 md:pl-24">
              <h2 className=" text-2xl md:text-4xl font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet, quidem!
              </h2>

              <div className="pt-4">
                <button className="btn  bg-[#3e7172] border-none text-white  mr-3">
                  Book Now
                </button>
                <button className="btn btn-outline text-white">
                  +888 0156356376
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" relative w-full h-full">
          <img src={banner4} className="w-full" />
          <div className="absolute flex items-center gap-3 left-0 top-0 bottom-0 bg-gradient-to-r from-[#0D0907] 0.00] to-[21, 21, 21, 0.00]  h-full">
            <div className="text-white  md:w-3/4 pl-16 md:pl-24">
              <h2 className=" text-2xl md:text-4xl font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet, quidem!
              </h2>

              <div className="pt-4">
                <button className="btn  bg-[#3e7172] border-none text-white  mr-3">
                  Book Now
                </button>
                <button className="btn btn-outline text-white">
                  +888 0156356376
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Banner;
