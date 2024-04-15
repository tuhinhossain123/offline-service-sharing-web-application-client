// import { useTypewriter } from "react-simple-typewriter";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import banner1 from "../../../assets/banner3.jpg";
import banner2 from "../../../assets/banner2.jpg";
import banner3 from "../../../assets/banner1.jpg";
import banner4 from "../../../assets/banner4.jpg";
import { Link } from "react-router-dom";

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
        <div className="relative w-full h-full">
          <img src={banner1} className="w-full h-[60vh] md:h-[90vh]" />
          <div className="absolute flex items-center gap-3 left-0 top-0 bottom-0 bg-gradient-to-r from-[#0D0907] 0.00] to-[21, 21, 21, 0.00]  h-full">
            <div className="text-white  md:w-3/4 pl-16 md:pl-24">
              <h2 className=" text-2xl md:text-4xl font-bold">
              Dive into the beauty of the Great Barrier Reef on our snorkeling adventure in Australia.
              </h2>

              <div className="pt-8">
                <Link to="/allServices" className="btn  bg-[#3e7172] hover:bg-[#3e7172] border-none text-white  mr-3">
                  Book Now
                </Link>
                <Link to="/contactUs" className="btn btn-outline hover:bg-black text-white">
                  Contact Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" relative w-full h-full">
          <img src={banner2} className="w-full h-[60vh] md:h-[90vh]" />
          <div className="absolute flex items-center gap-3 left-0 top-0 bottom-0 bg-gradient-to-r from-[#0D0907] 0.00] to-[21, 21, 21, 0.00]  h-full">
            <div className="text-white  md:w-3/4 pl-16 md:pl-24">
              <h2 className=" text-2xl md:text-5xl font-bold">
              Explore ancient ruins and vibrant markets on our cultural tour of Peru.
              </h2>

              <div className="pt-8">
                <Link to="/allServices" className="btn  bg-[#3e7172] hover:bg-[#3e7172] border-none text-white  mr-3">
                  Book Now
                </Link>
                <Link to="/contactUs" className="btn btn-outline  hover:bg-black text-white">
                  Contact Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" relative w-full h-full">
          <img src={banner3} className="w-full h-[60vh] md:h-[90vh]" />
          <div className="absolute flex items-center gap-3 left-0 top-0 bottom-0 bg-gradient-to-r from-[#0D0907] 0.00] to-[21, 21, 21, 0.00]  h-full">
            <div className="text-white  md:w-3/4 pl-16 md:pl-24">
              <h2 className=" text-2xl md:text-5xl font-bold">
              Embark on a thrilling safari to witness the Big Five in their natural habitat in Kenya.
              </h2>

              <div className="pt-8">
                <Link to="/allServices" className="btn  bg-[#3e7172] hover:bg-[#3e7172] border-none text-white  mr-3">
                  Book Now
                </Link>
                <Link to="/contactUs" className="btn btn-outline hover:bg-black text-white">
                  Contact Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" relative w-full h-full">
          <img src={banner4} className="w-full h-[60vh] md:h-[90vh]" />
          <div className="absolute flex items-center gap-3 left-0 top-0 bottom-0 bg-gradient-to-r from-[#0D0907] 0.00] to-[21, 21, 21, 0.00]  h-full">
            <div className="text-white  md:w-3/4 pl-16 md:pl-24">
              <h2 className=" text-2xl md:text-5xl font-bold">
              Discover the magic of the Northern Lights on our tour of Iceland.
              </h2>

              <div className="pt-8">
                <button className="btn  bg-[#3e7172] border-none text-white  mr-3">
                  Book Now
                </button>
                <button className="btn btn-outline text-white">
                  Contact Now
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
