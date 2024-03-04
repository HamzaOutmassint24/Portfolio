import { MenuButton, CodeSlash } from "react-bootstrap-icons";
import figma from "../../assets/figma.svg"

export const ServicesSection = () => {
  return (
    <section className="xl:h-full lg:h-screen exactly-1024:h-fit pt-9 md:mb-48 sm:mb-28 relative" id="services-section">
      <div className="blobs -left-56 top-24"></div>
      <div className="flex items-center md:justify-center sm:justify-start">
        <div className="border-1 border-second-color items-center rounded-full text-sm p-1 px-4 font-second-font tracking-normal sm:w-sm  md:w-md lg:w-lg xl:w-xl flex justify-between">
          <MenuButton size={18} />
          SERVICES
        </div>
      </div>
      <div className="mt-14 lg:w-[70%] font-second-font">
        <h1 className="font-second-font lg:text-5xl sm:text-xl">
        <span>My</span> <br/><span className="text-main-color">Specializations</span>
        </h1>
        <div className="md:mt-12 sm:mt-8">
          <div className="flex justify-between border-1 border-fourth-color hover:border-main-color transition duration-200 ease-linear rounded-xl h-32 p-8 px-8 mb-6">
            <div className="flex flex-col justify-center">
              <span className="text-xl mb-1 font-normal">Development</span>
              <span className="text-fifth-color"> Build your website using the latest and powerful technologies</span>
            </div>
            <div>
              <CodeSlash size={30} className="text-main-color" />
            </div>
          </div>
          <div className="flex justify-between border-1 border-fourth-color hover:border-main-color transition duration-200 ease-linear rounded-xl h-32 p-8 px-8 ">
            <div className="flex flex-col justify-center">
              <span className="text-xl mb-1">Website design</span>
              <span className="text-fifth-color">I created digital products with unique ideas using Figma</span>
            </div>
            <div>
              <img src={figma} alt="figma icon" width={35} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
