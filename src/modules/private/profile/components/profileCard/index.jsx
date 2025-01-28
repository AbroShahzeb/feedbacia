import { useSelector } from "react-redux";
import { ThemeToggler } from "../../../../../generalComponents";
import { Profile } from "../../../suggestion/components/productCard/components";

export const ProfileCard = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="bg-suggestion-header-mobile md:bg-suggestion-header-tablet p-6 md:flex-1 xl:bg-suggestion-header-desktop bg-no-repeat bg-cover rounded-[10px] text-grey-0 relative">
      <div>
        <h3 className="text-2xl font-bold">{user?.name}</h3>
        <p className="text-sm font-medium opacity-75">{user?.email}</p>
      </div>
    </div>
  );
};
