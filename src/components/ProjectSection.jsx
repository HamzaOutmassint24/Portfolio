import React, { useState } from 'react';
import { MenuButton, XSquare } from 'react-bootstrap-icons';
import Project1Img1 from '../assets/project images/project-img1.png';
import Project2Img1 from '../assets/project images/project2-img1.jpeg';
import { Github } from "react-bootstrap-icons";

export const ProjectSection = ({handleModalToggle}) => {
 
  return (
    <section className="xl:h-full lg:h-full exactly-1024:h-fit pt-9 mt-6" id="project-section">
      <div className="flex items-center md:justify-center sm:justify-start">
        <div className="border-1 border-second-color items-center rounded-full text-sm p-1 px-4 font-second-font tracking-normal sm:w-sm  md:w-md lg:w-lg xl:w-xl flex justify-between">
          <MenuButton size={18}/>
          PORTFOLIO
        </div>
      </div>
      <div className="my-24 grid grid-cols-1 lg:grid-cols-2 sm:place-items-center lg:place-items-start gap-8 lg:w-[84%] relative font-second-font">
        <div className="lg:max-w-sm sm:max-w-sm md:max-w-xl lg:h-72 rounded-lg overflow-hidden shadow-lg project-cart1">
          <div className="font-bold text-bg-color text-lg my-1 pl-2">Stock Building Materials</div>
          <img className="w-full px-2 cursor-pointer" src={Project1Img1} alt="Sunset in the mountains" onClick={handleModalToggle}/>
          <div className="px-2 pt-4 lg:mt-4 flex justify-between items-center">
            <div>
              <span className="inline-block bg-bg-color rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React/Laravel</span>
              <span className="inline-block bg-bg-color rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TailwindCss</span>
            </div>
            <span className="inline-block pl-3 py-1 mr-1 mb-2">
              <a title="github" href="https://github.com/HamzaOutmassint/Stock-Building-materials-V2" className="group">
                <Github size={30} className="text-bg-color"/>
              </a>
            </span>
          </div>
        </div>
        <div className="lg:max-w-sm sm:max-w-sm md:max-w-xl lg:h-72 rounded-lg overflow-hidden shadow-lg project-cart2">
          <div className="font-bold text-bg-color text-lg my-1 pl-2">Multishop</div>
          <img className="w-full px-2 cursor-pointer" src={Project2Img1} alt="Sunset in the mountains" />
          <div className="px-2 pt-4 lg:mt-4 flex justify-between items-center">
            <div>
              <span className="inline-block bg-bg-color text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React/Laravel</span>
              <span className="inline-block bg-bg-color text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Material UI</span>
            </div>
            <span className="inline-block pl-3 py-1 mr-1 mb-2">
              <a title="github" href="https://github.com/HamzaOutmassint/MultiShop" className="group">
                <Github size={30} className="text-bg-color"/>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
