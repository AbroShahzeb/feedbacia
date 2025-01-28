import { ChangeMe, ChangePassword } from "./components";
import { useSelector } from "react-redux";

export const ProfileDetails = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="flex  gap-10 md:gap-8 flex-1 w-full flex-col lg:flex-row  bg-grey-0 dark:bg-grey-600 rounded-[10px] p-8 items-start   xl:mx-0">
      <div className="lg:flex-[40%]  flex items-center justify-center lg:py-6">
        {user?.picture ? (
          <img src={user?.picture} alt={`${user?.name} Avatar`} />
        ) : (
          <div className="size-[100px] lg:size-[150px] rounded-full bg-suggestion-header-desktop bg-cover text-[30px] leading-[30px] font-medium text-grey-100 flex items-center justify-center">
            {user?.name?.charAt(0)?.toUpperCase()}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-10 lg:flex-[60%] w-full">
        <ChangeMe />
        <ChangePassword />
      </div>
    </div>
  );
};
