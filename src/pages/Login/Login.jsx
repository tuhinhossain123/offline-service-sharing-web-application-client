import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

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
        console.log(result.user);
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'User login successfully',
            footer: '<a href="">Why do I have this issue?</a>'
          })
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
    <div className="w-full md:w-[35%] mx-auto ">
      <div className="hero-content flex-col">
        <div className="">
          <h1 className="text-2xl font-bold">Please Login</h1>
        </div>
        <div className=" w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input  border-2 border-transparent border-b-gray-300 rounded-none focus:outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="p-3 font-bold rounded text-lg bg-[#02a388] text-white">Login</button>
                <ToastContainer />
              </div>
              <div className="mt-4">
                <button
                  onClick={handleWithGoogle}
                  className=" mb-4 bg-black text-white rounded  font-semibold p-3 w-full flex items-center justify-center"
                >
                  <FcGoogle className="text-xl mr-3"></FcGoogle> Google
                </button>
              </div>
            </form>

            <p className="font-bold">
              New here ?{" "}
              <Link
                to="/register"
                className="text-blue-500  underline font-bold"
              >
                create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;