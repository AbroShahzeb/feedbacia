import {
  CategoryTag,
  UpvoteCount,
} from "../../../../../../../generalComponents";
import iconComment from "../../../../../../../assets/shared/icon-comments.svg";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const roadMaps = [
  {
    id: 0,
    title: "Planned",
    count: "0",
    icon: "bg-accent-peach",
    border: "border-accent-peach",
  },
  {
    id: 1,
    title: "In-Progress",
    count: "0",
    icon: "bg-primary",
    border: "border-primary",
  },
  {
    id: 2,
    title: "Live",
    count: "0",
    icon: "bg-accent-cyan",
    border: "border-accent-cyan",
  },
];

export const FeedbackCard = ({
  feedback,
  isRoadmapFeedback = false,
  activeTab = "",
}) => {
  const navigate = useNavigate();

  const activeRoadMap = roadMaps.filter(
    (roadmap) => roadmap.title === activeTab?.title
  )[0];

  return (
    <div
      className={`bg-grey-0 dark:bg-grey-600 rounded-[10px] p-6 md:px-8 md:py-7 md:flex md:items-start md:gap-10 ${
        isRoadmapFeedback &&
        activeRoadMap &&
        `border-t-4 ${activeRoadMap.border} `
      }`}
    >
      {isRoadmapFeedback && (
        <div className="flex items-center gap-2 text-xs text-grey-300 dark:text-grey-50 mb-4">
          <span
            className={`${activeRoadMap?.icon} size-2 rounded-full flex-shrink-0`}
          ></span>
          {activeRoadMap?.title}
        </div>
      )}
      <div className="hidden md:flex">
        <UpvoteCount upvotes={feedback.upvotes} />
      </div>
      <div>
        <div>
          <h3
            className="text-xs md:text-xl font-bold text-grey-400 dark:text-grey-100 hover:underline cursor-pointer"
            onClick={() => navigate(`/feedbacks/details/${feedback.id}`)}
          >
            {feedback.title}
          </h3>
          <p className="mt-[9px] md:mt-1 text-xs md:text-md text-grey-300 dark:text-grey-100/75">
            {feedback.description}
          </p>
          <div className="mt-2 md:mt-3">
            <CategoryTag tagName={feedback.category} />
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:ml-auto md:items-center md:gap-2 md:self-center dark:text-grey-100">
        <img src={iconComment} alt="Comments Icon" />
        <p>{feedback?.comments?.length}</p>
      </div>

      {/* For smaller Screens */}
      <div className="flex md:hidden mt-4 items-center gap-2 justify-between">
        <div className="block md:hidden">
          <UpvoteCount upvotes={feedback.upvotes} />
        </div>
        <div className="flex items-center gap-1 text-grey-400 dark:text-grey-100">
          <img src={iconComment} alt="Comments Icon" />
          <p
            className={`text-xs font-bold ${
              feedback?.comments?.length ? "opacity-100" : "opacity-50"
            }`}
          >
            {feedback?.comments?.length || 0}
          </p>
        </div>
      </div>
    </div>
  );
};
