import logo from "../../assets/footer.svg"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#3e7172] px-8 md:px-16 my-10 text-white">
      <div>
        <div className="w-[8rem] md:w-[10rem]">
          <img
            src={logo}
            alt=""
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="pt-2 w-full md:w-2/4">
          <p className="text-xl tracking-wider">
            While the lovely valley teems with vapour  around me, and the
            meridian sun strikes the upper surface of the impenetrable
            foliage of my trees.
          </p>
        </div>
        <div className="w-full flex justify-end pb-8 pt-6">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter Your Email"
            className="bg-gray-100 text-black border-0 px-3 py-4 w-full md:w-1/2 rounded-l-lg "
          />
          <button className="px-3 py-4 font-bold rounded-none rounded-r-lg border border-white text-gray-300">
            Subscribe
          </button>
        </div>
      </div>
      <hr className="mt-4 h-2 hidden md:block" />
      <div className="flex flex-col-reverse md:flex-row justify-between pb-2 pt-4 md:gap-2">
        <p className="text-sm md:text-xl text-center">
          © 2024 - All right reserved by ACME Industries Ltd
        </p>
        <div className="grid grid-flow-col gap-10 md:gap-16 pb-8">
          <Link>
            <FaFacebookF className="text-3xl" />
          </Link>
          <Link>
            <FaLinkedinIn className="text-3xl" />
          </Link>
          <Link>
            <FaTelegramPlane className="text-3xl" />
          </Link>
          <Link>
            <FaInstagram className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
