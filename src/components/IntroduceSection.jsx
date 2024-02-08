import { HouseDoor, Github, Linkedin, ArrowDown } from "react-bootstrap-icons";
import img_my_project from "../assets/round-text.png";

export const IntroduceSection = () => {
    return (
        <section className="h-screen pt-9" id="home">
            <div className="flex items-center justify-center">
                <div className="border-1 border-second-color rounded-full text-sm p-1 px-4 font-second-font tracking-normal w-30 flex justify-between">
                    <HouseDoor size={18} />
                    INTRODUCE
                </div>
            </div>
            <div className="mt-24 pb-5 grid grid-flow-row-dense grid-cols-3 ">
                <div className="col-span-2">
                    <div className="text-[#28e98c] relative mb-4 helloWorld">
                        <span className="pl-14 font-second-font tracking-wide">
                            HELLO WORLD
                        </span>
                    </div>
                    <h1 className="text-white text-5xl md:text-2xl lg:text-4xl not-italic font-bold max-w-xl  leading-[normal]">
                        I am Hamza Outmassint, Full stack Developer.
                    </h1>
                    <div className="flex mt-4">
                        <a title="github"
                            href="#github account/"
                            className="border-3 border-second-color p-2 rounded-full mr-4 group hover:border-main-color transition duration-200 ease-linear"
                        >
                            <Github
                                size={40}
                                className="text-fourth-color group-hover:text-main-color transition duration-200 ease-linear"
                            />
                        </a>

                        <a title="linkdin"
                            href="#linkedin account/"
                            className="border-3 border-second-color group hover:border-main-color p-2 rounded-full flex items-center justify-center transition duration-200 ease-linear"
                        >
                            <Linkedin
                                size={38.5}
                                className="text-fourth-color group-hover:text-main-color transition duration-200 ease-linear"
                            />
                        </a>
                    </div>
                </div>
            </div>
                <div className="relative hidden lg:block md:block" >
                    <a href="#about-me-section">
                    <ArrowDown size={35} className="absolute right-[15.8rem] -top-3 animate-bounce"/>
                    <img src={img_my_project}  alt="my project icon" className="absolute right-48 circle-animation -top-20" />
                    </a>
                </div>
        </section>
    );
};
