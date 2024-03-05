import { Person } from "react-bootstrap-icons";
import codeSnippet from "../../assets/code-snippet.svg";
import { RoughNotation } from "react-rough-notation";
import myImage from '../../assets/my-image.jpg'

export const AboutMeSection = () => {
  return (
    <section className="xl:h-full lg:h-full exactly-1024:h-fit pt-9 xl:mt-16 exactly-1024:mt-24 mb-16 flex flex-col " id="about-me-section">
      <div className="flex items-center md:justify-center sm:justify-start">
        <div className="border-1 border-fourth-color  items-center rounded-full text-sm p-1 px-4 font-second-font tracking-normal sm:w-sm   md:w-md lg:w-lg xl:w-xl exactly-1024:w-sm flex justify-between">
          <Person size={19} />
          ABOUT ME
        </div>
      </div>
      <div className="lg:w-[84%] h-[40rem] flex justify-center relative items-center mb-16">
        <div className="about-blobs"></div>
        <div className="relative w-[78%] h-full grid grid-cols-2 gap-10 left-36">
          <div className="absolute w-[49%] h-[73%] bottom-16 font-second-font text-[black] card bg-[#fff] p-6 rounded-3xl -rotate-6 z-10 ">
            <div className="flex">
              <h1 className="text-[red] font-bold text-lg">HAMZA OUTMASSINT</h1>
              <img
                className="inline-block h-20 w-20 rounded-full ring-2 ring-white- absolute -right-8 rotate-6 z-10"
                src={myImage}
                alt=""
              />
            </div>
            <RoughNotation animationDelay={1000} padding={[5, 0]} multiline type="highlight">
              <h5 className="font-bold ">Full-stack Developer</h5>
            </RoughNotation>
            <div className="mt-6 mb-8 text-[#727171] text-lg">
              I am Hamza, a full-stack developer skilled in back-end (PHP/Laravel, SQL, MongoDB)
              and front-end (JavaScript, ReactJS, Redux). Experienced with CSS frameworks like Tailwind CSS,
              Bootstrap, and Sass for crafting dynamic, responsive designs. Passionate about building robust
              web applications.
            </div>
            <a
              href="mailto:outmassinthamza@gmail.com" target="_blank" rel="noreferrer"
              className="z-40 relative text-[#727171] underline"
            >
              outmassinthamza@gmail.com
            </a>
          </div>
          <div className="absolute w-[45%] h-[73%] bottom-16 right-44 top-40 bg-[#0b0b0e]  p-6 rounded-3xl rotate-12  code-snippet">
            <img src={codeSnippet} alt="code snippet" width={250} height={200} />
          </div>
        </div>
      </div>
      <a href="mailto:outmassinthamza@gmail.com" target="_blank" className="max-w-fit font-second-font mt-8 self-center" rel="noreferrer">
        <button className="relative group p-3 px-12 bg-main-color transition-colors duration-300 rounded-full border-2 border-main-color">
          <div className="absolute top-3.5 left-3 h-5 w-5 bg-bg-color rounded-full group-hover:h-full group-hover:w-full group-hover:top-0 group-hover:left-0 transition-all duration-300 z-10"></div>
          <span className="z-20 relative text-second-color group-hover:text-main-color font-bold">View Resume</span>
        </button>
      </a>
    </section>
  );
};
