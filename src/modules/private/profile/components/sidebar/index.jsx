import { Links } from "../Links";
import { ProfileCard } from "../profileCard";

export const Sidebar = () => {
  return (
    <div className="hidden md:w-[255px] md:flex md:flex-col md:gap-6 xl:flex-shrink-0">
      <ProfileCard />
      <Links />
    </div>
  );
};
