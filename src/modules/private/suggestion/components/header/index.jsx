import { Button, SortByDropdown } from "../../../../../generalComponents";
import iconSuggestions from "../../../../../assets/suggestions/icon-suggestions.svg";
import { Link } from "react-router-dom";

export const Header = ({ sortBy, setSortBy }) => {
  return (
    <div className="px-6 py-2 md:py-6 md:rounded-[10px] bg-grey-500 dark:bg-grey-500 flex items-center justify-between gap-2 h-[56px] md:h-[72px] xl:sticky xl:top-[112px]">
      <div className="mr-4 hidden md:block">
        <img src={iconSuggestions} alt="Bulb Icon" className="size-6" />
      </div>
      <div className="text-grey-0 text-xl font-bold mr-[38px] hidden md:block">
        <span>0 </span>
        <span>Suggestions</span>
      </div>

      <div className="mr-auto">
        <SortByDropdown selectedOption={sortBy} onSelect={setSortBy} />
      </div>

      <Link to="/feedbacks/add">
        <Button
          label="+ Add Feedback"
          className="h-[40px] md:h-auto flex items-center"
        />
      </Link>
    </div>
  );
};
