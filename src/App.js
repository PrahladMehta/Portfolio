import "./index.css";

import Project from "../src/components/Project";

import Home from "../src/components/Home";

import About from "../src/components/About";

import MainHeader from "../src/components/MainHeader";

import { useNavigate } from "react-router-dom";

import { Route, Routes, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const nav = useNavigate();
  const [select, setSelect] = useState("home");

  return (
    <div className="overflow-x-hidden select-none mx-auto max-w-[1200px]">
      {/* navigation bar */}
      <nav className="flex justify-between items-center  p-1 text-[#4770FF] w-[1100px] mx-auto mt-4  ">
        <div className="text-3xl font-bold hover:scale-105 duration-100  text-black">
          Prahlad Singh Mehta
        </div>

        <div className="flex  gap-x-5 text-lg items-center mr-20 ">
          <NavLink to="/">
            <div
              className={`hover:bg-[rgba(170,207,250,0.3)] px-4 py-2 rounded-xl cursor-pointer 
             duration-200
             `}
            >
              Home
            </div>
          </NavLink>

          <NavLink to="/about">
            <div
              className={`hover:bg-[rgba(170,207,250,0.3)] px-4 py-2 rounded-xl cursor-pointer
                `}
            >
              About
            </div>
          </NavLink>

          <NavLink to="/project">
            <div
              className={`hover:bg-[rgba(170,207,250,0.3)] px-4 py-2 rounded-xl cursor-pointer 
              `}
            >
              Project
            </div>
          </NavLink>
        </div>

        <button className=" text-xl rounded-xl shadow-[0_3px_10px_1px_#e5e5ea]  py-3 px-6 font-semibold hover:scale-105 duration-400 ">
          Contact
        </button>
      </nav>

      <div className="max-w-[1200px]">
        <Routes>
          <Route path="/" element={<MainHeader></MainHeader>}>
            <Route path="/" element={<Home setSelect={setSelect}></Home>} />
            <Route
              path="/project"
              element={<Project setSelect={setSelect}></Project>}
            />
            <Route
              path="/about"
              element={<About setSelect={setSelect}></About>}
            />
          </Route>
        </Routes>
      </div>

      <div className="mx-10 mt-32  mb-20 flex justify-between ">
        <div className="basis-5/12 flex flex-col items-baseline gap-y-5">
          <h1 className="text-2xl font-bold text-[#3A395E]">
            Thank you for visiting!
          </h1>
          <p>
            Got question ,comment or feedback?
            <br />
            Feel free to reach out and contact me .
          </p>
          <button className="px-8 py-4 bg-[#4770FF] text-white text-xl  font-bold rounded-2xl hover:scale-105 shadow-[0_3px_17px_0_#e5e5ea] duration-300">
            Contact
          </button>
        </div>

        <div className="basis-6/12 flex gap-y-4  flex-col">
          <h className="text-blue-600 text-lg font-bold">Navigation</h>

          <div className="flex gap-y-2 flex-col">
            <div
              onClick={() => {
                setSelect("home");
                nav("/");
              }}
              className={` cursor-pointer ${
                select === "home" && "font-[600] text-blue-500"
              } `}
            >
              Home
            </div>

            <div>
              <div
                onClick={() => {
                  setSelect("about");
                  nav("/about");
                }}
                className={` cursor-pointer ${
                  select === "about" && "font-[600] text-blue-500"
                } `}
              >
                About
              </div>
            </div>

            <div>
              <div
                onClick={() => {
                  setSelect("project");
                  nav("/project");
                }}
                className={` cursor-pointer ${
                  select === "project" && "font-[600] text-blue-500"
                } duration-75 select-none`}
              >
                Project
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
