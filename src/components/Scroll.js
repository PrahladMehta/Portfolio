export default function Scroll() {
  return (
    <div>
      <div className="flex flex-col gap-y-28 ">
        <div className="py-7 px-5  shadow-lg rounded-2xl flex flex-col gap-3 cursor-pointer ">
          <h1 className="text-xl font-bold ">August 2021 - June 2024</h1>
          <p1>
            BCA From
            <span className="text-blue-600">
              {" "}
              Dev Bhoomi Uttarakhand University
            </span>
          </p1>
        </div>

        <div className="py-7 px-5  shadow-lg rounded-2xl flex flex-col gap-3 cursor-pointer">
          <h1 className="text-xl font-bold ">August 2019 - June 2020</h1>
          <p1>
            Intermediate from
            <span className="text-blue-600">
              {" "}
              Smt K.B.Memorial.Intercollage
            </span>
          </p1>
        </div>

        <div className="py-7 px-5  shadow-lg rounded-2xl flex flex-col gap-3 cursor-pointer">
          <h1 className="text-xl font-bold ">August 2017 - June 2018</h1>
          <p1>
          High School from
            <span className="text-blue-600"> Saraswati Academy</span>
          </p1>
        </div>
      </div>
    </div>
  );
}
