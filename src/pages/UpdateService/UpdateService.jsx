import axios from "axios";
import { useLoaderData } from "react-router-dom";



const UpdateService = () => {
    const data = useLoaderData();

    const handleUpdate =(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const url = form.url.value;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const serviceArea = form.serviceArea.value;
        const description = form.description.value;
        const user = {name, email, url, serviceName, price, serviceArea, description };
        console.log(user)

        axios.put('')
        .then(data =>{
            console.log(data)
        })
        .catch(error =>{
            console.log(error)
        })
    }
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
                defaultValue={data.service_provider_name
                }
                readOnly
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
                defaultValue={data.email}
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
                name="url"
                placeholder="URL"
                className="input input-bordered w-full"
                defaultValue={data.service_provider_img
                  }
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
                name="serviceName"
                placeholder="Service Name,"
                className="input input-bordered w-full"
                defaultValue={data.service_name}
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
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
                defaultValue={data.service_price}
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
                name="serviceArea"
                placeholder="Service Area"
                className="input input-bordered w-full"
                defaultValue={data.service_area}
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
            name="description"
            defaultValue={data.service_des}
            id=""
            cols="10"
            rows="3"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button className="btn btn-block bg-gray-200 mt-3">add</button>
        </div>
      </form>
        </div>
    );
};

export default UpdateService;