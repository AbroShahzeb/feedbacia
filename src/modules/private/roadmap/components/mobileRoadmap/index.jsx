import { useEffect, useState } from "react";
import { productRequests } from "../../../../../data";
import { FeedbackCard } from "../../../suggestion/components";
import { Tabs } from "../tabs";
import { RoadmapCard } from "../roadmapCard";

export const MobileRoadmap = () => {
  const [activeTab, setActiveTab] = useState({
    id: 0,
    title: "Planned",

    icon: "bg-accent-peach",
    border: "border-accent-peach",
    value: "planned",
    desc: "Ideas prioritized for research",
  });

  const [feedbacks, setFeedbacks] = useState(productRequests);

  const filterFeedbacks = (activeTab) => {
    let baseFeedbacks = productRequests;
    const updatedFeedbacks = baseFeedbacks.filter(
      (feedback) => feedback.status === activeTab.value
    );
    setFeedbacks(updatedFeedbacks);
  };

  useEffect(() => {
    filterFeedbacks(activeTab);
  }, [activeTab]);
  return (
    <>
      <div className="md:hidden">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="p-6 md:hidden">
        <div className="flex flex-col gap-1">
          <p className="text-xl font-bold text-grey-400 dark:text-grey-100">
            {activeTab?.title} ({feedbacks?.length})
          </p>
          <p className="text-xs text-grey-300 dark:text-grey-100/75">
            {activeTab?.desc}
          </p>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-4 md:hidden">
        {feedbacks?.map((feedback) => (
          <RoadmapCard feedback={feedback} activeTab={activeTab} />
        ))}
      </div>
    </>
  );
};
