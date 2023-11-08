import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";

const ManageService = () => {
  const manageService = useLoaderData();
  return (
    <div className="grid grid-cols-3 gap-10 px-16">
      {manageService?.map((service) => (
        <Service key={service._id} service={service}></Service>
      ))}
    </div>
  );
};

export default ManageService;
