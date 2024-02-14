import { Person } from "react-bootstrap-icons";
import  my_photo  from "../assets/my picture.png";

export const AboutMeSection = () => {
  return (
    <section className="lg:h-screen pt-9  xl:mt-16 exactly-1024:mt-24 " id="about-me-section">
      <div className="flex items-center md:justify-center sm:justify-start">
        <div className="border-1 border-fourth-color  items-center rounded-full text-sm p-1 px-4 font-second-font tracking-normal sm:w-sm  md:w-md lg:w-lg xl:w-xl exactly-1024:w-sm flex justify-between">
          <Person size={19} />
          ABOUT ME
        </div>
      </div>
      <div className=" mt-14 lg:w-[84%] grid grid-cols-1 lg:grid-cols-2 justify-center items-center ">
        <div className="">
          <img src={my_photo} alt="me" loading="lazy"/>
        </div>
        <div className="font-second-font text-xl xl:pr-10">
          <p className="mb-5">
            Hello there, I am <span className="text-main-color">Hamza Outmassint</span>, a full-stack developer with a proficiency in both back-end and front-end development.
            My passion lies in crafting robust and efficient web applications. On the back-end, I possess advanced skills in PHP,
            particularly with Laravel framework, SQL (MySQL), and MongoDB.
          </p>
          <p>
            When it comes to the front-end, I shine with proficiency in JavaScript,
            ReactJS, and Redux, empowering me to build dynamic and interactive user interfaces. Additionally, I am well-versed in popular CSS frameworks
            like Tailwind CSS and Bootstrap, as well as Sass, allowing me to craft visually appealing and responsive designs.
          </p>
        </div>
      </div>
    </section>
  );
};
