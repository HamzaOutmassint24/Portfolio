import { Person } from "react-bootstrap-icons";
import  my_photo  from "../assets/my picture.png";

export const AboutMeSection = () => {
  return (
    <section className="lg:h-screen pt-9 exactly-1024:mt-24 " id="about-me-section">
      <div className="flex items-center md:justify-center sm:justify-start">
        <div className="border-1 border-fourth-color  items-center rounded-full text-sm p-1 px-4 font-second-font tracking-normal sm:w-sm  md:w-md lg:w-lg xl:w-xl exactly-1024:w-sm flex justify-between">
          <Person size={19} />
          ABOUT ME
        </div>
      </div>
      <div className="grid mt-20 lg:w-[84%] grid-flow-row-dense grid-cols-2">
        <div className="col-span-1">
          <img src={my_photo} alt="my picture" loading="lazy"/>
        </div>
        <div className="font-second-font col-span-1 text-xl">Hello there, I am Hamza Outmassint, a full-stack developer with an expertise in both back-end and front-end development.
          My passion lies in crafting robust and efficient web applications. On the back-end, I possess advanced skills in PHP,
          particularly with Laravel framework, SQL (MySQL), and MongoDB. When it comes to the front-end, I shine with proficiency in JavaScript,
          ReactJS, and Redux, empowering me to build dynamic and interactive user interfaces. Additionally, I am well-versed in popular CSS frameworks
          like Tailwind CSS and Bootstrap, as well as Sass, allowing me to craft visually appealing and responsive designs.
        </div>
      </div>
    </section>
  );
};
