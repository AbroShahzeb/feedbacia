import { Link } from "react-router-dom";
import { Button } from "../../../../../generalComponents";

export const Header = () => {
  return (
    <div className="p-6 md:px-8 bg-grey-500 flex items-center gap-3 justify-between md:rounded-[10px] md:h-[113px] max-w-[1110px] mx-auto">
      <div>
        <Button
          variant="back-transparent"
          label="Go back"
          style={{ color: "#fff" }}
        />
        <p className="text-xl text-grey-0 font-bold md:text-3xl">Roadmap</p>
      </div>

      <Link to="/add-feedback">
        <Button label="+ Add Feedback" />
      </Link>
    </div>
  );
};
