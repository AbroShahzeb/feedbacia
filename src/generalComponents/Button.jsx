import { IconArrowLeft } from "../assets/svgAssetsComponents/IconArrowLeft";

export const Button = ({
  className = "",
  label = "",
  disabled = false,
  variant = "primary",
  onClick,
  type = "button",
}) => {
  const variants = {
    primary:
      "pb-[11px] pt-[13px] px-3 h-[44px] rounded-[10px] bg-primary text-grey-100 text-[14px] font-bold leading-normal hover:bg-[#C75AF6]",
    secondary:
      "pb-[11px] pt-[13px] px-3 h-[44px] rounded-[10px] bg-secondary text-grey-100 text-[14px] font-bold leading-normal hover:bg-[#7C91F9]",
    tertiary:
      "pb-[11px] pt-[13px] px-3 h-[44px] rounded-[10px] bg-grey-400 text-grey-100 text-[14px] font-bold leading-normal hover:bg-[#656EA3]",
    danger:
      "pb-[11px] pt-[13px] px-3 h-[44px] rounded-[10px] bg-[#D73737] text-grey-100 text-[14px] font-bold leading-normal hover:bg-[#E98888]",
    back: "py-4 px-10 h-[53px] rounded-[10px] bg-grey-500 text-grey-100 text-[14px] font-bold leading-normal hover:underline ",
    "back-transparent":
      "text-grey-300 text-[14px] font-bold leading-normal hover:underline",
  };
  return (
    <button
      className={`${variants[variant]} ${className} ${
        (variant === "back" || variant === "back-transparent") &&
        "flex items-center gap-4"
      } transition-all`}
      disabled={disabled}
      onClick={() => onClick && onClick()}
    >
      {(variant === "back" || variant === "back-transparent") && (
        <span className="text-secondary">
          <IconArrowLeft />
        </span>
      )}
      {label}
    </button>
  );
};
