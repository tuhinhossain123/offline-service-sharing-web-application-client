import axios from "axios";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Details = () => {
  const details = useLoaderData();
  const {user}=useContext(AuthContext)

  const submitFrom = (e) => {
    e.preventDefault();
    const from = e.target;
    const serviceName = from.serviceName.value;
    const url = from.url.value;
    const providerEmail = from.providerEmail.value;
    const userEmail = from.userEmail.value;
    const date = from.date.value;
    const instruction = from.instruction.value;
    const price = from.price.value;

    const userInfo = {
        serviceName,
        url,
        providerEmail,
        userEmail,
        date,
        instruction,
        price,
      };
      console.log(userInfo);
    };

    axios.post('http://localhost:5000/booking')
    .then(data =>{
        console.log(data.data)
    })
    .catch(error =>{
        console.log(error)
    })

  return (
    <div className="flex items-start justify-between gap-5 w-[60%] mx-auto my-16">
      <div className="flex justify-center text-center items-center w-[30%]">
        <div className="">
          <img
            src={details.service_provider_img}
            alt=""
            className="rounded-full mx-auto"
          />
          <div className="space-y-3 py-2">
            <h2 className="text-xl font-semibold ">
              Name: {details.service_provider_name}
            </h2>
            <h4 className="text-lg font-medium">
              Location: {details.service_area}
            </h4>
          </div>
        </div>
      </div>

      {/* single service section */}
      <div className="rounded-b-lg bg-base-100 shadow-xl w-[70%] mx-auto">
        <div>
          <img
            src={details.service_img}
            alt=""
            className="rounded-t-lg w-full"
          />
        </div>
        <div className="space-y-3 px-5 py-4">
          <div className="flex items-center gap-5">
            <img
              src={details.service_provider_img}
              alt=""
              className="rounded-full w-10"
            />
            <h2 className="font-semibold">{details.service_provider_name}</h2>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-[#02a388]">
              {details.service_name}
            </h2>

            <p className="">
              {" "}
              <span className="text-xl text-red-500 font-bold">
                Price:
              </span>{" "}
              {details.service_price}
            </p>
          </div>
          <div>
            {/* modal start here */}
            <button
              className="bg-[#02a388] btn-block py-2 px-3 text-white rounded my-2 font-bold"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Book Now
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
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
                        <span className="label-text ">Provider Email:</span>
                      </label>
                      <label>
                        <input
                          type="email"
                          name="providerEmail"
                          placeholder="Provider Email"
                          className="input input-bordered w-full"
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
                      Purchase
                    </button>
                  </form>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
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
