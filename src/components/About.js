import Scroll from "./Scroll";
import image from "./image/profile-pic.png";
const About = function ({ setSelect }) {
  setSelect("about");
  return (
    <div>
      <div className="flex flex-row  gap-24 mt-32 mb-16 h-auto mx-12 flex-wrap lg:flex-nowrap ">
        <img src={image} className="rounded-[32px] max-h-[450px] my-auto" />
        <div className="flex flex-col gap-y-7">
          <div className="h-[6px] bg-blue-500 w-24 text-[#3A395E]"></div>
          <p className="text-5xl my-3">
            👀 <span className=" font-bold ">About me</span>
          </p>

          <p className="text-xl leading-8">
            I am from Uttarakhand 📌, currenlty persuing BCA(Bachelor of
            Computer Application) 🎓 from Dev Bhoomi Uttarakhand University
            (DBUU) Dehradun 🏛.
            <br />
            Appart from my professional life i use to play game 🏏, watch movies
            🎬 , anime 🦊,read books 📘.
            <br />
            I'm always eager to explore new technologies and methodologies. I'm
            committed to continuous learning and growth, and I thrive in
            dynamic, collaborative environments where I can contribute my
            expertise and make a meaningful impact. Let's connect and explore
            how we can work together to achieve our goals!
          </p>

          <a
            className="text-center"
            href="https://drive.google.com/file/d/1P-V4RXAhoFSqfNUjxh0E9Tjll-oMJesk/view"
          >
            <button className="  w-30 mx-auto px-8 py-4 bg-[#4770FF] text-white text-xl  font-bold rounded-2xl hover:scale-105 shadow-[0_3px_17px_0_#e5e5ea] duration-300">
              Resume
            </button>
          </a>
        </div>
      </div>

      <div className="w-[1000px] mx-auto mt-32 flex">
        <div className="text-[#3A395E] flex flex-col gap-y-4">
          <div className="h-[6px] bg-blue-500 w-24 rounded-lg "></div>
          <h1 className="text-5xl font-bold mt-4">Education</h1>
          <p1>Catching Up with My Learning Journey</p1>
        </div>
        <div>
          <Scroll></Scroll>
        </div>
      </div>
    </div>
  );
};

export default About;
