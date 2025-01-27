import { Link } from "react-router-dom";
import { CategoryTag } from "../../../../../generalComponents";
import {
  IconDelete,
  IconLogout,
} from "../../../../../assets/svgAssetsComponents";
import { useDispatch } from "react-redux";
import { clearCredentials } from "../../../../public/auth/redux/slice";

export const Links = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    dispatch(clearCredentials());
  };
  return (
    <div className="bg-grey-0 dark:bg-grey-600 p-6 rounded-[10px] flex flex-col dark:text-grey-50 text-grey-600  md:flex-1  mb-6 md:mb-0 ">
      <Link
        to={"/profile"}
        className="p-3 hover:bg-grey-50 dark:hover:bg-grey-500 rounded-[8px]"
      >
        Profile Details
      </Link>
      <Link
        to={"/profile/become-company"}
        className="p-3 hover:bg-grey-50 dark:hover:bg-grey-500 rounded-[8px]"
      >
        Convert to Company
      </Link>
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
