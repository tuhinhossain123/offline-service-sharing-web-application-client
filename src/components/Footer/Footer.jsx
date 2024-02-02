import logo from "../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#3e7172] p-10 text-white">
      <div className="flex items-center justify-between">
        <div>
          <img
            src="https://demo.phlox.pro/agency-tour/wp-content/uploads/sites/333/2020/12/logo1.svg"
            alt=""
          />
        </div>
        <div className="grid grid-flow-col gap-16">
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
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="my-4 w-full">
          <p className="text-xl">
            While the lovely valley teems with vapour <br /> around me, and the
            meridian sun strikes the <br /> upper surface of the impenetrable
            foliage of <br /> my trees.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter Your Email"
            className="bg-white text-black border-0 px-3 py-4 w-full md:w-1/2 rounded-l-lg "
          />
          <button className="px-3 py-4 font-bold rounded-none rounded-r-lg bg-black text-white">
            Subscribe
          </button>
        </div>
      </div>
      <hr className="mt-4 h-2" />
      <p className="py-4">© 2024 - All right reserved by ACME Industries Ltd</p>
    </div>
  );
};

export default Footer;
