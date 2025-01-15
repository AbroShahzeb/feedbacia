import { Button } from "../../../../../../../../../generalComponents";
import { CommentReplies, CommentUser } from "./components";

export const CommentCard = ({ comment }) => {
  return (
    <div className="py-6">
      {/* Comment User */}
      <CommentUser user={comment?.user} />

      {/* Comment */}
      <div className="text-xs text-grey-300 mt-4">{comment?.content}</div>

      {/* Replies */}
      {comment?.replies && <CommentReplies replies={comment?.replies} />}
    </div>
  );
};
