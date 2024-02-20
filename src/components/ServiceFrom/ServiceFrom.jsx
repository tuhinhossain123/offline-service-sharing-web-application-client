/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../pages/Provider/AuthProvider";

const ServiceFrom = ({ handleSubmit }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className=" my-16 px-5">
      <div className="bg-[#3e7172] w-full lg:w-[50%] mx-auto p-8 rounded-lg shadow-2xl ">
        <h2 className="text-5xl text-white font-semibold text-center pb-5">Add Service</h2>
        <form
          onSubmit={handleSubmit}
          className=" "
        >
          <div className="md:flex justify-center gap-10 mb-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white text-lg">Name :</span>
              </label>
              <label>
                <input
                  type="text"
                  name="service_provider_name"
                  placeholder="Your name"
                  className="input input-bordered w-full bg-white text-lg"
                  defaultValue={user.displayName}
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white text-lg">Email :</span>
              </label>
              <label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full bg-gray-100 text-lg"
                  defaultValue={user.email}
                />
              </label>
            </div>
          </div>
          <div className="md:flex justify-center gap-10 mb-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white text-lg">Service Picture URL :</span>
              </label>
              <label>
                <input
                  type="text"
                  name="service_img"
                  placeholder="URL"
                  className="input input-bordered w-full bg-gray-100 text-lg"
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white text-lg">Service Name :</span>
              </label>
              <label>
                <input
                  type="text"
                  name="service_name"
                  placeholder="Service Name,"
                  className="input input-bordered w-full bg-gray-100 text-lg"
                />
              </label>
            </div>
          </div>
          <div className="md:flex justify-center w-full gap-10 mb-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white text-lg ">Price :</span>
              </label>
              <label>
                <input
                  type="text"
                  name="service_price"
                  placeholder="Price"
                  className="input input-bordered w-full bg-gray-100 text-lg"
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white text-lg">Service Area :</span>
              </label>
              <label>
                <input
                  type="text"
                  name="service_area"
                  placeholder="Service Area"
                  className="input input-bordered w-full bg-gray-100 text-lg"
                />
              </label>
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white text-lg">Service Provider Img :</span>
            </label>
            <label>
              <input
                type="text"
                name="service_provider_img"
                placeholder="Service Img"
                className="input input-bordered w-full bg-gray-100 text-lg"
                defaultValue={user.photoURL}
              />
            </label>
          </div>
          <div className="form-control mx-auto text-center mb-2 ">
            <label className="label">
              <span className="label-text text-white text-lg">Description :</span>
            </label>
            <textarea
              className="border p-5 rounded bg-gray-100 text-lg"
              name="service_des"
              id=""
              cols="10"
              rows="3"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="btn btn-block bg-gray-200 mt-3 text-xl">Add Service</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceFrom;
