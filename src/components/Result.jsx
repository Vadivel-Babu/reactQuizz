import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import useHook from "../hooks/useHook";

const Result = () => {
  const { category, score } = useParams();
  const { setScore } = useHook();
  const navigate = useNavigate();

  return (
    <div className="max-w-[1400px] mx-auto">
      <Navbar title={category} img={category} />
      <div className="mt-5 flex mx-auto flex-col md:flex-row sm:gap-[50px] flex-wrap lg:gap-[150px] py-2 px-5">
        <div className="flex-[0.8]">
          <h1 className="text-2xl w-full sm:text-4xl lg:text-5xl mt-3 mb-5 sm:mb-10 lg:mb-52">
            Quiz completed <br />
            <span className="font-bold">You scored...</span>
          </h1>
        </div>
        <div>
          <div className=" md:w-[500px] flex flex-col items-center justify-center bg-white rounded-xl py-10 px-5">
            <div className="flex  gap-7">
              <img src={`/${category}.png`} className="w-8" alt={category} />
              <h1 className="font-bold capitalize text-xl">{category}</h1>
            </div>
            <h1 className="text-[80px] font-semibold">{score | 0}</h1>
            <p className="text-grayNavy">out of 10</p>
          </div>
          <button
            onClick={() => {
              navigate("/");
              setScore(0);
            }}
            className="w-[100%] bg-purple  text-[#fff] font-medium text-lg mt-5 rounded-xl py-5 hover:bg-purple/70"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
