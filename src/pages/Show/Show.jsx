import { Link } from "react-router-dom";

const Show = ({ show, searchItem, setSearchItem }) => {
  const {
    _id,
    service_img,
    service_name,
    service_price,
    service_des,
  } = show;

  return (
    <div className="rounded-t-lg bg-gray-50 shadow-md hover:drop-shadow-2xl hover-shadow-[#3e7172] text-gray-500">
      <div className="h-[25rem]">
        <img src={service_img} alt="" className="rounded w-full h-full " />
      </div>
      <div className="p-5 space-y-3 rounded-r-lg">
        <h2 className="text-3xl font-semibold text-black">{service_name}</h2>
        <p className="font-lg font-semibold text-gray-400 ">
          {service_des.slice(0, 90)}...
        </p>
        <div className="flex items-center justify-between">
        <h2>
              <span className="text-lg ">Price: </span>
              <span className="text-2xl font-bold pr-2">
                ${service_price}
              </span>
            </h2>
          <Link
            to={`/details/${_id}`}
            className="py-2 px-3 rounded bg-[#3e7172] font-semibold text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Show;
