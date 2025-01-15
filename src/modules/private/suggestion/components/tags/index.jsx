import { CategoryTag } from "../../../../../generalComponents";

export const Tags = () => {
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

  return (
    <div className="bg-grey-0 md:p-6 rounded-[10px] flex flex-wrap  md:flex-1 gap-2 gap-y-[14px]">
      {tags.map((tag) => (
        <CategoryTag tagName={tag.label} key={tag.id} className="md:h-[38px]" />
      ))}
    </div>
  );
};
