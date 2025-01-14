import { CustomDropdown } from "./CustomDropdown";

export const FeedbackStatusDropdown = ({
  selectedOption,
  onSelect,
  className = "",
  placeholder = "",
}) => {
  const options = [
    {
      label: "Planned",
      value: "planned",
    },
    {
      label: "In-progress",
      value: "in-progress",
    },
    {
      label: "Live",
      value: "live",
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
