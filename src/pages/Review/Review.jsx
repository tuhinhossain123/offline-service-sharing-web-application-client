import banner1 from "../../assets/Untitled design (37).png";
import banner2 from "../../assets/Untitled design (39).png";
import banner3 from "../../assets/Untitled design (40).png";
import { IoStar } from "react-icons/io5";

const Review = () => {
  return (
    <div className="my-24">
      <h2 className="text-4xl md:px-10 text-center pb-6 md:-pb-0 md:text-5xl text-[#3e7172] font-semibold ">
        Testimonial
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 md:px-10 my-14 space-y-16 md:space-y-0">
        <div className="">
          <div className="avatar absolute -mt-16 ml-6 lg:ml-12  pb-8">
            <div className="w-28 rounded-full">
              <img src={banner2} />
            </div>
          </div>
          <div className="bg-gray-100 pt-20 px-6 lg:px-12 pb-8 pointer shadow-md hover:shadow-2xl  rounded">
            <p className="text-lg text-gray-500 font-medium">
              Services Include Creating Immersive Experiences That Blend The
              Physical And Digital Worlds, Using The Latest Technologies And
              Best Practices.
            </p>
            <div className="divider"></div>
            <div className="lg:flex justify-between items-center gap-8">
              <div>
                <h2 className="text-2xl font-bold pb-1">Tuhin Hossain</h2>
                <h2 className="text-gray-500 font-medium">Project manager</h2>
              </div>
              <div className="flex items-center gap-2 text-2xl pt-3 lg:pt-0 text-[#5f988f]">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="avatar absolute -mt-16 ml-6 lg:ml-12  pb-8">
            <div className="w-28 rounded-full">
              <img src={banner1} />
            </div>
          </div>
          <div className="bg-gray-100 pt-20 px-6 lg:px-12 pb-8 pointer shadow-md hover:shadow-2xl  rounded">
            <p className="text-lg text-gray-500 font-medium">
              Services Include Creating Immersive Experiences That Blend The
              Physical And Digital Worlds, Using The Latest Technologies And
              Best Practices.
            </p>
            <div className="divider"></div>
            <div className="lg:flex justify-between items-center gap-8">
              <div>
                <h2 className="text-2xl font-bold pb-1">Tuhin Hossain</h2>
                <h2 className="text-gray-500 font-medium">Project manager</h2>
              </div>
              <div className="flex items-center gap-2 text-2xl pt-3 lg:pt-0 text-[#5f988f]">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </div>
            </div>
          </div>
        </div>
        <div className="md:pt-14 lg:pt-0">
          <div className="avatar absolute -mt-16 ml-6 lg:ml-12  pb-8">
            <div className="w-28 rounded-full">
              <img src={banner3} />
            </div>
          </div>
          <div className="bg-gray-100 pt-20 px-6 lg:px-12 pb-8 pointer shadow-md hover:shadow-2xl  rounded">
            <p className="text-lg text-gray-500 font-medium">
              Services Include Creating Immersive Experiences That Blend The
              Physical And Digital Worlds, Using The Latest Technologies And
              Best Practices.
            </p>
            <div className="divider"></div>
            <div className="lg:flex justify-between items-center gap-8">
              <div>
                <h2 className="text-2xl font-bold pb-1">Tuhin Hossain</h2>
                <h2 className="text-gray-500 font-medium">Project manager</h2>
              </div>
              <div className="flex items-center gap-2 text-2xl pt-3 lg:pt-0 text-[#5f988f]">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
