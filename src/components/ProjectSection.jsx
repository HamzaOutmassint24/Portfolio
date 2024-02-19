import React, { useState } from 'react';
import { MenuButton, XSquare } from 'react-bootstrap-icons';
import Project1Img1 from '../assets/project images/project-img1.png';
import Project2Img1 from '../assets/project images/project2-img1.jpeg';
import {Github} from "react-bootstrap-icons";

export const ProjectSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="xl:h-full lg:h-full exactly-1024:h-fit pt-9 mt-6" id="project-section">
      <div className="flex items-center md:justify-center sm:justify-start">
        <div className="border-1 border-second-color items-center rounded-full text-sm p-1 px-4 font-second-font tracking-normal sm:w-sm  md:w-md lg:w-lg xl:w-xl flex justify-between">
          <MenuButton size={18}/>
          PORTFOLIO
        </div>
      </div>
      <div className="mt-9 grid grid-cols-1 lg:grid-cols-2 sm:place-items-center lg:place-items-start gap-8 lg:w-[84%] relative font-second-font">
        <div class="lg:max-w-sm sm:max-w-sm md:max-w-xl lg:h-72 rounded-lg overflow-hidden shadow-lg project-cart1">
          <div class="font-bold text-bg-color text-lg my-1 pl-2">Stock Building Materials</div>
          <img class="w-full px-2" src={Project1Img1} alt="Sunset in the mountains" />
          <div class="px-2 pt-4 lg:mt-4">
            <span class="inline-block bg-bg-color rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React/Laravel</span>
            <span class="inline-block bg-bg-color rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TailwindCss</span>
          </div>
        </div>
        <div class="lg:max-w-sm sm:max-w-sm md:max-w-xl lg:h-72 rounded-lg overflow-hidden shadow-lg project-cart2">
          <div class="font-bold text-bg-color text-lg my-1 pl-2">Multishop</div>
          <img class="w-full px-2" src={Project2Img1} alt="Sunset in the mountains" />
          <div class="px-2 pt-4 lg:mt-4 flex justify-between items-center">
            <div>
              <span class="inline-block bg-bg-color text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React/Laravel</span>
              <span class="inline-block bg-bg-color text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Material UI</span>
            </div>
            <span class="inline-block pl-3 py-1 mr-1 mb-2">
              <a title="github" href="https://github.com/HamzaOutmassint" className="group">
                <Github size={30} className="text-bg-color"/>
              </a>
            </span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div onClick={handleModalToggle} className="fixed inset-0 bg-bg-color bg-opacity-50 flex items-center justify-center">
          <div className="flex justify-center items-center project-image1 text-bg-color p-8 relative rounded-lg w-[70%] h-[70%]">
            <img src={Project1Img1} alt="project image" className="rounded-md w-3/4"/>
            <button onClick={handleModalToggle} className='absolute top-4 right-4'>
              <XSquare size={18}/>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
