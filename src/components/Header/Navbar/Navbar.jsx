import { useContext } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { AuthContext } from "../../../pages/Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../../assets/companylogo.png"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { id } = useParams();

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("login success"))
      .catch((error) => {
        console.error(error);
      });
  };

  const links = (
    <>
      <li className="text-xl font-semibold text-slate-700">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#5f988f] font-medium"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-xl font-semibold text-slate-700">
        <NavLink
          to="/allServices"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#5f988f]  font-medium"
              : ""
          }
        >
          All Services
        </NavLink>
      </li>
      <li className="text-xl font-semibold text-slate-700">
        <NavLink
          to="/contactUs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#5f988f] font-medium"
              : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
      {user && (
        <>
          <li className="text-xl font-semibold text-slate-700">
            <NavLink
              to="/manageServices"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#5f988f]  font-medium"
                  : ""
              }
            >
              Manage Services
            </NavLink>
          </li>
          <li className="text-xl font-semibold text-slate-700">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " " : ""
              }
            >
              <div className="dropdown dropdown-bottom">
                <label
                  tabIndex={0}
                  className="text-xl font-semibold text-slate-700"
                >
                  Dashboard
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content lg:z-[20] menu p-2 shadow-2xl bg-[#3e7172] text-white rounded-box w-52"
                >
                  <li className="text-xl">
                    <a>My-services</a>
                  </li>
                  <li className="text-lg font-semibold ">
                    <NavLink
                      to="/addServices"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-slate-600 font-medium"
                          : ""
                      }
                    >
                      Add Service
                    </NavLink>
                  </li>
                  <li className="text-lg font-semibold">
                    <NavLink
                      to="/mySchedules"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-slate-600 font-medium"
                          : ""
                      }
                    >
                      My Schedules
                    </NavLink>
                  </li>
                  <li className="text-lg font-semibold">
                    <NavLink
                      to="/myPendingWork"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-slate-600 font-medium"
                          : ""
                      }
                    >
                      My Pending Work
                    </NavLink>
                  </li>
                </ul>
              </div>
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="md:px-20 py-2 bg-gray-50">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52"
            >
              {links}
            </ul>
          </div>
          <div className="hidden md:block">
            {/* <img
              src="https://demo.phlox.pro/agency-tour/wp-content/uploads/sites/333/2020/12/logo1.svg"
              alt=""
            /> */}
            <h2 className="text-5xl font-bold text-[#3e7172]">Tour & Guid</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-bottom flex justify-center mr-12 md:mr-4">
            <label tabIndex={0} className="text-black">
              {user ? (
                <>
                  {" "}
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </>
              ) : (
                <FaUserCircle className="text-6xl" />
              )}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[20] menu px-4 text-center shadow-2xl bg-[#3e7172] text-white rounded w-40"
            >
              {user ? (
                <button
                  onClick={handleLogOut}
                  className=" pt-2 pb-1 text-lg font-semibold rounded   text-white"
                >
                  Sign Out
                </button>
              ) : (
                <>
                  <Link to="/register">
                    <button className=" pt-2 pb-2  text-lg font-semibold rounded   text-white">
                      Sign Up
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className=" pt-2 pb-2  text-lg font-semibold rounded   text-white">
                      Sign In
                    </button>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
