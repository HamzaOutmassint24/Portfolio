import React, { useState } from 'react';
import { MenuButton, XSquare } from 'react-bootstrap-icons';
import ProjectImg from '../assets/project images/project-img1.png';

export const ProjectSection = () => {
  // Step 1: Define state to manage the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Step 2: Create a function to handle the opening and closing of the modal
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
      <div className="mt-9 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:w-[84%] relative font-second-font">
        <div className=' project-image1 relative rounded-3xl h-80 group pb-16 pt-5 px-6'>
          <a href="#model" className={`flex flex-col `} onClick={handleModalToggle}>
            <h1 className="text-lg font-bold mb-3 text-bg-color">Stock Building materials</h1>
            <img src={ProjectImg} alt="project image" className="rounded-md"/>
            <div className="flex justify-between mt-7">
              <div>
                <span className="p-3 px-6 bg-white text-bg-color group-hover:bg-bg-color group-hover:text-white transition duration-200 ease-linear rounded-full mr-2 cursor-default">React</span>
                <span className="p-3 px-6 bg-white text-bg-color group-hover:bg-bg-color group-hover:text-white transition duration-200 ease-linear rounded-full cursor-default">Laravel</span>
              </div>
            </div>
          </a>
          <a href="#details" className="absolute bottom-5 right-7 text-bg-color hover:text-blue text underline underline-offset-1">More Details</a>
        </div>
        <div className={`pb-16 pt-1 px-6 rounded-3xl project-image2 relative h-80 `}>
          <img src={ProjectImg} alt="project image" className="rounded-md"/>
        </div>
      </div>
      {/* Step 3: Conditionally render the modal based on the state */}
      {isModalOpen && (
        <div onClick={handleModalToggle} className="fixed inset-0 bg-bg-color bg-opacity-50 flex items-center justify-center">
          <div className="flex justify-center items-center project-image1 text-bg-color p-8 relative rounded-lg w-[70%] h-[70%]">
            <img src={ProjectImg} alt="project image" className="rounded-md w-3/4"/>
            <button onClick={handleModalToggle} className='absolute top-4 right-4'>
              <XSquare size={18}/>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
