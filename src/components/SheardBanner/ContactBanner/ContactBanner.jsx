import allService from "../../../assets/banner4.png";

const ContactBanner = () => {
  return (
    <div className="relative w-full h-full">
      <img
        className="w-full h-[50vh] object-cover"
        src={allService}
        alt="Banner"
        width={1200}
        height={500}
      />
      <div className="absolute flex item-center justfy-start top-0 left-0 w-full h-full bg-black opacity-70">
        <div className="flex justfy-start items-end bg-black h-full md:pl-[8rem]  lg:pl-[15rem] pb-[6rem]">
          <div>
            <h2 className="text-white text-7xl font-semibold hidden md:block">Contact Us</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
