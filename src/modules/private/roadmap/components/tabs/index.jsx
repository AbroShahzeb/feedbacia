const tabs = [
  {
    id: 0,
    title: "Planned",
    desc: "Ideas prioritized for research",
    value: "planned",
    count: 2,
  },
  {
    id: 1,
    title: "In-Progress",
    desc: "Currently being developed",
    value: "in-progress",
    count: 3,
  },
  {
    id: 2,
    title: "Live",
    desc: "Released features",
    value: "live",
    count: 1,
  },
];

export const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex  border-b border-[#8C92B3]/25">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`flex-1 p-5 pb-4 border-b-4 text-xs font-bold text-grey-400 ${
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
