import { useTypewriter } from "react-simple-typewriter";
import banner from "../../../assets/banner.png";
const Banner = () => {
  const [text] = useTypewriter({
    words: [
      " Travel memories you'll never forget",
      " Travel memories you'll never forget",
      " Travel memories you'll never forget",
      " Travel memories you'll never forget",
    ],
    loop: true,
    typeSpeed: 10,
    deleteSpeed: 10,
    delaySpeed: 1000,
  });
  return (
    <div
      className="h-[100vh] flex items-center justify-center "
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="px-2 space-y-4 py-10">
        <h1 className="text-xl md:text-6xl text-center font-bold font-mono">
          <span className="text-white">{text}</span>
        </h1>
        <p className="text-gray-300 text-center font-mono p-3">
          Local Tours and Guide offers personalized, immersive experiences with
          expert local guides.
        </p>
        <div className="flex justify-center">
          <button className="text-center p-3 rounded text-xl bg-[#02a388] border-none text-white">
            Book Now..
          </button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
