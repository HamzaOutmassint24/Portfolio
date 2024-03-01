import { Diagram3 } from "react-bootstrap-icons";
import butterfly from '../../assets/butterfly.png';

export const SkillsSection = () => {
  return (
    <section className="xl:h-full lg:h-screen exactly-1024:h-fit pt-9 mt-6 overflow-hidden" id="skills-section">
      <div className="flex items-center md:justify-center sm:justify-start">
          <div className="border-1 border-second-color items-center rounded-full text-sm p-1 px-4 font-second-font tracking-normal sm:w-sm  md:w-md lg:w-lg xl:w-xl flex justify-between">
              <Diagram3 size={18}/>
              MY SKILLS
          </div>
      </div>
      <div className="relative mt-10">
        <img src={butterfly} alt="butterfly img" width={500} className="opacity-5 rotate-45 absolute lg:right-11 md:-right-14 sm:-right-16 z-0"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
          <h1 className="text-4xl font-bold mb-4">Front-end</h1>
          <ul className="font-second-font text-fifth-color front-end">
            <li>✷ <span>React Js</span></li>
            <li>✷ <span>Next Js</span> </li>
            <li>✷ <span>JavaScript</span> </li>
            <li>✷ <span>APIs Rest</span> </li>
            <li>✷ <span> Redux</span> </li>
            <li>✷ <span>Html</span> </li>
            <li>✷ <span>Css</span> </li>
            <li>✷ <span>Sass</span> </li>
            <li>✷ <span> TailwindCss</span> </li>
            <li>✷ <span> Bootstrap</span> </li>
          </ul>
          </div>
          <div>
          <h1 className="text-4xl font-bold mb-4 z-50">Back-end</h1>
          <ul className="font-second-font text-fifth-color back-end">
            <li>✷  <span>Laravel</span> </li>
            <li>✷  <span>Php</span> </li>
            <li>✷  <span>Sql ( MySql )</span> </li>
            <li>✷  <span>MongoDb</span> </li>
          </ul>
          </div>
          <div>
          <h1 className="text-4xl font-bold mb-4 z-50">Design</h1>
          <ul className="font-second-font text-fifth-color design">
          <li>✷  <span>Figma</span> </li>
          <li>✷  <span>Canva</span> </li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
