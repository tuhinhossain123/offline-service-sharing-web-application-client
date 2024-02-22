import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateService = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const service_img = form.service_img.value;
    const service_name = form.service_name.value;
    const service_price = form.service_price.value;
    const service_area = form.service_area.value;
    const service_des = form.service_des.value;

    const user = {
      name,
      email,
      service_img,
      service_name,
      service_price,
      service_area,
      service_des,
    };
    console.log(user);

    axios
      .patch(
        `https://offline-service-sharing-web-application-crud.vercel.app/services/${data._id}`,
        user
      )
      .then((data) => {
        console.log(data);
        if (data.data.modifiedCount > 0) {
          toast("User Services Update");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="my-16 px-4">
      <div className="bg-[#3e7172] w-full lg:w-[50%] mx-auto p-8 rounded-lg shadow-2xl">
        <form onSubmit={handleUpdate}>
          <h2 className="text-3xl md:px-10 text-center pb-4 md:text-5xl text-white font-semibold">
            Update Your Services
          </h2>
          <div className="md:flex justify-center gap-10 mb-2">
            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text text-white text-lg">
                  Your Name:
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input bg-gray-100 text-lg w-full focus:outline-none placeholderact-black rounded-l-lg"
                  defaultValue={user?.displayName}
                />
              </label>
            </div>
            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text text-white text-lg">Email:</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input bg-gray-100 text-lg w-full focus:outline-none placeholder:text-black rounded"
                  defaultValue={user?.email}
                />
              </label>
            </div>
          </div>
          <div className="md:flex justify-center gap-10 mb-2">
            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text text-white text-lg">
                  Picture URL:
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="service_img"
                  placeholder="URL"
                  className="input bg-gray-100 text-lg w-full focus:outline-none placeholder:text-black rounded"
                  defaultValue={data.service_img}
                />
              </label>
            </div>
            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text text-white text-lg">
                  Service Name:
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="service_name"
                  placeholder="Service Name"
                  className="input bg-gray-100 text-lg w-full focus:outline-none placeholder:text-black rounded"
                />
              </label>
            </div>
          </div>
          <div className="md:flex justify-center gap-10 mb-2">
            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text text-white text-lg">Price:</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="service_price"
                  placeholder="Price"
                  className="input bg-gray-100 text-lg w-full focus:outline-none placeholder:text-black rounded"
                />
              </label>
            </div>
            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text text-white text-lg">
                  Service Area:
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="service_area"
                  placeholder="Service Area"
                  className="input bg-gray-100 text-lg w-full focus:outline-none placeholder:text-black rounded"
                />
              </label>
            </div>
          </div>
          <div className="form-control mx-auto text-center mb-2  w-full">
            <label className="label">
              <span className="label-text text-white text-lg">
                Description:
              </span>
            </label>
            <textarea
              className=" bg-gray-100 p-3 text-lg w-full focus:outline-none placeholder:text-black rounded"
              name="service_des"
              placeholder="Service Description"
              id=""
              cols="10"
              rows="5"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="btn btn-block bg-gray-200 mt-3 text-xl">Update Services</button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
