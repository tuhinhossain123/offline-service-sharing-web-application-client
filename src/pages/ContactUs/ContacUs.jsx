import ContactBanner from "../../components/SheardBanner/ContactBanner/ContactBanner";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import MeetTeam from "../MeetTeam/MeetTeam";

const ContacUs = () => {
  return (
    <div className="border-2">
      <ContactBanner></ContactBanner>
      <div className="w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.06396725783!2d90.25487754014735!3d23.780753031632905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2str!4v1708187412497!5m2!1sen!2str"
          width="100%"
          height="600"
          loading="lazy"
        ></iframe>
      </div>
      <div className="mt-10 px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="w-full lg:w-[60%]">
            <h2 className="text-5xl font-semibold pb-6 md:pb-8 text-[#3e7172]">
              Get In Touch
            </h2>
            <form className="">
              <div className="form-control  border-2 rounded-xl caret-black mb-4">
                <input
                  type="name"
                  placeholder="Your Name*"
                  name="from_name"
                  required
                  className="input bg-gray-100 text-lg w-full"
                />
              </div>
              <div className="form-control w-full border-2 rounded-xl caret-black mb-4">
                <input
                  type="name"
                  placeholder="Your Email*"
                  name="from_name"
                  required
                  className="input bg-gray-100 text-lg border-0"
                />
              </div>

              <div className="form-control w-full border-2 rounded-xl caret-black">
                <textarea
                  name=""
                  id=""
                  cols="10"
                  rows="10"
                  placeholder="Message*"
                  className="bg-gray-100 text-lg p-3 foucs:border-none"
                ></textarea>
              </div>

              <div className="mt-6 flex justify-center lg:justify-end">
                <button className="py-2 px-16 bg-[#3e7172] text-white font-bold text-lg rounded-md">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-[30%] grid gap-6">
            <div className="flex items-center gap-5 bg-gray-50 px-6 py-6 rounded shadow-md hover:shadow-2xl">
              <div>
                <FaLocationDot className="text-5xl text-[#3e7172]" />
              </div>
              <div className="">
                <h2 className="text-5xl text-gray-500 font-semibold pb-3">
                  Address
                </h2>
                <h2 className="text-xl text-gray-400 font-semibold pb-1">
                  123 Ave,Boshundhura
                </h2>
                <h2 className="text-xl text-gray-400 font-semibold pb-1">
                  Dhaka,Bangladesh
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-5 bg-gray-50 px-6 py-6 rounded shadow-md hover:shadow-2xl">
              <div>
                <MdOutlineEmail className="text-5xl text-[#3e7172]" />
              </div>
              <div className="">
                <h2 className="text-5xl text-gray-500 font-semibold pb-3">
                  Email
                </h2>
                <h2 className="text-xl text-gray-400 font-semibold pb-1">
                  abc@gmail.com
                </h2>
                <h2 className="text-xl text-gray-400 font-semibold pb-1">
                  support@gmail.com
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-5 bg-gray-50 px-6 py-6 rounded shadow-md hover:shadow-2xl">
              <div>
                <FaPhone className="text-5xl text-[#3e7172]" />
              </div>
              <div className="">
                <h2 className="text-5xl text-gray-500 font-semibold pb-3">
                  Phone
                </h2>
                <h2 className="text-xl text-gray-400 font-semibold pb-1">
                  +8801 835143562
                </h2>
                <h2 className="text-xl text-gray-400 font-semibold pb-1">
                  +8801 889573665
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MeetTeam></MeetTeam>
    </div>
  );
};

export default ContacUs;
