const ServiceFrom = ({ handleSubmit }) => {
  return (
    <div className="px-10 mt-5 mb-16">
      <h2 className="text-3xl font-semibold text-center mb-3">Add Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="md:flex justify-center gap-10 mb-2">
          <div className="form-control md:w-1/4">
            <label className="label">
              <span className="label-text ">Your Name:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full"
                readOnly
              />
            </label>
          </div>
          <div className="form-control md:w-1/4">
            <label className="label">
              <span className="label-text ">Email:</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                readOnly
              />
            </label>
          </div>
        </div>
        <div className="md:flex justify-center gap-10 mb-2">
          <div className="form-control md:w-1/4">
            <label className="label">
              <span className="label-text ">Picture URL:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="url"
                placeholder="URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/4">
            <label className="label">
              <span className="label-text ">Service Name:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="serviceName"
                placeholder="Service Name,"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex justify-center gap-10 mb-2">
          <div className="form-control md:w-1/4">
            <label className="label">
              <span className="label-text ">Price:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/4">
            <label className="label">
              <span className="label-text ">Service Area:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="serviceArea"
                placeholder="Service Area"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="form-control mx-auto text-center mb-2 w-2/4">
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
          <button className="btn bg-gray-200 mt-3 w-3/6 ">add</button>
        </div>
      </form>
    </div>
  );
};

export default ServiceFrom;
