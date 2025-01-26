import { useEffect } from "react";
import { AppRouter } from "./routes/AppRouter";

function App() {
  useEffect(() => {
    const isToggled = localStorage.getItem("theme") === "dark";
    if (isToggled) {
      localStorage.setItem("theme", "dark");
      document.getElementById("body").classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.getElementById("body").classList.remove("dark");
    }
  }, []);
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
