import { useState } from "react";
import {
  EmptySuggestion,
  FeedbackList,
  Header,
  MobileNav,
  Sidebar,
} from "./components";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../../../../services/productApi";

export const Product = () => {
  const [sortBy, setSortBy] = useState("");
  const [suggestions, setSuggestions] = useState(["1"]);

  const { productId } = useParams();
  console.log("Product Id", productId);

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getProductById(productId),
    queryKey: ["product", productId],
    enabled: !!productId,
  });

  const product = data?.data?.product;

  console.log("Product Data", product);

  return (
    <main className="w-full min-h-screen bg-grey-50 dark:bg-grey-950">
      <div className="xl:max-w-[1110px] xl:px-0 xl:mx-auto md:flex md:flex-col md:gap-10 xl:flex-row xl:items-start xl:gap-[15px] md:px-10  md:pb-[113px]  xl:pb-[129px] justify-between">
        <Sidebar product={product} />

        <MobileNav product={product}/>

        {/* Main Body Start */}
        <div className="flex flex-col gap-6 w-full flex-1">
          <Header sortBy={sortBy} setSortBy={setSortBy} />
          {suggestions && suggestions.length > 0 ? (
            <FeedbackList feedbacks={suggestions} />
          ) : (
            <EmptySuggestion />
          )}
        </div>
        {/* Main Body End */}
      </div>
    </main>
  );
};
