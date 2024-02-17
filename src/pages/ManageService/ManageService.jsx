import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";

const ManageService = () => {
  const { user } = useContext(AuthContext);
  const manageService = useLoaderData();
  const [servicesDelete, setServicesDelete] = useState(manageService);
  console.log(servicesDelete);

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
          .delete(
            `https://offline-service-sharing-web-application-crud.vercel.app/services/${_id}`
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

    // const services = manageService.find(
    //   (service) => service.provider_email === user.email
    // );
    // console.log(services);

    //
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-16">
      {servicesDelete?.map((service) => (
        <Service
          key={service._id}
          service={service}
          handleDelete={handleDelete}
        ></Service>
      ))}
    </div>
  );
};

export default ManageService;
