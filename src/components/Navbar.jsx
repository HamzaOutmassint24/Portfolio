import { HouseDoor, Person, MenuButton, Diagram3, FileText, Envelope } from 'react-bootstrap-icons';

export const Navbar = ({ activeSection }) => {

    return (
        <nav className="hidden lg:block flex fixed top-44 right-52 items-center">
            <ul className="border-1 border-second-color rounded-full h-64 flex flex-col justify-between px-3 py-5">
                <li className="group flex relative">
                    <a href="#home">
                        <HouseDoor size={21} className={activeSection === "home" ? "text-main-color" : "text-fourth-color hover:text-main-color transition duration-200 ease-linear" } />
                        <span className="hidden group-hover:block absolute left-[-480%] top-1/2 transform -translate-y-1/2 bg-therd-color font-second-font text-sm text-white px-2 py-1 rounded">
                            Home
                        </span>
                    </a>
                </li>
                <li className="group flex relative">
                    <a href="#about-me-section">
                        <Person
                            size={23}
                            className={activeSection === "about-me-section" ? "text-main-color transition duration-200 ease-linear" : "text-fourth-color hover:text-main-color transition duration-200 ease-linear"}
                        />
                        <span className="hidden group-hover:block absolute left-[-480%] top-1/2 transform -translate-y-1/2 bg-therd-color font-second-font text-sm text-white px-2 py-1 rounded">
                            About
                        </span>
                    </a>
                </li>
                <li className="group flex relative">
                    <a href="#services-section">
                        <MenuButton
                            size={20}
                            className={activeSection === "services-section" ? "text-main-color transition duration-200 ease-linear" : "text-fourth-color hover:text-main-color transition duration-200 ease-linear"}
                        />
                        <span className="hidden group-hover:block absolute left-[-560%] top-1/2 transform -translate-y-1/2 bg-therd-color font-second-font text-sm text-white px-2 py-1 rounded">
                            Services
                        </span>
                    </a>
                </li>
                <li className="group flex relative">
                    <a href="#skills-section">
                        <Diagram3
                            size={22}
                            className={activeSection === "skills-section" ? "text-main-color transition duration-200 ease-linear" : "text-fourth-color hover:text-main-color transition duration-200 ease-linear"}
                        />
                        <span className="hidden group-hover:block absolute left-[-450%] top-1/2 transform -translate-y-1/2 bg-therd-color font-second-font text-sm text-white px-2 py-1 rounded">
                            Skills
                        </span>
                    </a>
                </li>
                <li className="group flex relative">
                    <a href="#project-section">
                        <FileText
                            size={21}
                            className={activeSection === "project-section" ? "text-main-color transition duration-200 ease-linear" : "text-fourth-color hover:text-main-color transition duration-200 ease-linear"}
                        />
                        <span className="hidden group-hover:block absolute left-[-550%] top-1/2 transform -translate-y-1/2 bg-therd-color font-second-font text-sm text-white px-2 py-1 rounded">
                            Portfolio
                        </span>
                    </a>
                </li>
                <li className="group flex relative">
                    <a href="#contact-section">
                        <Envelope
                            size={20}
                            className={activeSection === "contact-section" ? "text-main-color transition duration-200 ease-linear" : "text-fourth-color hover:text-main-color transition duration-200 ease-linear"}
                        />
                        <span className="hidden group-hover:block absolute left-[-520%] top-1/2 transform -translate-y-1/2 bg-therd-color font-second-font text-sm text-white px-2 py-1 rounded">
                            Contact
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
