import { HouseDoor, Github, Linkedin, ArrowDown } from "react-bootstrap-icons";
import img_my_project from "../assets/round-text.png";

export const IntroduceSection = ({scrollToSection}) => {
  return (
    <section className="lg:h-screen pt-9 exactly-1024:h-fit" id="home">
      <div className="flex items-center md:justify-center sm:justify-start">
        <div className="border-1 border-fourth-color rounded-full text-sm p-1 px-4 font-second-font tracking-normal sm:w-sm md:w-md lg:w-lg xl:w-xl exactly-1024:w-sm flex justify-between">
          <HouseDoor size={18} />
          INTRODUCE
        </div>
      </div>
      <div className="sm:mt-12 mt-24 pb-5 grid grid-flow-row-dense lg:grid-cols-3 ">
        <div className="lg:col-span-2">
          <div className="text-[#28e98c] relative mb-4 helloWorld">
            <span className="pl-14 md:text-xl font-second-font tracking-wide">
              HELLO WORLD
            </span>
          </div>
          <h1 className="font-main-font text-white sm:text-5xl md:text-5xl lg:text-5xl not-italic font-bold  mb-5 leading-[normal]">
            I am Hamza Outmassint, Full stack Developer.
          </h1>
          <span className="font-second-font text-fifth-color sm:text-sm md:text-base xl:pr-10">
            Crafting code, painting pixels. Full stack, full passion. Let's build something beautiful together!
          </span>
          <div className="flex mt-4">
            <a
              title="github"
              href="#github account/"
              className="h-1/2 border-3 border-fourth-color p-2 rounded-full mr-4 group hover:border-main-color transition duration-200 ease-linear"
            >
              <Github
                size={30}
                className="text-fourth-color group-hover:text-main-color transition duration-200 ease-linear p-1"
              />
            </a>

            <a
              title="linkdin"
              href="#linkedin account/"
              className="h-1/2 border-3 border-fourth-color group hover:border-main-color p-2 rounded-full flex items-center justify-center transition duration-200 ease-linear"
            >
              <Linkedin
                size={30}
                className="text-fourth-color group-hover:text-main-color transition duration-200 ease-linear p-1"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <button onClick={() => scrollToSection('about-me-section')} >
          <ArrowDown
            size={35}
            className="absolute lg:right-[15.8rem] lg:-top-3 xl:-top-5 xl:right-[21.3rem] exactly-1024:right-[15.3rem] animate-bounce"
          />
          <img
            src={img_my_project}
            alt="my project icon"
            className="absolute lg:right-48 lg:-top-20 xl:right-72  circle-animation "
          />
        </button>
      </div>
    </section>
  );
};
