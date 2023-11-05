import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";

const MeetTheTeam = () => {
  return (
    <div className="px-16 mt-16">
      <h2 className="text-center text-3xl font-bold mb-2">Meet The Team</h2>
      <p className="text-center text-xl font-medium">
        Connecting travelers with local guides worldwide, since 2015
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        <div className="rounded-b-lg bg-base-100 shadow-xl">
         <img src={img1} alt=""  className="rounded-t-lg"/>
          <div className="space-y-4 mt-4 mb-6 pl-3">
            <h2 className="text-2xl font-semibold">Tuhin Hossain</h2>
            <p className="font-lg font-semibold text-red-600">CEO and President</p>
          </div>
        </div>
        <div className="rounded-b-lg bg-base-100 shadow-xl">
         <img src={img2} alt=""  className="rounded-t-lg"/>
          <div className="space-y-4 mt-4 pl-3 mb-6">
            <h2 className="text-2xl font-semibold">Riyan Hossain</h2>
            <p className="font-lg font-semibold text-red-600">Tour Connection Specialist</p>
          </div>
        </div>
        <div className="rounded-b-lg bg-base-100 shadow-xl">
         <img src={img4} alt=""  className="rounded-t-lg"/>
          <div className="space-y-4 mt-4 pl-3 mb-6">
            <h2 className="text-2xl font-semibold">Rashedul Islam</h2>
            <p className="font-lg font-semibold text-red-600">Guide Acquisition Specialist</p>
          </div>
        </div>
        <div className="rounded-b-lg bg-base-100 shadow-xl">
         <img src={img5} alt=""  className="rounded-t-lg"/>
          <div className="space-y-4 mt-4 pl-3 mb-6">
            <h2 className="text-2xl font-semibold">Foridul Islam</h2>
            <p className="font-lg font-semibold text-red-600">Team Leader, Quality Experience</p>
          </div>
        </div>
        <div className="rounded-b-lg bg-base-100 shadow-xl">
         <img src={img6} alt=""  className="rounded-t-lg"/>
          <div className="space-y-4 mt-4 pl-3 mb-6">
            <h2 className="text-2xl font-semibold">Sojib Hossain</h2>
            <p className="font-lg font-semibold text-red-600">Customer Support</p>
          </div>
        </div>
        <div className="  bg-base-100 shadow-xl rounded-b-lg">
         <img src={img7} alt=""  className="rounded-t-lg"/>
          <div className="space-y-4 mt-4 pl-3 mb-6">
            <h2 className="text-2xl font-semibold">Raju Hossain</h2>
            <p className="font-lg font-semibold text-red-600">Tour Connection Specialist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
