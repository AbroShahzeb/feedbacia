export const CategoryTag = ({
  tagName = "",
  onClick,
  isSelected = false,
  clickable = true,
  className = "",
}) => {
  return (
    <button
      className={` text-[13px] py-[6px] px-4 rounded-[10px] font-semibold   ${
        isSelected
          ? "bg-secondary text-grey-0"
          : "bg-grey-100 text-secondary hover:bg-[#CFD7FF]"
      } ${className}`}
      onClick={() => onClick && onClick()}
    >
      {tagName}
    </button>
  );
};
