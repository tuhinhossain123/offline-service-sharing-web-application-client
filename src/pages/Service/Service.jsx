/* eslint-disable react/prop-types */
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Service = ({ service }) => {
  const { _id, service_img, service_name } = service;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/services/${_id}`)
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

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
