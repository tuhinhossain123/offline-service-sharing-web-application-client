import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Review from "../Review/Review";
import Services from "../Services/Services";
import bgimg from "../../assets/bg.svg";
import PopularDestinations from "../PopularDestinations/PopularDestinations";
import Achievement from "../Achievement/Achievement";

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
        className="lg:px-16  mt-10"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl md:px-10 text-center pb-8 md:-pb-0  text-[#5f988f] font-semibold ">
        Special Service
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[90%] mx-auto">
          {popularService?.slice(0, 3)?.map((service) => (
            <Services key={service._id} service={service}></Services>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            to="/allServices"
            className="pt-4 px-4 text-2xl rounded  border-b-4 border-[#5f988f]  text-[#5f988f]  font-semibold"
          >
            See All
          </Link>
        </div>
      </div>
      <PopularDestinations></PopularDestinations>
      <Achievement></Achievement>

      <Review></Review>
    </>
  );
};

export default Home;
