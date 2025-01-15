import { Button } from "../../../../../../../../../generalComponents";
import { CommentReplies, CommentUser } from "./components";

export const CommentCard = ({ comment }) => {
  return (
    <div className="py-6 md:py-8">
      {/* Comment User */}
      <CommentUser user={comment?.user} />

      <div
        className={`${
          comment?.replies &&
          comment.replies.length > 0 &&
          "md:border-l md:ml-[19px]"
        }`}
      >
        {/* Comment */}
        <div
          className={`text-xs text-grey-300 mt-4 ${
            comment?.replies && comment.replies.length > 0
              ? "md:ml-[53px]"
              : "md:ml-[72px]"
          } md:text-sm`}
        >
          {comment?.content}
        </div>

        {/* Replies */}
        {comment?.replies && <CommentReplies replies={comment?.replies} />}
      </div>
    </div>
  );
};
