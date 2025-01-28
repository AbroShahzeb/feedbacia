import dotLogo from "../../public/favicon.svg";

export const Logo = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 items-center justify-items-center h-10 md:h-12">
      <div className="row-start-1 row-end-2 col-start-1 col-end-2">
        <img src={dotLogo} alt="dot" className="size-10 md:size-12" />
      </div>
      <span className="hidden sm:block row-start-1 row-end-2 col-start-1 col-end-2 z-10 text-[30px] leading-[30px] font-bold text-grey-500 dark:text-grey-50">
        feedbacia
      </span>
    </div>
  );
};
