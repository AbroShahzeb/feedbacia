import { Link, useNavigate, NavLink } from "react-router-dom";
import {
  IconDelete,
  IconLogout,
} from "../../../../../assets/svgAssetsComponents";
import { useDispatch } from "react-redux";
import { clearCredentials } from "../../../../public/auth/redux/slice";

export const Links = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    dispatch(clearCredentials());
    navigate("/auth/login");
  };
  return (
    <div className="bg-grey-0 dark:bg-grey-600 p-4 gap-2 rounded-[10px] flex flex-col dark:text-grey-50 text-grey-600  md:flex-1  mb-6 md:mb-0 ">
      <NavLink
        to={"/profile/details"}
        className={({ isActive }) =>
          `p-3 hover:bg-grey-50 dark:hover:bg-grey-500 rounded-[8px] ${
            isActive && "bg-grey-100  dark:bg-grey-500"
          }`
        }
      >
        Profile Details
      </NavLink>
      <NavLink
        to={"/profile/convert-to-product"}
        className={({ isActive }) =>
          `p-3 hover:bg-grey-50 dark:hover:bg-grey-500 rounded-[8px] ${
            isActive && "bg-grey-100  dark:bg-grey-500"
          }`
        }
      >
        Convert to Product
      </NavLink>
      <button
        className="p-3 hover:bg-grey-50 dark:hover:bg-grey-500 rounded-[8px] flex items-center justify-between gap-2"
        onClick={handleLogout}
      >
        Logout
        <span>
          <IconLogout />
        </span>
      </button>
      <div className="p-3 hover:bg-grey-50 dark:hover:bg-grey-500 rounded-[8px] text-red-500 dark:text-red-400 flex items-center justify-between gap-2">
        Delete Account
        <span>
          <IconDelete />
        </span>
      </div>
    </div>
  );
};
