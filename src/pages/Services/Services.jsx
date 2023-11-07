import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Services = ({ service }) => {
  const { service_img,service_name,service_provider_img,service_provider_name, 
    service_price,service_des} = service;

  return (
      <div className="rounded-b-lg bg-base-100 shadow-xl">
        <div>
          <img src={service_img} alt="" className="rounded-t-lg w-full" />
        </div>
        <div className="space-y-4 mt-3 px-5 mb-3">
          <h2 className="text-2xl font-semibold">{service_name}</h2>
          <p className="font-lg font-semibold text-gray-400">
          {service_des.slice(0 ,90)}...
          </p>
          <div className="flex items-center gap-5">
            <img
              src={service_provider_img}
              alt=""
              className="rounded-full w-10"
            />
            <h2 className="font-semibold">{service_provider_name}</h2>
          </div>
          <div className="flex items-center justify-between">
            <p className=""> <span className="text-xl text-red-500 font-bold">Price:</span> {service_price}</p>
            <button className="p-3 rounded bg-[#02a388] font-semibold text-white">View Details</button>
          </div>
        </div>
      </div>
      
  );
};

export default Services;
