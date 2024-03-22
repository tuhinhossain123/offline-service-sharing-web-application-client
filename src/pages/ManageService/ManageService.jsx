import { Link, useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";

const ServicesService = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [servicesDelete, setServicesDelete] = useState(services);

  useEffect(() => {
    fetch(`http://localhost:5000/manage/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  },[user]);

  if(services.length==0){
    return ( 
      <div className="my-16"><p className="text-3xl font-semibold text-center text-[#5f988f]">Please Added Service</p></div>
    )
  }
  

  const handleDelete = (_id) => {
    console.log(_id);
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
          .delete(
            `http://localhost:5000/manage/${_id}`
          )
          .then((data) => {
            console.log(data.data);
            if (data.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted Successfully!",
                text: "Your Services has been deleted.",
                icon: "success",
              });
              const remaining = servicesDelete.filter(
                (remove) => remove._id !== _id
              );
              setServicesDelete(remaining);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });

    
  };

  return (
    <div className="my-16">

      <div className="">
        <table className="table w-[70%] mx-auto">
          <thead>
            <tr className="text-lg bg-[#3e7172] text-white text-center ">
              <th>No</th>
              <th>Provider Img</th>
              <th>Provider Name</th>
              <th>Service Name</th>
              <th>Service Price</th>
              <th>Services Area</th>
              <th>Action</th>
            </tr>
          </thead>
          {services.map((service, index) => (
            <tbody key={service._id}>
              <tr className="text-center text-lg text-gray-500 font-medium">
                <th>{index+1}</th>
                <td>
                  <div className="flex justify-center items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={service.service_provider_img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{service.service_provider_name}</td>
                <td>{service.service_name}</td>
                <td><span className="text-2xl text-[#3e7172]">$</span> {service.service_price}</td>
                <td>{service.service_area}</td>
                <div className="flex justify-center items-center my-4  gap-3 text-center">
                  <Link to={`/update/${service._id}`} className="btn bg-[#5f988f] hover:bg-[#5f988f] text-white">
                    Update
                  </Link>
                  <button onClick={() => handleDelete(service._id)} className="btn bg-red-500 hover:bg-red-500 text-white">
                    Delete
                  </button>
                </div>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ServicesService;
