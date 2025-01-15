import { useEffect, useState } from "react";
import { productRequests } from "../../../../../data";
import { FeedbackCard } from "../../../suggestion/components";
import { Tabs } from "../tabs";

export const MobileRoadmap = () => {
  const [activeTab, setActiveTab] = useState({
    id: 0,
    title: "Planned",
    desc: "Ideas prioritized for research",
    value: "planned",
    count: 2,
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
          <p className="text-xl font-bold text-grey-400">
            {activeTab?.title} ({activeTab?.count})
          </p>
          <p className="text-xs text-grey-300">{activeTab?.desc}</p>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-4 md:hidden">
        {feedbacks?.map((feedback) => (
          <FeedbackCard
            feedback={feedback}
            isRoadmapFeedback={true}
            activeTab={activeTab}
          />
        ))}
      </div>
    </>
  );
};
