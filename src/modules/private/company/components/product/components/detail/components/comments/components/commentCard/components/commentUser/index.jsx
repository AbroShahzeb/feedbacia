import { Button } from "../../../../../../../../../../../../../generalComponents";

export const CommentUser = ({ user }) => {
  return (
    <div className="flex items-center gap-4 md:gap-8">
      <div className="flex-shrink-0">
        <img
          src={user?.image}
          alt={`${user?.name} Profile`}
          className="size-10 rounded-full"
        />
      </div>
      <div className="text-left text-xs md:text-[14px]">
        <p className=" tracking-[-0.181px] text-grey-400 dark:text-grey-100 font-bold">
          {user?.name}
        </p>
        <p className="text-grey-300 dark:text-grey-100/50">@{user?.username}</p>
      </div>

      <div className="ml-auto">
        <Button label="Reply" variant="secondary-transparent" />
      </div>
    </div>
  );
};
