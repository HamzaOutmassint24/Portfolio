import { MenuButton } from "react-bootstrap-icons"

export const ContactSection = () => {
  return (
    <section className="xl:h-full lg:h-screen exactly-1024:h-fit pt-9" id="contact-section">
      <div className="flex items-center md:justify-center sm:justify-start">
          <div className="border-1 border-second-color items-center rounded-full text-sm p-1 px-4 font-second-font tracking-normal sm:w-sm  md:w-md lg:w-lg xl:w-xl flex justify-between">
              <MenuButton size={18}/>
              CONTACT
          </div>
      </div>
      <div>
        
      </div>
    </section>
  )
}
