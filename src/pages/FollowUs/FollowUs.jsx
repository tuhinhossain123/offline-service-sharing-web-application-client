import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const FollowUs = () => {
  return (
    <div className="bg-gray-50 space-y-4 mt-16 pt-10 pb-10">
      <h2 className="text-center text-2xl font-bold">Follow Us</h2>
      <div className="flex justify-center items-center gap-5">
        <FaFacebookSquare className="text-3xl"></FaFacebookSquare>
        <FcGoogle className="text-3xl"></FcGoogle>
      </div>
      <h2 className="text-center text-3xl font-bold pt-4 text-orange-500">HOW CAN WE HELP?</h2>
      <p className="text-center font-semibold pt-2 px-4">
        Would you like to find a tour or get in touch with a guide? Start with
        our Find a Tour. <br /> If you need help from the ToursByLocals Support
        Team, you can contact us anytime.
      </p>
      <div className="flex justify-center items-center gap-6">
        <button className="btn btn-secondary text-white">FIND A TOUR</button>
        <button className="btn btn-secondary text-white">CONTACT US</button>
      </div>
    </div>
  );
};

export default FollowUs;
