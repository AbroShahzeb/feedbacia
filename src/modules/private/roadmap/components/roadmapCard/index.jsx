import { CategoryTag, UpvoteCount } from "../../../../../generalComponents";
import iconComment from "../../../../../assets/shared/icon-comments.svg";

export const RoadmapCard = ({ feedback, activeTab }) => {
  return (
    <div
      className={`bg-grey-0 rounded-[10px] p-6   ${`border-t-4 ${activeTab.border} `}`}
    >
      <div className="flex items-center gap-2 text-xs text-grey-300 mb-4">
        <span
          className={`${activeTab?.icon} size-2 rounded-full flex-shrink-0`}
        ></span>
        {activeTab?.title}
      </div>

      <div>
        <div>
          <h3
            className="text-xs  font-bold text-grey-400 hover:underline cursor-pointer"
            onClick={() => navigate(`/details/${feedback.id}`)}
          >
            {feedback.title}
          </h3>
          <p className="mt-[9px] text-xs  text-grey-300">
            {feedback.description}
          </p>
          <div className="mt-2">
            <CategoryTag tagName={feedback.category} />
          </div>
        </div>
      </div>

      <div className="flex  mt-4 items-center gap-2 justify-between">
        <div className="block">
          <UpvoteCount upvotes={feedback.upvotes} forSmallScreens={true} />
        </div>
        <div className="flex items-center gap-1 text-grey-400">
          <img src={iconComment} alt="Comments Icon" />
          <p
            className={`text-xs font-bold ${
              feedback?.comments?.length ? "opacity-100" : "opacity-50"
            }`}
          >
            {feedback?.comments?.length || 0}
          </p>
        </div>
      </div>
    </div>
  );
};
