/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Service = ({ service, handleDelete }) => {
  const { _id, service_img, service_name } = service;

  return (
    <div className="rounded-b-lg bg-base-100 shadow-xl">
      <img src={service_img} alt="" className="rounded-t-lg w-full" />
      <div className="p-4 space-y-4">
        <div className="">
          <h2 className="text-2xl font-semibold">{service_name}</h2>
        </div>
        <div className="flex justify-between px-2 ">
          <button
            onClick={() => handleDelete(_id)}
            className="p-3 font-bold rounded bg-[#02a388] text-white"
          >
            Delete
          </button>
          <p className="p-3 font-bold rounded bg-[#02a388] text-white">
            <Link to={`/update/${_id}`}>Update</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
