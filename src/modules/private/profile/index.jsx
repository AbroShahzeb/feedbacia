import { Sidebar } from "./components";
import { Outlet } from "react-router-dom";

export const Profile = () => {
  return (
    <main className="w-full min-h-screen bg-grey-50 dark:bg-grey-950">
      <div className="w-full flex flex-col  xl:max-w-[1110px]  xl:mx-auto md:flex-row md:gap-10 justify-between items-start gap-[15px] md:px-10  md:pb-[113px] xl:pb-[129px] xl:px-0">
        <Sidebar />

        <div className="flex-1 px-6 md:px-0 w-full pb-12 mt-10 md:mt-0">
          <Outlet />
        </div>
      </div>
    </main>
  );
};
