import img1 from "../../assets/team1.png";
import img2 from "../../assets/team2.png";
import img3 from "../../assets/team3.png";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MeetTeam = () => {
  return (
    <div className="my-16">
      <h2 className="text-4xl md:px-10 text-center pb-10 md:-pb-0 md:text-5xl text-[#3e7172] font-semibold">
        Meet Our Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-16">
        <div className="group shadow-xl  relative  gap-4  ">
          <div className="">
            <img src={img1} alt="" className="rounded-xl" />
          </div>
          <div className="absolute bottom-0 left-0 hidden bg-opacity-50 group-hover:flex items-start justify-end flex-col bg-gray-900 w-full h-full pb-8 pl-8">
            <h2 className="text-3xl font-semibold text-white pb-1">
              {" "}
              Tuhin Hossain
            </h2>
            <div>
              <h2 className="text-xl text-center text-semibold text-white pb-5">
                CEO of Company
              </h2>
              <div className="flex items-center gap-6 text-2xl text-white font-bold">
                <Link>
                  <FaLinkedin />
                </Link>
                <Link>
                  {" "}
                  <IoLogoTwitter />
                </Link>
                <Link>
                  {" "}
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="group  shadow-xl  relative  gap-4 ">
          <div className="">
            <img src={img2} alt="" className="rounded-xl" />
          </div>
          <div className=" absolute bottom-0 left-0 hidden bg-opacity-50 group-hover:flex items-start justify-end flex-col bg-black w-full h-full pb-8 pl-8">
            <h2 className="text-3xl font-semibold text-white pb-1">
              {" "}
              Sojib Hossain
            </h2>
            <div>
              <h2 className="text-xl text-semibold text-white pb-5">
                Marketing Managment
              </h2>
              <div className="flex items-center gap-6 text-2xl text-white font-bold">
                <Link>
                  <FaLinkedin />
                </Link>
                <Link>
                  <IoLogoTwitter />
                </Link>
                <Link>
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="group shadow-xl relative  gap-4 ">
          <div className="">
            <img src={img3} alt="" className="rounded-xl " />
          </div>
          <div className=" absolute bottom-0 left-0 hidden bg-opacity-50 group-hover:flex items-start justify-end flex-col bg-black w-full h-full pb-8 pl-8">
            <h2 className="text-3xl font-semibold text-white pb-1">
              {" "}
              Rashedul Islam
            </h2>
            <div>
              <h2 className="text-xl text-semibold text-white pb-5">Project Manager</h2>
              <div className="flex items-center gap-6 text-2xl text-white font-bold">
                <Link>
                  {" "}
                  <FaLinkedin />
                </Link>
                <Link>
                  <IoLogoTwitter />
                </Link>
                <Link>
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
