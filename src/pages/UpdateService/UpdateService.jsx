
import { ToastContainer, toast } from 'react-toastify';
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
    console.log(user)

  
    axios
      .patch(`http://localhost:5000/services/${data._id}`, user)
      .then((data) => {
        console.log(data);
        if(data.data.modifiedCount > 0){
          toast('User Services Update')
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleUpdate} className="md:w-[60%] mx-auto">
        <div className="md:flex justify-center gap-10 mb-2">
          <div className="form-control  w-full">
            <label className="label">
              <span className="label-text ">Your Name:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full"
                defaultValue={user?.displayName}
              />
            </label>
          </div>
          <div className="form-control  w-full">
            <label className="label">
              <span className="label-text ">Email:</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                defaultValue={user?.email}
              />
            </label>
          </div>
        </div>
        <div className="md:flex justify-center gap-10 mb-2">
          <div className="form-control  w-full">
            <label className="label">
              <span className="label-text ">Picture URL:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="service_img"
                placeholder="URL"
                className="input input-bordered w-full"
                defaultValue={data.service_img}
              />
            </label>
          </div>
          <div className="form-control  w-full">
            <label className="label">
              <span className="label-text ">Service Name:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="service_name"
                placeholder="Service Name,"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex justify-center gap-10 mb-2">
          <div className="form-control  w-full">
            <label className="label">
              <span className="label-text ">Price:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="service_price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control  w-full">
            <label className="label">
              <span className="label-text ">Service Area:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="service_area"
                placeholder="Service Area"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="form-control mx-auto text-center mb-2  w-full">
          <label className="label">
            <span className="label-text ">Description:</span>
          </label>
          <textarea
            className="border p-5"
            name="service_des"
            id=""
            cols="10"
            rows="3"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button className="btn btn-block bg-gray-200 mt-3">Update</button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default UpdateService;
