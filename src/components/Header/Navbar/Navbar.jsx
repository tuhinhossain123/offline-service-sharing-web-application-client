import { useContext } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { AuthContext } from "../../../pages/Provider/AuthProvider";

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
          to={`/details/${id}`}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-slate-600 underline font-medium"
              : ""
          }
        >
          Details
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-slate-600 underline font-medium"
                  : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " "
                  : ""
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
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </NavLink>
          </li>
        </>
      )}
   {
    user ? "" : <>
    
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
   }
    </>
  );
  return (
    <div className="px-10">
      <div className="navbar bg-base-100">
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
          <h2 className="text-xl font-serif font-semibold text-orange-500">
            Social Events
          </h2>
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
                  className="btn bg-[#02a388] text-white"
                >
                  Sing Out
                </button>
              </div>
            </>
          ) : (
            <Link to="/login">
              <button className="btn bg-[#02a388] text-white">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
