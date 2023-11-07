/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../pages/Provider/AuthProvider";
const ServiceFrom = ({ handleSubmit }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="px-10 mt-5 mb-1">
      <h2 className="text-3xl font-semibold text-center mb-3">Add Service</h2>
      <form onSubmit={handleSubmit} className="w-full md:w-[60%] mx-auto">
        <div className="md:flex justify-center gap-10 mb-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text ">Your Name:</span>
            </label>
            <label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full"
                readOnly
                defaultValue={user.displayName}
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text ">Email:</span>
            </label>
            <label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                readOnly
                defaultValue={user.email}
              />
            </label>
          </div>
        </div>
        <div className="md:flex justify-center gap-10 mb-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text ">Picture URL:</span>
            </label>
            <label>
              <input
                type="text"
                name="url"
                placeholder="URL"
                className="input input-bordered w-full"
                defaultValue={user.photoURL}
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text ">Service Name:</span>
            </label>
            <label>
              <input
                type="text"
                name="serviceName"
                placeholder="Service Name,"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex justify-center w-full gap-10 mb-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text ">Price:</span>
            </label>
            <label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text ">Service Area:</span>
            </label>
            <label>
              <input
                type="text"
                name="serviceArea"
                placeholder="Service Area"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="form-control mx-auto text-center mb-2 ">
          <label className="label">
            <span className="label-text ">Description:</span>
          </label>
          <textarea
            className="border p-5"
            name="description"
            id=""
            cols="10"
            rows="3"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button className="btn btn-block bg-gray-200 mt-3 ">add</button>
        </div>
      </form>
    </div>
  );
};

export default ServiceFrom;
