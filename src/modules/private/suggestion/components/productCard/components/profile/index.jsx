import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <Link
        to="/profile"
        className="size-6 rounded-full bg-grey-50 backdrop-blur-2xl flex items-center justify-center text-[15px] leading-[15px] text-grey-400 font-bold"
      >
        {user?.name?.at(0)?.toUpperCase()}
      </Link>
    </div>
  );
};
