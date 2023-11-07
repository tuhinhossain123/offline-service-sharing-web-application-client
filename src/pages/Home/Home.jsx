import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import FollowUs from "../FollowUs/FollowUs";
import MeetTheTeam from "../MeetTheTeam/MeetTheTeam";
import Review from "../Review/Review";
import Services from "../Services/Services";

const Home = () => {
  const popularService = useLoaderData();
  console.log(popularService);

  return (
    <>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[70%] mx-auto">
        {popularService?.slice(0, 4).map((service) => (
          <Services key={service._id} service={service}></Services>
        ))}
      </div>
      <Review></Review>
      <MeetTheTeam></MeetTheTeam>
      <FollowUs></FollowUs>
    </>
  );
};

export default Home;
