import { Link, useParams } from "react-router-dom";
import { Button } from "../../../../../generalComponents";
import { productRequests } from "../../../../../data";
import { useEffect, useState } from "react";
import { FeedbackCard } from "../feedbackCard";
import { AddCommentForm, Comments } from "./components";

export const FeedbackDetail = () => {
  const { id } = useParams();
  const [feedbackData, setFeedbackData] = useState(productRequests);
  console.log("Feedback id", id);

  useEffect(() => {
    const data = productRequests.find((feedback) => feedback.id === Number(id));
    setFeedbackData(data);
  }, [id]);

  return (
    <main className="p-6 md:pt-[56px] md:pb-[120px] lg:pt-20 lg:pb-[137px] bg-grey-50 min-h-svh ">
      <div className="flex items-center gap-2 justify-between md:max-w-[730px] md:mx-auto">
        <div>
          <Button variant="back-transparent" label="Go back" />
        </div>
        <Link to={`/edit-feedback/${id}`}>
          <Button variant="secondary" label="Edit Feedback" />
        </Link>
      </div>

      <div className="my-6 md:max-w-[730px] md:mx-auto">
        <FeedbackCard feedback={feedbackData} />
      </div>

      <div className="mb-6 md:max-w-[730px] md:mx-auto">
        <Comments comments={feedbackData?.comments} />
      </div>

      <div className="md:max-w-[730px] md:mx-auto">
        <AddCommentForm />
      </div>
    </main>
  );
};
