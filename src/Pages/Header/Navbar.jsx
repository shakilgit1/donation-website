import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-10/12 mx-auto py-6 items-center">
      <div>
        <img className="w-2/3" src="/images/Logo.png" alt="" />
      </div>
      <div className="flex gap-6 font-semibold">

        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/donation"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
          }
        >
          Donation
        </NavLink>
        <NavLink
          to="/statistics"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
          }
        >
          Statistics
        </NavLink>
        
      </div>
    </nav>
  );
};

export default Navbar;
