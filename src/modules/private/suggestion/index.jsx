import { useState } from "react";
import {
  EmptySuggestion,
  FeedbackList,
  Header,
  MobileNav,
  Sidebar,
} from "./components";

export const Suggestion = () => {
  const [sortBy, setSortBy] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  return (
    <main className="w-full min-h-screen bg-grey-50 dark:bg-grey-950">
      <div className="xl:max-w-[1110px] xl:px-0 xl:mx-auto md:flex md:flex-col md:gap-10 xl:flex-row xl:items-start xl:gap-[15px] md:px-10 md:pt-[56px] md:pb-[113px] xl:pt-[94px] xl:pb-[129px]">
        <Sidebar />

        <MobileNav />

        {/* Main Body Start */}
        <div className="flex flex-col gap-6 w-full flex-1">
          <Header sortBy={sortBy} setSortBy={setSortBy} />
          {suggestions && suggestions.length > 0 ? (
            <FeedbackList feedbacks={suggestions} />
          ) : (
            <EmptySuggestion />
          )}
        </div>
        {/* Main Body End */}
      </div>
    </main>
  );
};
