/* eslint-disable react/prop-types */

const Booking = ({ booking }) => {
  const {
    serviceName,
    providerEmail,
    userEmail,
    date,
    instruction,
    price,
    service_img,
  } = booking;

  return (
    <div className="rounded-b-lg bg-base-100 shadow-xl">
      <div className="h-[25rem]">
        <img src={service_img} alt="" className="rounded-t-lg w-full h-full cover" />
      </div>
      <div className="space-y-2 mt-3 px-5 mb-4">
        <h2 className="text-2xl font-semibold text-teal-700 ">{serviceName}</h2>
        <div className="flex justify-between items-center gap-5">
          <h2 className="font-semibold">{userEmail}</h2>
          <h2 className="text-red-500 font-bold">{date}</h2>
        </div>
        <h2>{providerEmail}</h2>
        <p>
          <span className="text-xl  font-semibold">
           Instruction :{" "}
          </span>
          {instruction}
        </p>

        <p>
          {" "}
          <span className="text-lg font-bold">Price:</span> <span className="text-2xl font-bold">{price}</span>
        </p>
      </div>
    </div>
  );
};

export default Booking;
