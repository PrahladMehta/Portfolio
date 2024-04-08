import "./index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import Project from "../src/components/Project";
import Home from "../src/components/Home";
import About from "../src/components/About";
import { useNavigate } from "react-router-dom";
import { Route, Routes, NavLink } from "react-router-dom";
import { useState } from "react";

function App() {
  const nav = useNavigate();
  const [select, setSelect] = useState("home");
  const [hamburger, setHamburger] = useState(true);

  return (
    <div className="overflow-x-hidden select-none mx-auto max-w-[1150px] lg:p-4">
      {/* navigation bar */}
      <nav className="flex justify-between items-center   text-[#4770FF] w-full  mt-4 relative  ">
        <div className="  lg:hidden ml-5 text-black text-2xl">
          {!hamburger ? (
            <MdOutlineClose
              onClick={() => {
                setHamburger(!hamburger);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => {
                setHamburger(!hamburger);
              }}
            />
          )}
        </div>
        <div
          className={`lg:hidden flex gap-y-2 flex-col absolute top-[100%] bg-blue-500 font-medium text-black  w-full ${
            hamburger
              ? " -translate-y-[50%] scale-y-0 "
              : "scale-y-100  translate-y-0"
          }  duration-300 p-4 rounded-b-lg  `}
        >
          <div
            onClick={() => {
              setSelect("home");
              setHamburger(true);
              nav("/");
            }}
            className={` cursor-pointer ${
              select === "home" && "font-[600] text-white"
            } `}
          >
            Home
          </div>

          <div>
            <div
              onClick={() => {
                setSelect("about");
                setHamburger(true);
                nav("/about");
              }}
              className={` cursor-pointer ${
                select === "about" && "font-[600] text-white"
              } `}
            >
              About
            </div>
          </div>

          <div>
            <div
              onClick={() => {
                setSelect("project");
                setHamburger(true);
                nav("/project");
              }}
              className={` cursor-pointer ${
                select === "project" && "font-[600] text-white"
              } duration-75 select-none`}
            >
              Project
            </div>
          </div>
        </div>
        <div className=" text-2xl  md:text-3xl font-bold hover:scale-105 duration-700  text-black my-2 mr-4 lg:mr-0">
          Prahlad Singh Mehta
        </div>

        <div className="hidden  gap-x-5 text-lg items-center mr-20 lg:flex ">
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

        <a
          href="mailto:prahladsinghmehta22@gmail.com"
          className="lg:block hidden text-xl rounded-xl shadow-[0_3px_10px_1px_#e5e5ea]  py-3 px-6 font-semibold hover:scale-105 duration-400 "
        >
          Contact
        </a>
      </nav>

      <div className="max-w-[1200px]">
        <Routes>
          <Route path="/" element={<Home setSelect={setSelect}></Home>} />
          <Route
            path="/project"
            element={<Project setSelect={setSelect}></Project>}
          />
          <Route
            path="/about"
            element={<About setSelect={setSelect}></About>}
          />
        </Routes>
      </div>

      <div className="mx-10 mt-32  mb-20 flex flex-col flex-wrap gap-y-12  md:flex-row  md:flex justify-between ">
        <div className="basis-5/12 flex flex-col items-baseline gap-y-5">
          <h1 className="text-2xl font-bold text-[#3A395E]">
            Thank you for visiting!
          </h1>
          <p>
            Got question ,comment or feedback?
            <br />
            Feel free to reach out and contact me .
          </p>
          <a
            href="mailto:prahladsinghmehta22@gmail.com"
            className="px-8 py-4 bg-[#4770FF] text-white text-xl  font-bold rounded-2xl hover:scale-105 shadow-[0_3px_17px_0_#e5e5ea] duration-300"
          >
            Contact
          </a>
        </div>

        <div className="basis-6/12 flex gap-y-4  flex-col">
          <h1 className="text-blue-600 text-lg font-bold">Navigation</h1>

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
