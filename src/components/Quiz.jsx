import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import useHook from "../hooks/useHook";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 300 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#A729F5" : "#A729F5",
  },
}));

const Quiz = ({ handleTheme, theme }) => {
  const { category } = useParams();
  const navigate = useNavigate();
  const mark = ["A", "B", "C", "D", "E"];
  const [error, setError] = useState(false);

  const {
    setAnswer,
    questions,
    index,
    setIndex,
    answer,
    checkAnswer,
    setCrtAnswer,
    setWrongAns,
    wrongAns,
    crtAnswer,
    check,
    setCheck,
    score,
  } = useHook(category);

  return (
    <div className="max-w-[1400px] mx-auto">
      <Navbar
        title={category}
        img={category}
        handleTheme={handleTheme}
        theme={theme}
      />
      <div className="mt-5 flex mx-auto flex-col sm:flex-row sm:gap-[50px] flex-wrap lg:gap-[150px] py-2 px-5">
        <div className="flex-[0.8]">
          <span className="italic text-grayNavy dark:text-bluish">
            Questions {index + 1} of 10
          </span>
          <h1 className="font-semibold text-2xl w-full sm:text-3xl mt-3 mb-5 sm:mb-10 lg:mb-52">
            {questions.length === 0 ? "hi" : questions[index].question}
          </h1>
          <BorderLinearProgress
            variant="determinate"
            className="w-full sm:w-[350px]"
            value={index * 10}
          />
        </div>
        {questions.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div className="flex-1">
            {questions[index].options.map((option, i) => (
              <div
                key={i}
                onClick={() => {
                  if (check) {
                    return;
                  }
                  setError(false);
                  setAnswer(option);
                }}
                className={`flex h-[70px] items-center cursor-pointer dark:bg-navy group justify-between  ${
                  !crtAnswer && !wrongAns && option === answer
                    ? "border-2 border-purple "
                    : ""
                } ${
                  crtAnswer && option === answer ? "border-2 border-green" : ""
                } ${
                  wrongAns && option === answer
                    ? "border-2 border-red"
                    : "text-grayNavy"
                } p-2 bg-[#fff] gap-3 w-full sm:max-w-[400px] mb-5 mt-5 sm:mt-0 rounded-xl shadow-xl`}
              >
                <div className="flex items-center gap-1">
                  <span
                    className={`bg-greyish group-hover:bg-[#F6E7FF]  ${
                      crtAnswer && option === answer
                        ? "bg-green text-green"
                        : "text-grayNavy"
                    } ${
                      !crtAnswer && !wrongAns && option === answer
                        ? "bg-[#F6E7FF] text-purple "
                        : "text-grayNavy"
                    }
                    ${
                      wrongAns && option === answer
                        ? "bg-red text-white "
                        : "text-grayNavy"
                    } group-hover:text-purple  text-lg font-bold rounded-md w-7 flex justify-center`}
                  >
                    {mark[i]}
                  </span>
                  <p className="text-lg font-bold dark:text-white">{option}</p>
                </div>
                {wrongAns && option === answer && (
                  <CancelOutlinedIcon className="text-red" />
                )}
                {option === questions[index].answer && check && (
                  <CheckCircleOutlineOutlinedIcon className="text-green" />
                )}
              </div>
            ))}
            {index !== questions.length - 1
              ? (crtAnswer || wrongAns) && (
                  <button
                    onClick={() => {
                      if (index === questions.length - 1) {
                        return;
                      }
                      setIndex(index + 1);
                      setAnswer("");
                      setCrtAnswer(false);
                      setWrongAns(false);
                      setCheck(false);
                    }}
                    className="w-full bg-purple sm:max-w-[400px] text-[#fff] font-medium text-lg rounded-xl py-5 hover:bg-purple/70"
                  >
                    Next Question
                  </button>
                )
              : (crtAnswer || wrongAns) && (
                  <button
                    onClick={() => {
                      navigate(`/${category}/score/${score}`);
                    }}
                    className="w-full bg-purple sm:max-w-[400px] text-[#fff] font-medium text-lg rounded-xl py-5 hover:bg-purple/70"
                  >
                    Finish Test
                  </button>
                )}
            {!crtAnswer && !wrongAns ? (
              <button
                onClick={() => {
                  if (answer.trim().length === 0) {
                    setError(true);
                    return;
                  }
                  checkAnswer();
                }}
                className="w-full bg-purple sm:max-w-[400px] text-[#fff] font-medium text-lg rounded-xl py-5 hover:bg-purple/70"
              >
                Submit Answer
              </button>
            ) : (
              ""
            )}
            {error && (
              <p className="text-red font-bold mt-1">
                <CancelOutlinedIcon /> Please select an answer
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
