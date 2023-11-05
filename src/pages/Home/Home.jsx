import Banner from "../../components/Header/Banner/Banner";
import FollowUs from "../FollowUs/FollowUs";
import MeetTheTeam from "../MeetTheTeam/MeetTheTeam";
import Review from "../Review/Review";

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Review></Review>
           <MeetTheTeam></MeetTheTeam>
           <FollowUs></FollowUs>
           
        </div>
    );
};

export default Home;