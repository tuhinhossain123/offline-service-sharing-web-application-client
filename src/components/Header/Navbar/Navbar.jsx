import { useContext } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { AuthContext } from "../../../pages/Provider/AuthProvider";
import logo from "../../../assets/logo.jpeg";

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
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-slate-600 underline font-medium"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
            <NavLink
              to="/allServices"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-slate-600 underline font-medium"
                  : ""
              }
            >
             All Services
            </NavLink>
          </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/manageServices"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-slate-600 underline font-medium"
                  : ""
              }
            >
              Manage Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " " : ""
              }
            >
              <div className="dropdown dropdown-bottom">
                <label tabIndex={0} className="text-black">
                  Dashboard
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>My-services</a>
                  </li>
                  <li>
            <NavLink
              to="/addServices"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-slate-600 underline font-medium"
                  : ""
              }
            >
              Add Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mySchedules"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-slate-600 underline font-medium"
                  : ""
              }
            >
              My Schedules
            </NavLink>
          </li>
                </ul>
              </div>
            </NavLink>
          </li>
        </>
      )}
      {user ? (
        ""
      ) : (
        <>
          <li>
            <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-slate-600 underline font-medium"
                  : ""
              }
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-slate-600 underline font-medium"
                  : ""
              }
            >
              Login
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="px-10 bg-teal-50">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <div className="">
            <img src={logo} alt="" className="w-14 h-14 rounded-full mx-auto mb-0"/>
            <h2 className="text-sm font-semibold ml-2 font-mono text-sky-600 text-center">Local Tours & Guide</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="flex">
                <div className="hidden  md:flex items-center">
                  <span className="mr-4">{user.email}</span>
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </label>
                </div>
                <button
                  onClick={handleLogOut}
                  className="p-3 font-bold rounded  bg-[#02a388] text-white"
                >
                  Sing Out
                </button>
              </div>
            </>
          ) : (
            <Link to="/login">
              <button className="p-3 font-bold rounded  bg-[#02a388] text-white">Sing In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
