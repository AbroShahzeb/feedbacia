const tabs = [
  {
    id: 0,
    title: "Planned",
    count: "2",
    icon: "bg-accent-peach",
    border: "border-accent-peach",
    value: "planned",
    desc: "Ideas prioritized for research",
  },
  {
    id: 1,
    title: "In-Progress",
    count: "3",
    icon: "bg-primary",
    border: "border-primary",
    value: "in-progress",
    desc: "Currently being developed",
  },
  {
    id: 2,
    title: "Live",
    count: "1",
    icon: "bg-accent-cyan",
    border: "border-accent-cyan",
    value: "live",
    desc: "Released features",
  },
];

export const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex  border-b border-[#8C92B3]/25">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`flex-1 p-5 pb-4 border-b-4 text-xs font-bold text-grey-400 dark:text-grey-100/80 ${
            tab.id === activeTab.id ? "border-primary" : "border-transparent"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.title} ({tab.count})
        </button>
      ))}
    </div>
  );
};
