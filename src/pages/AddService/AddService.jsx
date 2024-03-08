import { toast } from "react-toastify";
import axios from "axios";
import ServiceFrom from "../../components/ServiceFrom/ServiceFrom";
import { useNavigate } from "react-router-dom";

const AddService = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const service_provider_name = form.service_provider_name.value;
    const provider_email = form.email.value;
    const service_img = form.service_img.value;
    const service_provider_img = form.service_provider_img.value;
    const service_name = form.service_name.value;
    const service_price = form.service_price.value;
    const service_area = form.service_area.value;
    const service_des = form.service_des.value;

    const user = {
      service_provider_name,
      provider_email,
      service_provider_img,
      service_img,
      service_name,
      service_price,
      service_area,
      service_des,
    };

   

    axios
      .post(
        "http://localhost:5000/manage",
        user
      )
      .then((data) => {
        console.log(data);
        if (data.data.insertedId) {
          toast.success("Services Added");
          e.target.reset()
          navigate("/manageServices");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="">
      <ServiceFrom handleSubmit={handleSubmit}></ServiceFrom>
    </div>
  );
};

export default AddService;
