import logo from "../../assets/logo.jpeg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
  return (
    <div className="p-6 bg-black text-base-content mt-16">
      <div className="footer ">
        <div>
          <img src={logo} alt="" className="w-[100px] h-[100px] mb-3" />
          <p className="text-2xl text-white font-bold">Local Tours and Guide</p>
        </div>
        <nav className="text-white">
          <header className="footer-title text-white">contact</header>
         <p>0182344654657</p>
         <p>0182344654657</p>
        </nav>
        <nav className="text-white">
          <header className="footer-title">address</header>
          <a className="link link-hover">Chittagong</a>
          <a className="link link-hover">Cumilla</a>
          <a className="link link-hover">Dhaka</a>
        </nav>
        <nav className="text-white">
          <header className="footer-title">social media</header>
         <div className="flex gap-5">
         <a className="link link-hover"> <FaFacebookSquare className="text-3xl"></FaFacebookSquare></a>
          <a className="link link-hover"><FaTwitter className="text-3xl"></FaTwitter></a>
          <a className="link link-hover"><FcGoogle className="text-3xl"></FcGoogle></a>
         </div>
        </nav>
      </div>
      <div className="flex justify-center mt-6 text-white">
        <p>Copyright © 2023 - All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
