import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import FollowUs from "../FollowUs/FollowUs";
import MeetTheTeam from "../MeetTheTeam/MeetTheTeam";
import Review from "../Review/Review";
import Services from "../Services/Services";
import bgimg from "../../assets/bg.svg";
import PopularDestinations from "../PopularDestinations/PopularDestinations";
import Achievement from "../Achievement/Achievement";
import testiBg from "../../assets/Testimonial-bg.svg";

const Home = () => {
  const popularService = useLoaderData();

  return (
    <>
      <div className="">
        <Banner></Banner>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.0), rgba(0,0,0,0.0)), url(${bgimg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="px-6 md:px-8 md:my-14 my-10"
      >
        <h2 className="text-4xl md:px-10 text-center pb-6 md:-pb-0 md:text-5xl text-[#3e7172] font-semibold ">
          Popular Destinations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {popularService?.slice(0, 3)?.map((service) => (
            <Services key={service._id} service={service}></Services>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            to="/allServices"
            className="py-2 px-4 text-2xl rounded  border-b-4 border-[#3e7172] text-[#3e7172]  font-semibold"
          >
            See All
          </Link>
        </div>
      </div>
      <PopularDestinations></PopularDestinations>
      <Achievement></Achievement>
      <Review>
        <div>
          style=
          {{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${testiBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        </div>
      </Review>
      {/* <MeetTheTeam></MeetTheTeam> */}
      {/* <FollowUs></FollowUs> */}
    </>
  );
};

export default Home;
