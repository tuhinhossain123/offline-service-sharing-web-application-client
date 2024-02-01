import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import FollowUs from "../FollowUs/FollowUs";
import MeetTheTeam from "../MeetTheTeam/MeetTheTeam";
import Review from "../Review/Review";
import Services from "../Services/Services";

const Home = () => {
  const popularService = useLoaderData();

  return (
    <>
      <Banner></Banner>
      <div className="my-16">
        <h2 className="text-4xl text-center font-bold mb-10">
          Popular Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[70%] mx-auto">
          {popularService?.slice(0, 4)?.map((service) => (
            <Services key={service._id} service={service}></Services>
          ))}
        </div>
        <div className="flex justify-center my-10">
          <Link to="/allServices" className="py-2 px-4 rounded bg-white border-2 text-teal-500 border-teal-500 font-semibold">Show All</Link>
        </div>
      </div>
      <Review></Review>
      <MeetTheTeam></MeetTheTeam>
      <FollowUs></FollowUs>
    </>
  );
};

export default Home;
