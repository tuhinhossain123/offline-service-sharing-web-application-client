import allService from "../../../assets/banner4.png"

const AllServiceBanner = () => {
    return (
        <div className="relative w-full h-full">
        <img
          className="w-full h-[60vh] object-cover"
          src={allService}
          alt="Banner"
          width={1200}
          height={500}
        />
        <div className="absolute flex item-center justfy-start top-0 left-0 w-full h-full bg-black opacity-70">
         <div className="flex justfy-start items-end bg-black h-full w-full pl-[15rem] pb-[10rem]">
         <div>
            <h2 className="text-white text-4xl font-bold">All Services</h2>
          </div>
         </div>
        </div>
      </div>
    );
};

export default AllServiceBanner;