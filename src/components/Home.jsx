import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = ({ handleTheme, theme }) => {
  const data = [
    {
      img: "/html.png",
      name: "HTML",
      link: "html",
    },
    {
      img: "/css.png",
      name: "CSS",
      link: "css",
    },
    {
      img: "/javascript.png",
      name: "JavaScript",
      link: "javascript",
    },
    {
      img: "/access.png",
      name: "Accessibility",
      link: "accessibility",
    },
  ];
  return (
    <div className="max-w-[1400px] mx-auto">
      <Navbar handleTheme={handleTheme} theme={theme} />
      <div className="flex justify-evenly mt-10">
        <div>
          <h1 className="text-4xl">
            Welcome to the <br />
            <span className="text-5xl font-bold">Frontend Quiz!</span>
          </h1>
          <h2 className="text-grayNavy italic mt-10 dark:text-bluish">
            Pick a subject to get started.
          </h2>
        </div>
        <div className="flex flex-col gap-1">
          {data.map((data, i) => (
            <Link
              to={`/${data.link}`}
              key={i}
              className="flex h-[70px] items-center p-2 bg-[#fff] dark:bg-navy gap-3 w-[300px] sm:w-[400px] mb-5 rounded-xl shadow-xl"
            >
              <img src={data.img} className="w-10 h-10" alt="html" />
              <h3 className="font-bold">{data.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
