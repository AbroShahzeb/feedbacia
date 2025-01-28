import { ProductCard } from "../productCard";
import { Roadmaps } from "../roadmaps";
import { Tags } from "../tags";

export const Sidebar = () => {
  return (
    <div className="hidden md:flex md:flex-row md:gap-[10px] xl:w-[255px] xl:flex xl:flex-col xl:gap-6 xl:flex-shrink-0 xl:sticky xl:top-[112px]">
      <ProductCard />
      <Tags />
      <Roadmaps />
    </div>
  );
};
