/* eslint-disable react/prop-types */


const Booking = ({booking}) => {
    const {serviceName, url, providerEmail, userEmail, date, instruction, price}=booking;
    return (
        <div className="rounded-b-lg bg-base-100 shadow-xl w-[35%]">
        <div>
          <img src={url} alt="" className="rounded-t-lg w-full" />
        </div>
        <div className="space-y-2 mt-3 px-5 mb-4">
          <h2 className="text-2xl font-semibold">{serviceName}</h2>
          <div className="flex items-center gap-5">
            <h2>{providerEmail}</h2>
            <h2 className="font-semibold">{userEmail}</h2>
            <h2>{date}</h2>
          </div>
          <p>{instruction}</p>
          <div className="flex items-center justify-between">
            <p className=""> <span className="text-xl text-red-500 font-bold">Price:</span> {price}</p>
           
          </div>
        </div>
      </div>
    );
};

export default Booking;