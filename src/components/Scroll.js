export default function Scroll() {
  function handleScroll(e) {
    console.log("scroll");
  }
  return (
    <div
      onScroll={handleScroll}
      className="  flex justify-between gap-10 mx-auto"
    >
      <div className=" max-w-2  bg-blue-500 overflow-visible gap-y-[36%] flex flex-col ">
        <div className="min-w-7 rounded-[50%] bg-blue-600 border-white border-2 shadow-2xl  -translate-x-[10px] text-center text-blue-600 mt-10">
          .
        </div>
        <div className="min-w-7 rounded-[50%] bg-blue-600 border-white border-2 shadow-2xl -translate-x-[10px] text-center text-blue-600  ">
          .
        </div>
        <div className="min-w-7 rounded-[50%] bg-blue-600 border-white border-2 shadow-2xl  -translate-x-[10px] text-center text-blue-600 ">
          .
        </div>
      </div>
      <div className="flex flex-col gap-y-28 ">
        <div className="py-7 px-5  shadow-lg rounded-2xl flex flex-col gap-3 cursor-pointer education-anime ">
          <h1 className="text-xl font-bold ">August 2021 - June 2024</h1>
          <p>
            BCA From
            <span className="text-blue-600">
              {" "}
              Dev Bhoomi Uttarakhand University
            </span>
          </p>
        </div>

        <div className="py-7 px-5  shadow-lg rounded-2xl flex flex-col gap-3 cursor-pointer education-anime">
          <h1 className="text-xl font-bold ">August 2019 - June 2020</h1>
          <p>
            Intermediate from
            <span className="text-blue-600">
              {" "}
              Smt K.J.Memorial.Intercollage
            </span>
          </p>
        </div>

        <div className="py-7 px-5  shadow-lg rounded-2xl flex flex-col gap-3 cursor-pointer education-anime ">
          <h1 className="text-xl font-bold ">August 2017 - June 2018</h1>
          <p>
            High School from
            <span className="text-blue-600"> Saraswati Academy</span>
          </p>
        </div>
      </div>
    </div>
  );
}
