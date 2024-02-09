import { Link, NavLink } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../../../pages/Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import logo from "../../../assets/logo.svg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
    toast("sing up successfully");
  };
  return (
    <div className="bg-gray-50 top-0">
      <nav className="flex flex-col md:flex-row md:items-center justify-between px-10 py-3">
        <div className="nav-left flex items-center justify-between w-full md:w-fit">
          <div className="w-[6rem] md-[8rem]">
            <img src={logo} alt="" className="w-full"/>
          </div>
          <div className="menu-btn md:hidden flex items-center justify-between duration-1000 ">
            {menu ? (
              <p
                onClick={handleMenu}
                className="text-teal-500 text-4xl duration-1000 "
              >
                <RxCross2></RxCross2>
              </p>
            ) : (
              <p
                onClick={handleMenu}
                className="text-teal-500 text-4xl duration-1000 "
              >
                <IoMenuOutline></IoMenuOutline>
              </p>
            )}
          </div>
        </div>
        <div className="nav-center">
          <ul
            className={`flex flex-col md:flex-row items-center justify-center absolute md:static  ${
              menu ? "top-[3.4rem]" : "-top-48"
            }  rounded-md duration-500 py-4 px-3 z-10 `}
          >
            <li>
              <NavLink
                to={"/"}
                className=" px-5 py-1 text-[1.5rem] text-black font-semibold hover:text-[#3e7172]  duration-500 "
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/allServices"}
                className=" px-5 py-1 text-[1.5rem] text-black font-semibold hover:text-[#3e7172]  duration-500"
              >
                All Services
              </NavLink>
            </li>

            {user ? (
              <li>
                <NavLink
                  to={"/manageServices"}
                  className=" px-5 py-1 text-[1.5rem] text-black font-semibold hover:text-[#3e7172]  duration-500"
                >
                  Manage Service
                </NavLink>
              </li>
            ) : (
              ""
            )}
            {user ? (
              <li>
                <NavLink
                  to={"/dashboard"}
                  className=" px-5 py-1 text-[1.5rem] text-black font-semibold hover:text-[#3e7172]  duration-500"
                >
                  Dashboard
                </NavLink>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="nav-right hidden md:block ">
          {user ? (
            <>
              <button onClick={handleLogout}>
                <Link
                  // to={"/login"}
                  className="px-10 py-4 text-white bg-[#3e7172] text-xl font-semibold  rounded flex flex-col items-center justify-center  hover:transform hover:scale-110 duration-500"
                >
                  Sign Out
                </Link>
              </button>
            </>
          ) : (
            <>
              <button>
                <Link
                  to={"/login"}
                  className="px-10 py-4 text-xl font-semibold  bg-[#3e7172] text-white rounded flex flex-col items-center justify-center  hover:transform hover:scale-110 duration-500"
                >
                  Sign In
                </Link>
              </button>
              <ToastContainer />
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
