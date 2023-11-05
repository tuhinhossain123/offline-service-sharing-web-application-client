import banner from "../../../assets/banner.png";
const Banner = () => {
  return (
    <div
      className="h-[100vh] flex items-center justify-center "
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.5)),url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center px-2">
        <h1 className="text-6xl font-bold font-mono">
          <span className="text-gray-300">
          Travel memories you'll never forget
          </span>
        </h1>
       
      </div>
    </div>
  );
};
export default Banner;

