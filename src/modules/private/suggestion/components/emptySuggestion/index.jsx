import { Link } from "react-router-dom";
import emptySuggestionIllustration from "../../../../../assets/suggestions/illustration-empty.svg";
import { Button } from "../../../../../generalComponents";

export const EmptySuggestion = () => {
  return (
    <div className="px-6 pt-8 pb-[47px] md:p-0">
      <div className="w-full flex items-center justify-center  h-[460px]  md:h-[600px]  bg-grey-0 rounded-[10px]">
        <div className="flex flex-col items-center gap-[53.26px] px-6 md:px-0">
          <div>
            <img
              src={emptySuggestionIllustration}
              alt="No suggestion found illustration"
              className="w-[102px] h-[108px] md:w-[129.64px] md:h-[136.742px]"
            />
          </div>

          <div className="max-w-[410px] text-center flex flex-col items-center">
            <h2 className="text-3xl font-bold text-grey-400">
              There is no feedback yet.
            </h2>
            <p className="text-md text-grey-300 mt-4">
              Got a suggestion? Found a bug that needs to be squashed? We love
              hearing about new ideas to improve our app.
            </p>
            <Link className="mt-12" to="/add-feedback">
              <Button label="+ Add Feedback" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
