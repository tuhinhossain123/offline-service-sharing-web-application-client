import img1 from "../../assets/Untitled design (37).png";
import img2 from "../../assets/Untitled design (39).png";
import img3 from "../../assets/Untitled design (40).png";

const MeetTeam = () => {
  return (
    <div className="my-16">
      <h2 className="text-4xl md:px-10 text-center pb-10 md:-pb-0 md:text-5xl text-[#3e7172] font-semibold">
        Meet Our Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16">
        <div className="group shadow-xl  relative  gap-4  ">
          <div className="">
            <img src={img1} alt="" className="rounded " />
          </div>
          <div className="absolute bottom-0 left-0 hidden bg-opacity-50 group-hover:flex items-center justify-end flex-col bg-black w-full h-full pb-4">
            <h2 className="text-3xl font-semibold text-white">
              {" "}
              Tuhin Hossain
            </h2>
            <div>
              <h2 className="text-xl text-semibold text-white">CEO</h2>
            </div>
          </div>
        </div>
        <div className="group shadow-xl  relative  gap-4 ">
          <div className="">
            <img src={img2} alt="" className="rounded w-full " />
          </div>
          <div className=" absolute bottom-0 left-0 hidden bg-opacity-50 group-hover:flex items-center justify-end flex-col bg-black w-full h-full pb-4">
            <h2 className="text-3xl font-semibold text-white">
              {" "}
              Sojib Hossain
            </h2>
            <div>
              <h2 className="text-xl text-semibold text-white">Marketing</h2>
            </div>
          </div>
        </div>
        <div className="group shadow-xl relative  gap-4 ">
          <div className="">
            <img src={img3} alt="" className="rounded w-full " />
          </div>
          <div className=" absolute bottom-0 left-0 hidden bg-opacity-50 group-hover:flex items-center justify-end flex-col bg-black w-full h-full pb-4">
            <h2 className="text-3xl font-semibold text-white">
              {" "}
              Rashedul Islam
            </h2>
            <div>
              <h2 className="text-xl text-semibold text-white">Design</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
