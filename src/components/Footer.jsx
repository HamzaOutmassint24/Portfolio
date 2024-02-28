import {Github, Linkedin} from "react-bootstrap-icons";

export default function Footer() {
    return (
        <div className="font-second-font pb-4 flex justify-between">
            <span> © Designed and Developed by me :) </span>
            <span className="flex xl:mr-16">
                <a
                    title="github"
                    href="https://github.com/HamzaOutmassint"
                    className="group"
                >
                    <Github
                        size={30}
                        className="text-fourth-color group-hover:text-main-color transition duration-200 ease-linear p-1"
                    />
                </a>
                <a
                    title="linkdin"
                    href="https://www.linkedin.com/in/hamza-outmassint/"
                    className="group"
                >
                    <Linkedin
                        size={30}
                        className="text-fourth-color group-hover:text-main-color transition duration-200 ease-linear p-1"
                    />
                </a>
            </span>
        </div>
    );
}
