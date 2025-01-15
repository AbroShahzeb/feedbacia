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
    <main className="p-6 bg-grey-50 min-h-svh">
      <div className="flex items-center gap-2 justify-between">
        <div>
          <Button variant="back-transparent" label="Go back" />
        </div>
        <Link to={`/edit-feedback/${id}`}>
          <Button variant="secondary" label="Edit Feedback" />
        </Link>
      </div>

      <div className="my-6">
        <FeedbackCard feedback={feedbackData} />
      </div>

      <div className="mb-6">
        <Comments comments={feedbackData?.comments} />
      </div>

      <div>
        <AddCommentForm />
      </div>
    </main>
  );
};
