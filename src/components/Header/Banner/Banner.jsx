import banner from "../../../assets/banner.png";
const Banner = () => {
  return (
    <div
      className="h-[100vh] flex items-center justify-center "
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.9)),url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="px-2 space-y-4">
        <h1 className="text-3xl md:text-6xl text-center font-bold font-mono">
          <span className="text-orange-400">
            Travel memories you'll never forget
          </span>
        </h1>
        <p className="text-white text-center font-mono p-3">
            Local Tours and Guide offers personalized, immersive experiences
            with expert local guides. <br /> Explore your destination's hidden gems,
            culture, and history while enjoying flexible <br />  itineraries and a deep
            connection to the locale.
          </p>
        <div className="flex justify-center">
        <button className="text-center btn btn-secondary">Book Now..</button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
