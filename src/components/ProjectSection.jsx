import { MenuButton } from "react-bootstrap-icons";
import ProjectImg from "../assets/project images/project-img1.png"

export const ProjectSection = () => {
  return (
    <section className="xl:h-full lg:h-screen exactly-1024:h-fit pt-9 mt-6" id="project-section">
      <div className="flex items-center md:justify-center sm:justify-start">
          <div className="border-1 border-second-color items-center rounded-full text-sm p-1 px-4 font-second-font tracking-normal sm:w-sm  md:w-md lg:w-lg xl:w-xl flex justify-between">
              <MenuButton size={18}/>
              PORTFOLIO
          </div>
      </div>
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:w-[84%] relative">
        <div className={`pb-16 pt-6 px-6 rounded-3xl project-image1`}>
          <img src={ProjectImg} alt="project image" className="rounded-md"/>
        </div>
        <div className={`pb-16 pt-6 px-6 rounded-3xl project-image2`}>
          <img src={ProjectImg} alt="project image" className="rounded-md"/>
        </div>
      </div>
    </section>
  )
}
