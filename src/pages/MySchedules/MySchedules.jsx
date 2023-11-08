import { useLoaderData } from "react-router-dom";
import Booking from "../Booking/Booking";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MySchedules = () => {
  const bookings = useLoaderData();
  const { user } = useContext(AuthContext);
  const [myServices, setMyServices] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/booking/${user?.email}`)
      .then((data) => {
        setMyServices(data.data);
      })
      .then((error) => {
        console.log(error);
      });

    console.log(myServices);
  }, [user, myServices]);

  return (
    <div className="grid grid-cols-2 gap-10 w-[60%] mx-auto my-16">
      {bookings.length == 0 ? (
        <p className="text-xl font-bold text-center">No Booking</p>
      ) : (
        bookings?.map((booking) => (
          <Booking key={booking._id} booking={booking}></Booking>
        ))
      )}
      {/* {myServices.map((booking) => (
        <Booking key={booking._id} booking={booking}></Booking>
      ))} */}
    </div>
  );
};

export default MySchedules;

// <div key={service._id}>{service.serviceName}</div>
