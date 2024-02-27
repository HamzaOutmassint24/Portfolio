import { Envelope } from "react-bootstrap-icons"

export const ContactSection = () => {
  return (
    <section className="xl:h-full lg:h-full exactly-1024:h-fit pt-9 pb-28" id="contact-section">
      <div className="flex items-center md:justify-center sm:justify-start">
          <div className="border-1 border-second-color items-center rounded-full text-sm p-1 px-4 font-second-font tracking-normal sm:w-sm  md:w-md lg:w-lg xl:w-xl flex justify-between">
              <Envelope size={18}/>
              CONTACT
          </div>
      </div>
      <div>
        <div className="flex flex-col mb-6 mt-10">
          <div>
            <h1 className="text-5xl font-bold">Let's chat.</h1>
            <h1 className="text-5xl font-bold mb-5">Tell me about your project.</h1>
            <p className="font-second-font text-fifth-color">
            I'm open to Job opportunities for both remote and non-remote positions where I can contribute,
            learn and grow. 
            </p>
            <p className="font-second-font text-fifth-color">
            If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
            </p>
          </div>
          <a  href="mailto:outmassinthamza@gmail.com" target="_blank" className="max-w-fit font-second-font mt-8">
            <button className="relative group p-3 px-12 bg-main-color transition-colors duration-300 rounded-full border-2 border-main-color">
              <div className="absolute top-3.5 left-3 h-5 w-5 bg-bg-color rounded-full group-hover:h-full group-hover:w-full group-hover:top-0 group-hover:left-0 transition-all duration-300 z-10"></div>
              <span className="z-20 relative text-second-color group-hover:text-main-color font-bold">DROP ME AN EMAIL</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
