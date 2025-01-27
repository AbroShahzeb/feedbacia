import { useSelector } from "react-redux";
import { ThemeToggler } from "../../../../../generalComponents";
import { Profile } from "../../../suggestion/components/productCard/components";

export const ProfileCard = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="md:bg-suggestion-header-tablet md:p-6 md:flex-1 md:pt-[103px] xl:bg-suggestion-header-desktop bg-no-repeat xl:p-6 md:bg-cover md:rounded-[10px] text-grey-0 xl:pt-[62px] relative">
      <div className="absolute right-6 top-6">
        <ThemeToggler />
      </div>

      <div className="absolute top-6 left-6">
        <Profile />
      </div>
      <div>
        <h3 className="text-2xl font-bold">{user.name}</h3>
        <p className="text-sm font-medium opacity-75">{user.email}</p>
      </div>
    </div>
  );
};
