import { IconArrowUp } from "../assets/svgAssetsComponents/IconArrowUp";

export const UpvoteCount = ({ upvotes, upvoted = false, onClick }) => {
  return (
    <button
      className={` text-[13px] p-2 rounded-[10px] h-[53px] font-bold flex flex-col gap-2 items-center justify-end transition-all  ${
        upvoted
          ? "bg-secondary text-grey-0"
          : "bg-grey-100 text-grey-400 hover:bg-[#CFD7FF]"
      }`}
      onClick={() => onClick && onClick()}
    >
      <span className={`${upvoted ? "text-grey-0" : "text-secondary"}`}>
        <IconArrowUp />
      </span>
      {upvotes}
    </button>
  );
};
