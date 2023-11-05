import Banner from "../../components/Header/Banner/Banner";
import FollowUs from "../FollowUs/FollowUs";
import Review from "../Review/Review";

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Review></Review>
           <FollowUs></FollowUs>
        </div>
    );
};

export default Home;