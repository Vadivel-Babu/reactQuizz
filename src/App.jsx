import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <BrowserRouter>
      <div className="bg-greyish font-rubik text-darkNavy dark:bg-darkNavy dark:text-white dark:bg-black  bg-ring bg-no-repeat bg-cover h-screen">
        <Routes>
          <Route
            path="/"
            element={<Home handleTheme={handleTheme} theme={theme} />}
          />
          <Route
            path="/:category"
            element={<Quiz handleTheme={handleTheme} theme={theme} />}
          />
          <Route
            path="/:category/score/:score"
            element={<Result handleTheme={handleTheme} theme={theme} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
