import axios from "axios";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const Details = () => {
  const details = useLoaderData();
  const { user } = useContext(AuthContext);

  const submitFrom = (e) => {
    e.preventDefault();

    const from = e.target;
    const serviceName = from.serviceName.value;
    const service_img = details.service_img;
    const url = from.url.value;
    const provider_email = from.providerEmail.value;
    const userEmail = from.userEmail.value;
    const date = from.date.value;
    const instruction = from.instruction.value;
    const price = from.price.value;

    const userInfo = {
      serviceName,
      url,
      provider_email,
      userEmail,
      date,
      instruction,
      price,
      service_img,
    };

    axios
      .post(
        "https://offline-service-sharing-web-application-crud.vercel.app/booking",
        userInfo
      )
      .then((data) => {
        console.log(data);
        if (data.data.insertedId) {
          toast("User Services Booking Added");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="md:mt-10">
      <ToastContainer />

      <div className="">
        <div className="lg:w-[80rem] lg:h-[40rem] mx-auto px-4">
          <img
            src={details.service_img}
            alt=""
            className="rounded-xl w-full h-full"
          />
        </div>
        <div className="space-y-3 px-5 lg:w-[80rem] mx-auto py-8">
          <h2 className="text-5xl text-teal-700 font-semibold">
            {details.service_name}
          </h2>

          <h2 className="text-xl pt-2 text-gray-500 font-semibold text-justify">
            {details.service_des}
          </h2>
          <div className="flex justify-between items-center">
            <h2>
              <span className="text-xl font-medium">Price: </span>
              <span className="text-3xl font-bold pr-2">
                ${details.service_price}
              </span>
            </h2>
            <button
              className="btn bg-[#3e7172] hover:bg-[#3e7172]  px-8 font-bold text-white rounded "
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Book Now
            </button>
          </div>
          <div className="divider divider-neutral pt-20"></div>
          <div>

            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2 pb-8">
                    ✕
                  </button>
                </form>
                <div className="">
                  <form onSubmit={submitFrom} className="w-full ">
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
                          defaultValue={details.service_name}
                          readOnly
                        />
                      </label>
                    </div>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text ">Service Images:</span>
                      </label>
                      <label>
                        <input
                          type="text"
                          name="url"
                          placeholder="URL"
                          className="input input-bordered w-full"
                          defaultValue={details.service_img}
                          readOnly
                        />
                      </label>
                    </div>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Provider Email:</span>
                      </label>
                      <label>
                        <input
                          type="email"
                          name="providerEmail"
                          placeholder="Provider Email"
                          className="input input-bordered w-full"
                          defaultValue={details.provider_email}
                        />
                      </label>
                    </div>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text "> User Email:</span>
                      </label>
                      <label>
                        <input
                          type="email"
                          name="userEmail"
                          placeholder="User Email"
                          className="input input-bordered w-full"
                          defaultValue={user.email}
                        />
                      </label>
                    </div>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text "> Date:</span>
                      </label>
                      <label>
                        <input
                          type="date"
                          name="date"
                          placeholder=""
                          className="input input-bordered w-full"
                        />
                      </label>
                    </div>
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text ">
                          {" "}
                          Special instruction:
                        </span>
                      </label>
                      <label>
                        <input
                          type="text"
                          name="instruction"
                          placeholder=""
                          className="input input-bordered w-full"
                        />
                      </label>
                    </div>

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
                          defaultValue={details.service_price}
                          readOnly
                        />
                      </label>
                    </div>
                    <button className="bg-[#02a388] btn-block py-2 px-3 text-white rounded mt-4">
                      Booking Confirm
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
