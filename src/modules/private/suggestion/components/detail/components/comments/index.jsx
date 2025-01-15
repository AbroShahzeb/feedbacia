import { CommentCard } from "./components";

export const Comments = ({ comments }) => {
  return (
    <div className="rounded-[10px] p-6 bg-grey-0 flex flex-col gap-6">
      {/* Comments Count */}
      <div className="text-xl font-bold text-grey-400">
        {comments?.length || 0} Comments
      </div>

      {/* Comments */}
      <div className="flex flex-col  divide-y divide-[#8C92B3]/25 -mt-6">
        {comments?.map((comment) => (
          <CommentCard comment={comment} />
        ))}
      </div>
    </div>
  );
};
