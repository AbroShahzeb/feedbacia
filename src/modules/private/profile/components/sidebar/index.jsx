import { Links } from "../Links";
import { ProfileCard } from "../profileCard";

export const Sidebar = () => {
  return (
    <div className="w-full md:max-w-[255px] md:flex flex-col md:gap-6 xl:flex-shrink-0 px-6 md:px-0">
      <ProfileCard />
      <div className="hidden md:block">
        <Links />
      </div>
    </div>
  );
};
