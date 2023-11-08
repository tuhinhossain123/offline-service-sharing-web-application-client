import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Show = ({ show, searchItem, setSearchItem }) => {
  const {
    _id,
    service_img,
    service_name,
    service_provider_img,
    service_provider_name,
    service_price,
    service_des,
    service_area,
  } = show;
   
 
  return (
    <div className="rounded-b-lg w-[60%] my-10 mx-auto  bg-base-100 shadow-xl">
      <div className="flex">
        <div className="">
          <img
            src={service_img}
            alt=""
            className="rounded-l-lg w-full h-full"
          />
        </div>
        <div className="p-5 space-y-3 rounded-r-lg">
          <h2 className="text-2xl font-semibold">{service_name}</h2>
          <p className="font-lg font-semibold text-gray-400">
            {service_des.slice(0, 90)}...
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-5">
              <img
                src={service_provider_img}
                alt=""
                className="rounded-full w-10"
              />
              <h2 className="font-semibold">{service_provider_name}</h2>
            </div>
            <h2>{service_area}</h2>
          </div>
          <div className="flex items-center justify-between">
            <p className="">
              {" "}
              <span className="text-xl text-red-500 font-bold">
                Price:
              </span>{" "}
              {service_price}
            </p>
            <Link to={`/details/${_id}`}  className="py-2 px-3 rounded bg-[#02a388] font-semibold text-white">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
