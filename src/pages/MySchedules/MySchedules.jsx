
import Booking from "../Booking/Booking";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MySchedules = () => {
  const { user } = useContext(AuthContext);
  const [myServices, setMyServices] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/booking/${user?.email}`)
      .then((data) => {
        setMyServices(data.data);
      })

    console.log(myServices);
  }, [user]);

  return (
    <div className="grid grid-cols-2 gap-10 w-[60%] mx-auto my-16">
      {myServices?.length == 0 ? (
        <p className="text-xl font-bold text-center">No Booking</p>
      ) : (
        myServices?.map((booking) => (
          <Booking key={booking._id} booking={booking}></Booking>
        ))
      )}
     
    </div>
  );
};

export default MySchedules;

