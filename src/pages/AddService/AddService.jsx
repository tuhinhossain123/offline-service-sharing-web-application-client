import axios from "axios";
import ServiceFrom from "../../components/ServiceFrom/ServiceFrom";

const AddService = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const provider_email = form.email.value;
    const service_img = form.service_img.value;
    const provider_img = form.provider_img.value;
    const service_name = form.service_name.value;
    const service_price = form.service_price.value;
    const service_area = form.service_area.value;
    const service_des = form.service_des.value;

    const user = {
      name,
      provider_email,
      provider_img,
      service_img,
      service_name,
      service_price,
      service_area,
      service_des,
    };

    console.log(user);

    axios
      .post("http://localhost:5000/services", user)
      .then((data) => {
        console.log(data);
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
