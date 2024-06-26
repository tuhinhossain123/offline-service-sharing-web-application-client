// import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  // const navigate=useNavigate()
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <h2 className="text-red-500 text-5xl text-center font-semibold">
          <span className="text-7xl">4</span>
          <span className="text-6xl text-red-500">0</span>
          <span className="text-7xl">4</span>
        </h2>
        <h2 className="text-center text-4xl text-[#5f988f] font-bold pt-5 pb-3">Oops!!</h2>
        <p className="text-center text-xl font-bold">
          Sorry,an unexpected error has occurred!!
        </p>
        <Link to="/">
          <p className="flex justify-center py-3 text-xl rounded  bg-[#3e7172] mt-4 text-white text-center font-bold">
            Go Home
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
