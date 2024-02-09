import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Services = ({ service }) => {
  const {
    _id,
    service_img,
    service_name,
    service_provider_img,
    service_provider_name,
    service_price,
    service_des,
  } = service;

  return (
    <div className="rounded-b-lg  shadow-xl">
      <div className="">
        <img src={service_img} alt="" className="rounded-t-lg  h-full w-full" />
      </div>
      <div className="bg-[#5f988f]">
        {/* <div className="flex items-center gap-5 pt-8  px-5 mb-4">
          <img
            src={service_provider_img}
            alt=""
            className="rounded-full w-10"
          />
          <h2 className="font-semibold text-[#fff]  text-[2rem]">
            {service_provider_name}
          </h2>
        </div> */}
        <div className="space-y-2 px-5 mb-4">
          <h2 className="text-3xl text-[#fff] font-semibold">
            {service_name}
          </h2>
          <p className="font-lg font-semibold text-gray-400">
            {service_des.slice(0, 90)}...
          </p>

          <div className="flex items-center justify-between">
            <p className="">
              {" "}
              <span className="text-xl text-red-500 font-bold">
                Price:
              </span>{" "}
              {service_price}
            </p>
            <Link
              to={`/details/${_id}`}
              className="py-2 px-3 rounded  bg-[#02a388] font-semibold text-white"
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
