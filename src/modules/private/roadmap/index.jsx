import { Header, MobileRoadmap, RoadmapCard } from "./components";
import { productRequests } from "../../../data";
import { useState } from "react";

export const Roadmap = () => {
  const [feedbacks, setFeedbacks] = useState(productRequests);
  const tabs = [
    {
      id: 0,
      title: "Planned",
      count: "0",
      icon: "bg-accent-peach",
      border: "border-accent-peach",
      value: "planned",
      desc: "Ideas prioritized for research",
    },
    {
      id: 1,
      title: "In-Progress",
      count: "0",
      icon: "bg-primary",
      border: "border-primary",
      value: "in-progress",
      desc: "Currently being developed",
    },
    {
      id: 2,
      title: "Live",
      count: "0",
      icon: "bg-accent-cyan",
      border: "border-accent-cyan",
      value: "live",
      desc: "Released features",
    },
  ];

  const filterFeedbacks = (roadmapTitle) => {
    return productRequests.filter(
      (feedback) => feedback.status === roadmapTitle
    );
  };

  return (
    <main className="md:px-10  md:pb-[95px] bg-grey-50 dark:bg-grey-950 min-h-screen py-10">
      <Header />

      <MobileRoadmap />

      <div className="hidden md:flex gap-[10px] max-w-[1110px] mx-auto">
        {tabs.map((tab) => (
          <div className="flex-1">
            <div className="mt-8 mb-6">
              <h3 className="text-[14px] font-bold text-grey-400 dark:text-grey-100 leading-[-0.194px]">
                {tab.title}
              </h3>
              <p className="text-[14px] text-grey-300 mt-1 dark:text-grey-100/75">
                {tab.desc}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {filterFeedbacks(tab.value)?.map((filteredFeedback) => (
                <RoadmapCard feedback={filteredFeedback} activeTab={tab} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
