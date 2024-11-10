import Scroll from "./Scroll";
import image from "./image/IMG-20230923-WA0059-removebg.png";
import { useEffect } from "react";
const About = function ({ setSelect }) {
  useEffect(() => {
    setSelect("about");
  }, []);

  return (
    <div>
      <div className="flex flex-row  gap-24 mt-32 mb-16 h-auto mx-7 md:mx-12 flex-wrap lg:flex-nowrap  ">
        <img
          src={image}
          className="rounded-[32px] max-h-[450px] my-auto about-image"
          alt="myimage"
        />
        <div className="flex flex-col gap-y-7 about-des">
          <div className="h-[6px] bg-blue-500 w-24 text-[#3A395E]"></div>
          <p className="text-3xl md:text-5xl my-3">
            👀 <span className=" font-bold text-[#3A395E]">About me</span>
          </p>

          <p className="text-lg leading-8">
            I am from Uttarakhand 📌 and have completed my BCA (Bachelor of
            Computer Application) 🎓 from Dev Bhoomi Uttarakhand University
            (DBUU) Dehradun 🏛
            <br />
            <br />
            I'm always eager to explore new technologies and methodologies.
            Committed to continuous learning and growth, I thrive in dynamic,
            collaborative environments where I can contribute my expertise and
            make a meaningful impact. Let's connect and explore how we can work
            together to achieve our goals!
            <br />
            <br />
            Apart from my professional life, I enjoy playing games 🏏, watching
            movies 🎬, anime 🦊, and reading books 📘.
          </p>

          <a
            className="text-center"
            href="https://drive.google.com/file/d/1xlmXRCTNKFm4f1-24a9CAB2wvvPjFd2i/view"
          >
            <button className="  w-30 mx-auto px-8 py-4 bg-[#4770FF] text-white text-xl  font-bold rounded-2xl hover:scale-105 shadow-[0_3px_17px_0_#e5e5ea] duration-300">
              Resume
            </button>
          </a>
        </div>
      </div>

      <div className="w-[87%] mx-auto mt-32 flex justify-between flex-wrap gap-8">
        <div className="text-[#3A395E] flex flex-col gap-y-4">
          <div className="h-[6px] bg-blue-500 w-24 rounded-lg "></div>
          <h1 className="text-5xl font-bold mt-4">Education</h1>
          <p>Catching Up with My Learning Journey</p>
        </div>
        <div>
          <Scroll></Scroll>
        </div>
      </div>
    </div>
  );
};

export default About;
