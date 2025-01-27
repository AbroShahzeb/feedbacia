import { useEffect } from "react";
import { AppRouter } from "./routes/AppRouter";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCredentials } from "./modules/public/auth/redux/slice";

function App() {
  const dispatch = useDispatch();
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

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(setCredentials(JSON.parse(user)));
    }
  }, []);

  return (
    <div>
      <Toaster
        position="top-center"
        toastOptions={{
          // Default styling for all toasts
          className: "",
          // Specific variants
          success: {
            style: {
              backgroundColor: "#4661E6",
              padding: "16px",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "400",
              fontFamily: "inherit",
              color: "#fff",
            },
            icon: null,
          },
          error: {
            style: {
              backgroundColor: "#E63946",
              padding: "16px",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "400",
              fontFamily: "inherit",
              color: "#fff",
            },
            icon: null,
          },
        }}
      />
      <AppRouter />
    </div>
  );
}

export default App;
