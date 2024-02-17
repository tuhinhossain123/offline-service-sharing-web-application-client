import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import lotiImg from "../../assets/lotti.jpg"

const Login = () => {
  const { singIn, singInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError();

    singIn(email, password)
      .then((result) => {
        toast.success("Logged In Successful!");
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleWithGoogle = () => {
    singInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="mt-16 mb-10">
      <div className="hero-content flex-col  md:flex-row-reverse lg:gap-20 w-full mx-auto gap-10">
        <div className="lg:w-[50%] hidden md:block">
          <img src={lotiImg} alt="" className="w-full h-full"/>
        </div>
        <div className=" lg:w-[40%] w-full mx-auto shadow-2xl rounded-lg bg-[#3e7172]">
          <h1 className="text-4xl font-semibold text-white pl-10 pt-10">
            Sign in
          </h1>
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="">
                <button
                  onClick={handleWithGoogle}
                  className="border-2 text-black bg-white rounded-full  font-semibold py-2 px-2 w-full flex items-center justify-center"
                >
                  <FcGoogle className="text-xl mr-3"></FcGoogle>Sign in with
                  Google
                </button>
              </div>
              <div className="divider  text-white mb-5">OR</div>
              <div className="form-control  ">
                <label className="label">
                  <span className="label-text text-white text-lg">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input text-black bg-white input-bordered"
                  required
                />
                 {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-lg">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input text-black bg-white input-bordered"
                  required
                />
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-lg text-white"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="py-2 px-2 font-semibold rounded-md text-lg bg-white text-black">
                  Sign in
                </button>
              </div>
            </form>

            <p className="font-semibold  pt-1">
              <span className="text-white"> Don't have an account? </span>
              <Link to="/register" className="text-gray-100 underline pl-2">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
