import logo from "../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="text-white px-8 md:px-16 pt-10 bg-[#5f988f]">
      <div className="footer ">
      <nav>
        <h6 className="font-bold text-[1.5rem] text-white pb-4">Services</h6>
        <div className="flex flex-col space-y-3">
          <Link className="text-lg font-semibold">Branding</Link>
          <Link className="text-lg font-semibold">Design</Link>
          <Link className="text-lg font-semibold">Marketing</Link>
          <Link className="text-lg font-semibold">Advertisement</Link>
        </div>
      </nav>
      <nav>
        <h6 className="font-bold text-[1.5rem] text-white pb-4">Company</h6>
        <div className="flex flex-col space-y-3">
          <Link className="text-lg font-semibold">Special Service</Link>
          <Link className="text-lg font-semibold">Contact</Link>
          <Link className="text-lg font-semibold">Popular Destinations</Link>
          <Link className="text-lg font-semibold">Achievement</Link>
        </div>
      </nav>
      <nav>
        <h6 className="font-bold text-[1.5rem] text-white pb-6">Social</h6>
        <div className="grid grid-flow-col gap-6 md:gap-10">
          <Link>
            <FaFacebookF className="text-3xl " />
          </Link>
          <Link>
            <FaLinkedinIn className="text-3xl " />
          </Link>
          <Link>
            <FaTelegramPlane className="text-3xl " />
          </Link>
          <Link>
            <FaInstagram className="text-3xl " />
          </Link>
        </div>
      </nav>
     
    </div>
    <div>
    <p className="text-center text-[1rem] md:text-[1.3rem] pt-12 pb-2">Copyright © 2024 - All right reserved by Tour Agency Ltd</p>
    </div>
    </div>
   
  );
};

export default Footer;
