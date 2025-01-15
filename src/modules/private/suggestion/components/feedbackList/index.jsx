import { productRequests } from "../../../../../data";
import { CategoryTag, UpvoteCount } from "../../../../../generalComponents";
import iconComment from "../../../../../assets/shared/icon-comments.svg";

console.log("product requests", productRequests);

export const FeedbackList = ({ feedbacks }) => {
  return (
    <div className="flex flex-col gap-4 px-6 pt-8 pb-[55px] md:p-0">
      {productRequests.map((request) => (
        <div className="bg-grey-0 rounded-[10px] p-6 md:px-8 md:py-7 md:flex md:items-start md:gap-10">
          <div className="hidden md:flex">
            <UpvoteCount upvotes={request.upvotes} />
          </div>
          <div>
            <div>
              <h3 className="text-xs md:text-xl font-bold text-grey-400">
                {request.title}
              </h3>
              <p className="mt-[9px] md:mt-1 text-xs md:text-md text-grey-300">
                {request.description}
              </p>
              <div className="mt-2 md:mt-3">
                <CategoryTag tagName={request.category} />
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:ml-auto md:items-center md:gap-2 md:self-center">
            <img src={iconComment} alt="Comments Icon" />
            <p>{request?.comments?.length}</p>
          </div>

          {/* For smaller Screens */}
          <div className="flex md:hidden mt-4 items-center gap-2 justify-between">
            <div className="block md:hidden">
              <UpvoteCount upvotes={request.upvotes} />
            </div>
            <div className="flex items-center gap-1 text-grey-400">
              <img src={iconComment} alt="Comments Icon" />
              <p
                className={`text-xs font-bold ${
                  request?.comments?.length ? "opacity-100" : "opacity-50"
                }`}
              >
                {request?.comments?.length || 0}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
