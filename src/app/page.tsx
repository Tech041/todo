"use client";
import { useState } from "react";
import React from "react";
import { IoMdStar } from "react-icons/io";

const stars = [1, 2, 3, 4, 5, 6];
const styles =
  "bg-yellow-800 hover:bg-yellow-700 w-[50px] md:w-[80px] h-[30px] flex justify-center items-center rounded-md";
const btnStyle = " text-white md:text-[14px] text-[10px]";

const Home = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [tasks, setTasks] = useState<any>([]);
  const [starRating, setStarRating] = useState(0);
  const [hover, setHover] = useState(0);
  const reset = () => {
    setStarRating(0);
  };

  const handleAddition = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };
  const handleDelete = (index: number) => {
    const update = tasks.filter((element: any, i: any) => i !== index);
    setTasks(update);
  };
  const handleEdit = (index: number) => {
    const edify = tasks.find((element: any, i: any) => i == index);
    setInputValue(edify);
  };

  return (
    <div className="container w-full h-screen flex flex-col justify-center items-center">
      <div className=" flex justify-center items-center ">
        <div className="todo-wrapper bg-slate-600 w-[300px] md:w-[600px] h-[200px] md:h-[150px]">
          <h1 className="text-center text-white font-bold my-5 ">
            Todo List By Pharm Nelson
          </h1>
          <div className="flex justify-center items-center">
            <form className="flex justify-center md:justify-start items-center md:items-start flex-col md:flex-row gap-4 md:gap-0">
              <input
                type="text"
                value={inputValue}
                placeholder="Enter new task......"
                className="py-2 px-4 w-[290px] rounded-sm"
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                type="button"
                onClick={handleAddition}
                className="text-white bg-yellow-800  hover:bg-yellow-700 py-2 px-4  rounded-md md:rounded-sm ml-1"
              >
                ADD TASK
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className=" w-[300px] md:w-[600px]  h-[70px] md:h-[90px] bg-gray-400">
          <div className="flex justify-center items-center gap-1">
            <span className="md:text-2xl text-[14px] text-yellow-800 font-semibold flex gap-1 justify-center items-center">
              <p>Rating:</p>
              <p className="md:text-3xl text-[14px] font-semibold pr-4">
                {starRating}
              </p>
            </span>
            {stars.map((index) => (
              <div
                key={index}
                onClick={() => setStarRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(0)}
              >
                <IoMdStar
                  size={50}
                  className={`cursor-pointer hidden md:block ${
                    index <= (hover || starRating)
                      ? "text-yellow-500"
                      : "text-gray-900"
                  }`}
                />

                <IoMdStar
                  size={20}
                  className={`cursor-pointer block  md:hidden ${
                    index <= (hover || starRating)
                      ? "text-yellow-500"
                      : "text-gray-900"
                  }`}
                />
              </div>
            ))}
          </div>

          <button
            onClick={reset}
            className="md:ml-20 ml-10  text-[12px] md:text-[16px] text-green-600 font-semibold "
          >
            Reset rating
          </button>
        </div>
        <div className="main-body  bg-slate-500 md:w-[600px] w-[300px] flex justify-center items-center">
          <ul>
            {tasks.map((task: any, index: number) => (
              <li
                key={index}
                className="flex gap-10 px-4 py-2 my-3 text-white w-full"
              >
                <span className="w-[70%]">{task}</span>
                <span className="flex gap-3 w-[30%]">
                  <div className={styles}>
                    <button
                      onClick={() => handleDelete(index)}
                      className={btnStyle}
                    >
                      DELETE
                    </button>
                  </div>
                  <div className={styles}>
                    <button
                      onClick={() => handleEdit(index)}
                      className={btnStyle}
                    >
                      EDIT
                    </button>
                  </div>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
