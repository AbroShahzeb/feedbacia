import { productRequests } from "../../../../../../../data";

import { FeedbackCard } from "../feedbackCard";

export const FeedbackList = () => {
  return (
    <div className="flex flex-col gap-4 px-6 pt-8 pb-[55px] md:p-0">
      {productRequests.map((request) => (
        <FeedbackCard feedback={request} />
      ))}
    </div>
  );
};
