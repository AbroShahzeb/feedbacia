import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <Link
        to="/profile"
        className="size-10 md:size-12 rounded-full  flex items-center justify-center text-[20px] leading-[15px] text-grey-100 font-semibold bg-suggestion-header-mobile bg-center bg-cover"
      >
        {user?.name?.at(0)?.toUpperCase()}
      </Link>
    </div>
  );
};
