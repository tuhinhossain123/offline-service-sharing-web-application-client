import logo from "../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#3e7172] p-10 text-white">
      <div className="flex justify-between">
        <div className="space-y-4">
          <div className=" gap-5">
            <img
              src="https://demo.phlox.pro/agency-tour/wp-content/uploads/sites/333/2020/12/logo1.svg"
              alt=""
            />
          </div>
          <p className="text-xl">
            While the lovely valley teems with vapour <br /> around me, and the
            meridian sun strikes the <br /> upper surface of the impenetrable
            foliage of <br /> my trees.
          </p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-12">
            <Link>
              <FaFacebookF className="text-3xl" />
            </Link>
            <a>
              <FaLinkedinIn className="text-3xl" />
            </a>
            <a>
              <FaTelegramPlane className="text-3xl" />
            </a>
            <a>
              <FaInstagram className="text-3xl" />
            </a>
          </div>
          <div className="my-14 mr-9">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Email"
              className="bg-white text-black border-none px-3 py-4 w-3/5 rounded-l-lg pl-4"
            />
            <button className="px-3 py-4 font-bold rounded-none rounded-r-lg bg-red-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="mt-16 h-2" />
      <p className="py-4">© 2024 - All right reserved by ACME Industries Ltd</p>
    </div>
  );
};

export default Footer;
