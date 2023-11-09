import axios from "axios";
import Booking from "../Booking/Booking";
import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyPendingWorks = () => {
  const bookings = useLoaderData();
  const { user } = useContext(AuthContext);
  const [myServices, setMyServices] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/pendingWork/${user?.email}`)
      .then((data) => {
        setMyServices(data.data);
      });

    console.log(myServices);
  }, [user]);
  return (
    <div>
      <div className="grid grid-cols-2 gap-10 w-[60%] mx-auto my-16">
        {myServices?.length == 0 ? (
          <p className="text-xl font-bold text-center">No Booking</p>
        ) : (
          myServices?.map((booking) => (
            <Booking key={booking._id} booking={booking}></Booking>
          ))
        )}
      </div>
      <div className="flex justify-center">
        <select name="" id="" className="input input-bordered">
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default MyPendingWorks;
