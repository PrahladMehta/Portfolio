import Jupitor from "./image/jupitor.png";
// import html from "./image/html.svg";
// import java from "./image/java.svg";
// import css from "./image/css.svg";
// import tailwind from "./image/tailwind.svg";
// import javascript from "./image/javascript.svg";
// import react from "./image/react.svg";
// import mongodb from "./image/mongo.svg";
// import node from "./image/node.svg";
// import express from "./image/express.svg";
// import python from "./image/python.svg";
// import c from "./image/c.png";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaCopyright } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { useEffect } from "react";

const Home = function ({ setSelect }) {
  useEffect(() => {
    setSelect("home");
  }, []);

  return (
    <div className=" w-full">
      <div className="flex flex-row mt-12  md:mt-32 mb-16 h-auto flex-wrap-reverse w-full">
        {/* Left */}
        <div className=" flex flex-col   gap-y-12  w-[90%] md:w-5/12 min-w-[350px]  mx-7 md:mx-0">
          <div className="w-32 h-[6px] bg-[#4770FF]"></div>

          <h1 className="font-bold text-3xl md:text-5xl text-[#3A395E] flex  name-animation">
            <div className="anime ">👋 </div>
            <div className="">
              Hi, I'm {"  "}
              <span className="text-[#4770FF] text-4xl md:text-6xl">
                Prahlad
              </span>
            </div>
          </h1>

          <p className="text-xl md:text-2xl leading-10 text-[#6E6D8F] description-animation">
            Crafting digital experiences with precision and creativity,
            <br />I am a web developer fueled by logical reasoning and
            analytical prowess.
            <br />
            From elegant code to seamless user interfaces, I specialize in
            bringing visions to life through the power of technology.
          </p>
          <a href="#skills">
            {" "}
            <button className="px-8 py-4 bg-[#4770FF] text-white md:text-xl  text-lg font-bold rounded-lg hover:scale-105 shadow-[0_3px_17px_0_#e5e5ea] duration-300">
              Know more
            </button>
          </a>
        </div>

        {/* Right */}

        <img
          src={Jupitor}
          alt="plante"
          className="w-[48%] min-w-[350px] mx-auto image-jupitor-anime"
        ></img>
      </div>

      {/* Skills */}
      <div id="skills" className="m-8 flex flex-col gap-y-20 ">
        <div className="w-32 h-[6px] bg-[#4770FF] mt-8"></div>

        <h1 className="font-bold md:text-6xl text-4xl text-[#3A395E]">
          {" "}
          My Skills
        </h1>

        {/* ICONES */}

        <div className=" flex gap-y-8 gap-x-20 items-center flex-wrap m-2 ">
          {/* HTML */}

          <div className="group  text-center text-lg md:text-xl font-bold hover:scale-105 duration-200 cursor-pointer  w-[100px]">
            <ImHtmlFive className="text-6xl group-hover:text-[#4770FF] mx-auto" />
            <p className="text-center  ">HTML</p>
          </div>

          {/* CSS */}
          <div className="group text-center text-lg md:text-xl font-bold hover:scale-105 duration-200 cursor-pointer w-[100px]">
            <SiCss3 className="text-6xl group-hover:text-[#4770FF]   mx-auto" />
            <p>CSS</p>
          </div>

          {/* TAILWIND CSS */}
          <div className=" group  text-center  text-lg md:text-xl font-bold hover:scale-105 duration-200 cursor-pointer w-[100px]">
            <SiTailwindcss className="text-6xl group-hover:text-[#4770FF] mx-auto" />
            <p>Tailwind css</p>
          </div>

          {/* JAVA SCRIPT */}
          <div className=" group text-center  text-lg md:text-xl font-bold hover:scale-105 duration-200 cursor-pointer w-[100px]">
            <RiJavascriptLine className="text-6xl group-hover:text-[#4770FF] mx-auto" />
            <p>JavaScript</p>
          </div>

          {/* REACT JS */}
          <div className=" group text-center text-lg md:text-xl font-bold hover:scale-105 duration-200 cursor-pointer w-[100px]">
            <RiReactjsLine className="text-6xl group-hover:text-[#4770FF] mx-auto" />
            <p>React js</p>
          </div>

          {/* NODE JS */}
          <div className=" group text-center  text-lg md:text-xl font-bold hover:scale-105 duration-200 cursor-pointer w-[100px]">
            <FaNodeJs className="text-6xl group-hover:text-[#4770FF]  mx-auto" />
            <p>Node js</p>
          </div>

          {/* EXPRESS JS */}
          <div className=" group text-center  text-lg md:text-xl font-bold hover:scale-105 duration-200 cursor-pointer w-[100px]">
            <SiExpress className="text-6xl group-hover:text-[#4770FF]   mx-auto" />
            <p>Express js</p>
          </div>

          {/* MONGODB */}

          <div className=" group text-center text-lg md:text-xl font-bold hover:scale-105 duration-200 cursor-pointer w-[100px]">
            <SiMongodb className="text-6xl group-hover:text-[#4770FF] mx-auto " />
            <p>Mongo Db</p>
          </div>
          {/* C */}
          <div className=" group text-center text-lg md:text-xl font-bold hover:scale-105 duration-200 cursor-pointer w-[100px]">
            <FaCopyright className="text-6xl group-hover:text-[#4770FF]   mx-auto" />
            <p>C</p>
          </div>

          {/* JAVA */}
          <div className=" group text-center  text-lg md:text-xl font-bold hover:scale-105 duration-200 cursor-pointer w-[100px]">
            <FaJava className="text-6xl group-hover:text-[#4770FF]  mx-auto " />
            <p>Java</p>
          </div>

          {/* python */}

          <div className=" group text-center  text-lg md:text-xl font-bold hover:scale-105 duration-200 cursor-pointer w-[100px]">
            <SiPython className="text-6xl group-hover:text-[#4770FF]   mx-auto" />
            <p>Python</p>
          </div>
          <div className=" group text-center  text-lg md:text-xl font-bold hover:scale-105 duration-200 cursor-pointer w-[100px]">
            <FaGithubSquare className="text-6xl group-hover:text-[#4770FF]   mx-auto" />
            <p>Github</p>
          </div>

          <div className=" group text-center  text-lg md:text-xl font-bold hover:scale-105 duration-200 cursor-pointer w-[100px]">
            <SiPostman className="text-6xl group-hover:text-[#4770FF]   mx-auto" />
            <p>Postman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
