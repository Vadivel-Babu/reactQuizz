import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-greyish font-rubik text-darkNavy  bg-ring bg-no-repeat bg-cover h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Quiz />} />
          <Route path="/:category/score/:score" element={<Result />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
