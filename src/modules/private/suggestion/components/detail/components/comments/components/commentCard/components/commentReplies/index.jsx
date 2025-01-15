import { CommentUser } from "../commentUser";

export const CommentReplies = ({ replies }) => {
  return (
    <div className="border-l border-grey-300/10 mt-4 md:mt-8 space-y-6 md:space-y-8 md:border-none">
      {replies.map((reply) => (
        <div className="pl-6">
          <CommentUser user={reply?.user} />
          <div className="text-xs md:text-sm text-grey-300 mt-4">
            <span className="text-primary font-bold">@{reply?.replyingTo}</span>{" "}
            {reply?.content}
          </div>
        </div>
      ))}
    </div>
  );
};
