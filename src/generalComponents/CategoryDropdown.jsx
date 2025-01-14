import { CustomDropdown } from "./CustomDropdown";

export const CategoryDropdown = ({
  selectedOption,
  onSelect,
  className = "",
  placeholder = "",
}) => {
  const options = [
    {
      label: "Feature",
      value: "feature",
    },
    {
      label: "UI",
      value: "ui",
    },
    {
      label: "UX",
      value: "ux",
    },
    {
      label: "Enhancement",
      value: "enhancement",
    },
  ];

  return (
    <CustomDropdown
      onSelect={onSelect}
      selectedOption={selectedOption}
      options={options}
      className={className}
      placeholder={placeholder}
    />
  );
};
