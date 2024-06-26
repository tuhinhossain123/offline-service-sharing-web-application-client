import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Services = ({ service }) => {
  const {
    _id,
    service_img,
    service_name,
    service_price,
    service_des,
  } = service;

  return (
    <div className="rounded-lg  bg-gray-100 shadow-md hover:shadow-2xl hover-shadow-gray-800 text-gray-500">
      <div className="md:h-[20rem] lg:h-[30rem] ">
        <img src={service_img} alt="" className=" h-full w-full rounded-t-lg" />
      </div>
      <div className="px-4 pb-8">
        <div>
          <h2 className="text-2xl lg:text-3xl font-semibold  text-teal-900 pb-2 pt-2">
            {service_name}
          </h2>
          <p className="pt-3  text-lg">
            {service_des.slice(0, 90)}....
          </p>
          <div className="flex justify-between items-center pt-3">
            <h2>
              <span className="text-lg ">Price: </span>
              <span className="text-2xl font-bold pr-2">
                ${service_price}
              </span>
            </h2>
            <Link
              to={`/details/${_id}`}
              className="py-2 px-3 rounded bg-[#3e7172]  font-semibold text-white"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
