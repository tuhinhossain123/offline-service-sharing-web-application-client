import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import loginImg from "../../assets/login.png"

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const imgUrl = e.target.text.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");

    if (!/^.{6,}$/.test(password)) {
      setError("password must be 6 character");
      return;
    }

    if (!/.*[A-Z].*/.test(password)) {
      setError("password must 1 capital letter");
      return;
    }

    if (!/.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-=].*/.test(password)) {
      setError("password must be 1 special character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        toast.success("User Registration successfully");
        // Swal.fire({
        //   icon: "success",
        //   title: "Success",
        //   text: "User Registration successfully",
        //   footer: '<a href="">Why do I have this issue?</a>',
        // });
        updateProfile(result.user, { displayName: name, photoURL: imgUrl });
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        toast.error(error);
        console.error(error);
      });
  };
  return (
    <div className="mt-16 mb-10">
      <div className="hero-content flex-col md:flex-row  lg:gap-20 w-full mx-auto gap-10">
        <div className="lg:w-[70%] hidden md:block">
          <img src={loginImg} alt="" className="w-full h-full" />
        </div>
        <div className=" lg:w-[60%] w-full mx-auto shadow-2xl rounded-lg bg-[#3e7172]">
          <h1 className="text-4xl font-semibold text-white pl-10 pt-10">
            Sign Up
          </h1>
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <div className="form-control  ">
                <label className="label">
                  <span className="label-text text-white text-lg">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="input text-black bg-white input-bordered focus:outline-none"
                  required
                />
              </div>
              <div className="form-control  ">
                <label className="label">
                  <span className="label-text text-white text-lg">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  className="input text-black bg-white input-bordered focus:outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-lg">Img URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Img URL"
                  name="text"
                  className="input text-black bg-white input-bordered focus:outline-none"
                />
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
                  className="input text-black bg-white input-bordered focus:outline-none"
                  required
                />
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
              </div>
              <div className="form-control mt-6">
                <button className="py-2 px-2 font-semibold rounded-md text-lg bg-white text-black">
                  Sign Up
                </button>
              </div>
            </form>

            <p className="font-semibold  pt-1">
              <span className="text-white">
                {" "}
                Already have an account please ?{" "}
              </span>
              <Link to="/login" className="text-gray-100 underline pl-2">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
