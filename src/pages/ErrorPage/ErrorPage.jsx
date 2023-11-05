// import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";



const ErrorPage = () => {
    // const navigate=useNavigate()
    return (
        <div className="h-screen flex justify-center items-center">
            <div>
            <h2 className="text-red-300 text-5xl text-center font-semibold"><span className="text-7xl">4</span><span className="text-6xl">0</span><span className="text-7xl">4</span></h2>
            <h2 className="text-center text-2xl font-bold pt-5 pb-3">Oops!!</h2>
            <p className="text-center font-bold">Sorry,an unexpected error has occurred!!</p>
         <Link to="/" ><p className="btn flex justify-center bg-[#02a388] mt-4 text-white text-center font-bold">Back To Home</p></Link>
           
            </div>
        </div>
    );
};

export default ErrorPage;
