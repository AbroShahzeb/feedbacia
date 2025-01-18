import { Classic } from "@theme-toggles/react";
import "@theme-toggles/react/css/Classic.css";
import { useEffect, useState } from "react";

export const ThemeToggler = () => {
  const [isToggled, setToggle] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isToggled) {
      localStorage.setItem("theme", "dark");
      document.getElementById("body").classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.getElementById("body").classList.remove("dark");
    }
  }, [isToggled]);

  return (
    <div>
      <Classic
        duration={750}
        toggled={isToggled}
        toggle={setToggle}
        className="text-[24px] lg:text-[30px] "
      />
    </div>
  );
};
