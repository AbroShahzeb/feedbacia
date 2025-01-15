import { useState } from "react";
import { IconArrowUp } from "../assets/svgAssetsComponents/IconArrowUp";
import { CustomDropdown } from "./CustomDropdown";

export const SortByDropdown = ({ selectedOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    {
      label: "Most Upvotes",
      value: "most-upvotes",
    },
    {
      label: "Least Upvotes",
      value: "least-upvotes",
    },
    {
      label: "Most Comments",
      value: "most-comments",
    },
    {
      label: "Least Comments",
      value: "least-comments",
    },
  ];

  return (
    <CustomDropdown
      onSelect={onSelect}
      selectedOption={selectedOption}
      options={options}
      setOpen={setIsOpen}
      customOverlay={
        <button className="flex items-center justify-start md:justify-between  text-grey-100/75 text-[13px] md:text-[14px] font-bold gap-[9px]">
          <div>
            <span className="font-normal">Sort by : </span>
            <span>{selectedOption?.label}</span>
          </div>
          <span className={`${isOpen ? "rotate-0" : "rotate-180"}`}>
            <IconArrowUp />
          </span>
        </button>
      }
    />
  );
};
