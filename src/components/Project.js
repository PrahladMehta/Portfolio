import data from "./Projectdata";
import { FaGreaterThan } from "react-icons/fa";
const Project = function ({ setSelect }) {
  setSelect("project");
  console.log(data);
  return (
    <div>
      <div className="flex flex-col mt-32 mb-16 h-auto mx-8">
        {" "}
        <div className="w-32 h-[6px] bg-[#4770FF] rounded-2xl"></div>
        <h1 className="text-5xl text-[#3A395E] font-bold mt-10">My Projects</h1>
        <div className="w-[800px] mx-auto">
          <div className=" mt-32 w-[450px] rounded-2xl shadow-lg hover:scale-105  text-[#6E6D8F] hover:shadow-xl mx-10  cursor-pointer group duration-700">
            <img src={data[0].img} className="w-full h-[350px]" />

            <div className="flex flex-col justify-between gap-y-3 p-7 h-[150px] ">
              <h1 className="text-xl font-bold ">{data[0].title}</h1>

              <div className="flex gap-3  items-center ">
                <p className="text-blue-600 font-semibold  text-lg   ">
                  View project{" "}
                </p>
                <div className="p-2 rounded-lg bg-blue-100 group-hover:bg-blue-200   text-blue-600 duration-700">
                  <FaGreaterThan />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
