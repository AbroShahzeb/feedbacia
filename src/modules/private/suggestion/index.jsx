import {
  Button,
  CategoryTag,
  SortByDropdown,
} from "../../../generalComponents";
import iconSuggestions from "../../../assets/suggestions/icon-suggestions.svg";
import { useState } from "react";
import { EmptySuggestion, FeedbackList } from "./components";
import { Link } from "react-router-dom";

import iconMenu from "../../../assets/shared/mobile/icon-hamburger.svg";

const tags = [
  {
    id: 0,
    label: "All",
  },
  {
    id: 1,
    label: "UI",
  },
  {
    id: 2,
    label: "UX",
  },
  {
    id: 3,
    label: "Enhancement",
  },
  {
    id: 4,
    label: "Bug",
  },
  {
    id: 5,
    label: "Feature",
  },
];

const roadMaps = [
  {
    id: 0,
    title: "Planned",
    count: "0",
    icon: "bg-accent-peach",
  },
  {
    id: 1,
    title: "In-Progress",
    count: "0",
    icon: "bg-primary",
  },
  {
    id: 2,
    title: "Live",
    count: "0",
    icon: "bg-accent-cyan",
  },
];

export const Suggestion = () => {
  const [sortBy, setSortBy] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  return (
    <main className="w-full min-h-screen bg-grey-50">
      <div className="xl:max-w-[1110px] xl:mx-auto md:flex md:flex-col md:gap-10 xl:flex-row xl:items-start xl:gap-[30px] md:px-10 md:pt-[56px] md:pb-[113px] xl:pt-[94px] xl:pb-[129px] ">
        {/* Sidebar Start Tablet Screens */}
        <div className="hidden md:flex md:flex-row md:gap-[10px] xl:w-[255px] xl:flex xl:flex-col xl:gap-6 xl:flex-shrink-0">
          {/* Company/Product Card Start */}
          <div className="md:bg-suggestion-header-tablet md:p-6 md:flex-1 md:pt-[103px] xl:bg-suggestion-header-desktop bg-no-repeat xl:p-6 md:bg-cover md:rounded-[10px] text-grey-0 xl:pt-[62px]">
            <h3 className="text-2xl font-bold">Frontend Mentor</h3>
            <p className="text-sm font-medium opacity-75">Feedback board</p>
          </div>
          {/* Company/Product Card End */}

          {/* Tags Start */}
          <div className="bg-grey-0 md:p-6 rounded-[10px] flex flex-wrap gap-2 md:flex-1">
            {tags.map((tag) => (
              <CategoryTag
                tagName={tag.label}
                key={tag.id}
                className="md:h-[38px]"
              />
            ))}
          </div>
          {/* Tags End */}

          {/* Roadmap Start */}
          <div className="bg-grey-0 md:pt-5 md:p-6 xl:p-6 rounded-[10px] flex flex-col  xl:gap-6 md:flex-1">
            <div className="flex items-center gap-2 justify-between md:mb-6 xl:mb-0">
              <h3>Roadmap</h3>
              <div>
                <Button label="View" variant="link" disabled />
              </div>
            </div>
            <div className="md:flex md:flex-col md:gap-2 ">
              {roadMaps.map((stage) => (
                <div
                  key={stage.id}
                  className="flex items-center gap-2 justify-between w-full"
                >
                  <span
                    className={`size-2 rounded-full flex-shrink-0 ${stage.icon}`}
                  ></span>
                  <p className="mr-auto text-md text-grey-300">{stage.title}</p>
                  <p className="text-md font-semibold text-grey-300">
                    {stage.count}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Roadmap End */}
        </div>
        {/* Sidebar End Tablet Screens*/}

        <div className="px-6 py-4 bg-suggestion-header-mobile bg-no-repeat bg-cover flex items-center justify-between gap-2 md:hidden">
          <div className="text-grey-0">
            <h2 className="text-sm font-bold">Frontend Mentor</h2>
            <p className="text-xs opacity-75">Feedback Board</p>
          </div>
          <button>
            <img src={iconMenu} alt="Hamburger Icon" className="size-5" />
          </button>
        </div>

        {/* Main Body Start */}
        <div className="flex flex-col gap-6 w-full">
          {/* Main Body Header Start */}
          <div className="px-6 py-2 md:py-6 md:rounded-[10px] bg-grey-500 flex items-center justify-between gap-2 h-[56px] md:h-[72px]">
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

            <Link to="/add-feedback">
              <Button
                label="+ Add Feedback"
                className="h-[40px] md:h-auto flex items-center"
              />
            </Link>
          </div>
          {/* Main Body Header End */}

          {/* Suggestion Content Start */}

          {suggestions && suggestions.length > 0 ? (
            <FeedbackList feedbacks={suggestions} />
          ) : (
            <EmptySuggestion />
          )}

          {/* Sugestion Content End */}
        </div>
        {/* Main Body End */}
      </div>
    </main>
  );
};
