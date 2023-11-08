import { useLoaderData } from "react-router-dom";
import Booking from "../Booking/Booking";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MySchedules = () => {
  const bookings = useLoaderData();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/booking/${user?.email}`)
      .then((data) => {
        console.log(data);
      })
      .then((error) => {
        console.log(error);
      });
  }, [user]);

  return (
    <div>
      {bookings.length == 0 ? (
        <p>no booking</p>
      ) : (
        bookings?.map((booking) => (
          <Booking key={booking._id} booking={booking}></Booking>
        ))
      )}
    </div>
  );
};

export default MySchedules;
