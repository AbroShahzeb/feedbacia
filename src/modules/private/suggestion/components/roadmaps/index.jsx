import { Link } from "react-router-dom";
import { Button } from "../../../../../generalComponents";

export const Roadmaps = () => {
  const roadMaps = [
    {
      id: 0,
      title: "Planned",
      count: "2",
      icon: "bg-accent-peach",
    },
    {
      id: 1,
      title: "In-Progress",
      count: "3",
      icon: "bg-primary",
    },
    {
      id: 2,
      title: "Live",
      count: "1",
      icon: "bg-accent-cyan",
    },
  ];

  return (
    <div className="bg-grey-0 dark:bg-grey-600 md:pt-5 p-6 rounded-[10px] flex flex-col  xl:gap-6 md:flex-1">
      <div className="flex items-center gap-2 justify-between mb-6 xl:mb-0">
        <h3 className="dark:text-grey-50">Roadmap</h3>
        <Link to="/roadmap">
          <Button label="View" variant="link" />
        </Link>
      </div>
      <div className="flex flex-col gap-2 ">
        {roadMaps.map((stage) => (
          <div
            key={stage.id}
            className="flex items-center gap-2 justify-between w-full"
          >
            <span
              className={`size-2 rounded-full flex-shrink-0 ${stage.icon}`}
            ></span>
            <p className="mr-auto text-md text-grey-300 dark:text-grey-50">
              {stage.title}
            </p>
            <p className="text-md font-semibold text-grey-300 dark:text-grey-50">
              {stage.count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
