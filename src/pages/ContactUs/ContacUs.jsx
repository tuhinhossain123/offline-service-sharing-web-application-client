import ContactBanner from "../../components/SheardBanner/ContactBanner/ContactBanner";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import MeetTeam from "../MeetTeam/MeetTeam";

const ContacUs = () => {
  return (
    <div className="border-2">
      <ContactBanner></ContactBanner>
      <MeetTeam></MeetTeam>
      <div className="w-full md:w-[70%] p-4 lg:p-8 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between  w-full border-2 border-[#3e7172] rounded-lg ">
          <div className="pt-6 lg:py-14 pl-8 flex flex-col justify-center space-y-6 lg:w-[40%]">
            <h2 className="flex items-center  gap-2">
              <MdOutlineEmail className="text-4xl text-[#3e7172]" />{" "}
              <span className="text-xl font-medium text-gray-700">
                {" "}
                tourandguid@gmail.com
              </span>
            </h2>
            <h2 className="flex items-center  gap-2">
              <CiLocationOn className="text-4xl text-[#3e7172]" />{" "}
              <span className="text-xl font-medium text-gray-700">
                {" "}
                123 Ave, Dhaka City
              </span>
            </h2>
            <h2 className="flex items-center  gap-2">
              <FaPhone className="text-4xl text-[#3e7172]" />{" "}
              <span className="text-xl font-medium text-gray-700">
                +99 (0) 101 0000 777
              </span>
            </h2>
          </div>
          <div className="card-body  lg:w-[60%]">
            <h2 className="text-5xl font-semibold pb-4 md:pb-8 text-[#3e7172]">
              Get In Touch
            </h2>
            <form>
              <div className="flex flex-col lg:flex-row items-center lg:gap-10">
                <div className="form-control w-full">
                  <input
                    type="name"
                    placeholder="Your Name"
                    name="from_name"
                    required
                    className="input focus:border-0 focus-within:outline-none border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-[#3e7172] rounded-none px-1 w-full mb-2 md:mb-0"
                  />
                </div>
                <div className="form-control w-full">
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="from_email"
                    required
                    className="input focus:border-0 focus-within:outline-none border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-[#3e7172] rounded-none px-1 w-full mb-2 md:mb-0"
                  />
                </div>
              </div>
              <div className="form-control mx-auto text-center mb-2 ">
                <textarea
                  id="6"
                  type="text"
                  name="description"
                  placeholder="What's on your mind..."
                  required
                  className="textarea textarea-lg focus:border-0 focus-within:outline-none border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-[#3e7172] rounded-none px-1 w-full"
                />
              </div>

              <div className="form-control mt-3">
                <button
                  type="submit"
                  className="btn bg-[#3e7172] btn-block border-0 hover:bg-[#3e7172] text-white text-lg shadow-lg shadow-primary/30 rounded-sm mt-6"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.06396725783!2d90.25487754014735!3d23.780753031632905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2str!4v1708187412497!5m2!1sen!2str"
          width="100%"
          height="500"
          loading="lazy"
          // className="w-full md:h-[80vh]"
        ></iframe>
      </div>
    </div>
  );
};

export default ContacUs;
