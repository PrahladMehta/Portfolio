import data from "./Projectdata";
import { FaGreaterThan } from "react-icons/fa";
import { useEffect } from "react";
const Project = function ({ setSelect }) {
  useEffect(() => {
    setSelect("project");
  }, []);
  return (
    <div>
      <div className="flex flex-col mt-16 md:mt-32 mb-16 h-auto mx-auto md:w-[95%] w-[90%]">
        {" "}
        <div className="w-32 h-[6px] bg-[#4770FF] rounded-2xl"></div>
        <h1 className="text-3xl md:text-5xl text-[#3A395E] font-bold mt-6 md:mt-10 ">
          My Projects
        </h1>
        <div className="w-full mx-auto flex flex-wrap justify-center ">
          {data.map((val) => {
            return (
              <div key={val.id} className="project-animation">
                <a href={val.gitlink}>
                  <div className=" mt-16  md:mt-20 lg:mt-32  md:w-[350px] lg:w-[380px]  w-[300px] rounded-2xl shadow-lg hover:scale-105  text-[#6E6D8F] hover:shadow-xl mx-4  md:mx-5 lg:mx-10  cursor-pointer group duration-700">
                    <img
                      src={val.img}
                      className="w-full  h-[220px] md:h-[250px] "
                      alt=""
                    />

                    <div className="flex flex-col justify-between gap-y-3 p-7   md:h-[130px] lg:h-[150px] ">
                      <h1 className="text-xl font-bold ">{val.title}</h1>

                      <div className="flex gap-3  items-center ">
                        <p className="text-blue-600 font-semibold  text-lg   ">
                          View project
                        </p>
                        <div className="p-2 rounded-lg bg-blue-100 group-hover:bg-blue-200   text-blue-600 duration-700">
                          <FaGreaterThan />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
