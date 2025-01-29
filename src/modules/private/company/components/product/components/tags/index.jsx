import { useEffect, useState } from "react";
import { CategoryTag } from "../../../../../../../generalComponents";

export const Tags = ({ product }) => {
  const [tags, setTags] = useState([
    {
      id: 0,
      label: "All",
    },
  ]);

  const prepareTags = () => {
    const tagsCopy = [...tags];
    product.tags.map((tag, index) =>
      tagsCopy.push({ id: index + 1, label: tag })
    );
    setTags(tagsCopy);
  };
  useEffect(() => {
    if (product) {
      prepareTags();
    }
  }, [product]);

  return (
    <div className="bg-grey-0 dark:bg-grey-600 p-6 rounded-[10px] flex flex-wrap  md:flex-1 gap-2 gap-y-[14px] mb-6 md:mb-0">
      {tags.map((tag) => (
        <CategoryTag tagName={tag.label} key={tag.id} className="md:h-[38px]" />
      ))}
    </div>
  );
};
