import { Diagram3 } from "react-bootstrap-icons";
import butterfly from '../assets/butterfly.png';

export const SkillsSection = () => {
  return (
    <section className="h-screen pt-9 mt-6 overflow-hidden" id="skills-section">
      <div className="flex items-center md:justify-center sm:justify-start">
          <div className="border-1 border-second-color items-center rounded-full text-sm p-1 px-4 font-second-font tracking-normal sm:w-sm  md:w-md lg:w-lg xl:w-xl flex justify-between">
              <Diagram3 size={18}/>
              MY SKILLS
          </div>
      </div>
      <div className="relative">
        <img src={butterfly} alt="butterfly img" width={500} className="opacity-5 rotate-45 absolute lg:right-11 md:-right-14 sm:-right-16"/>
        <div className="">
          <h1>sdf</h1>
        </div>
      </div>
    </section>
  )
}
