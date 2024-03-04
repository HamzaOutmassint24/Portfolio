import { Diagram3 } from "react-bootstrap-icons";
import butterfly from '../../assets/butterfly.png';
import Skills from '../database/Skills.json';
import React, { useRef, useState } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const SkillsSection = () => {
  const [dragStatus, setDragStatus] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  gsap.registerPlugin(Draggable, MotionPathPlugin, ScrollTrigger);

  const container = useRef();
  const collisionDiv = useRef();
  const sphere = useRef();

  // GSAP Animations
  useGSAP(() => {
    const boxes = gsap.utils.toArray(`.box`);

    const handleResize = () => {
      // MotionPath
      gsap.set(boxes, {
        motionPath: {
          path: "#circularCarouselPath",
          align: "#circularCarouselPath",
          alignOrigin: [0.5, 0.5],
          start: -0.25,
          end: (i) => i / boxes.length - 0.25,
          autoRotate: true
        }
      });
    };

    // Draggable
    setActiveIndex(0);
    Draggable.create(`.circularCarousel`, {
      type: "rotation",
      inertia: true,
      snap: (endVal) => gsap.utils.snap(360 / boxes.length, endVal),
      onPress: () => {
        setDragStatus('pressed');
      },
      onRelease: () => {
        setDragStatus(null);
      },
      onDragStart: () => {
        setActiveIndex(null);
      },
      onThrowComplete: () => {
        let collisionDivRect = collisionDiv.current?.getBoundingClientRect();
        let newActiveIndex = null;

        boxes.forEach((box, index) => {
          let boxRect = box.getBoundingClientRect();
          if (
            collisionDivRect.x < boxRect.x + boxRect.width &&
            collisionDivRect.x + collisionDivRect.width > boxRect.x &&
            collisionDivRect.y < boxRect.y + boxRect.height &&
            collisionDivRect.y + collisionDivRect.height > boxRect.y
          ) {
            newActiveIndex = index;
          }
        });
        setActiveIndex(newActiveIndex);
      },
    });

  //   const sphereTL = gsap.timeline({
  //     scrollTrigger: {
  //         trigger: container.current,
  //         start: 'top 25%',
  //         end: 'bottom 75%',
  //         scrub: true,
  //         toggleActions: 'play none none reverse',
  //     }
  // });
  // sphereTL.from(sphere.current, {
  //     yPercent: -200
  // })

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, { scope: container });





  return (
    <section className="xl:h-[44rem] lg:h-[46rem] exactly-1024:h-fit pt-9 mt-6 overflow-hidden relative z-0" id="skills-section" ref={container}>
      {/* <div className="blobs left-0"></div> */}
      <div className="flex items-center md:justify-center sm:justify-start">
        <div className="border-1 border-second-color items-center rounded-full text-sm p-1 px-4 font-second-font tracking-normal sm:w-sm  md:w-md lg:w-lg xl:w-xl flex justify-between">
          <Diagram3 size={18} />
          <span className="pr-5"> SKILLS </span>
        </div>
      </div>
      <div className="relative mt-10 mr-16">
        <img src={butterfly} alt="butterfly img" width={500} className="opacity-5 rotate-45 absolute lg:right-11 md:-right-14 sm:-right-16 z-0" />
        <h1 className="font-second-font lg:text-5xl sm:text-xl">
          <span>My</span> <br /><span className="text-main-color">Skillset</span>
        </h1>


        <div className="flex justify-center items-center mt-8">
          <div className='collisionDiv' ref={collisionDiv}></div>
          <div className="w-[40dvw] circularCarousel relative">
            <svg viewBox="0 0 400 400" className="visible h-full w-full pointer-events-none">
              <path strokeWidth="2" stroke="red" id="circularCarouselPath" fill="none"
                d="M396,200 C396,308.24781 308.24781,396 200,396 91.75219,396 4,308.24781 4,200 4,91.75219 91.75219,4 200,4 308.24781,4 396,91.75219 396,200 z"></path>
            </svg>

            {Skills.map((skill, index) => (
              <div key={index}
                className={`box flex  justify-center items-center rounded-2xl ${activeIndex === index ? 'isActive' : ''}`}>
                <img src={require(`../../assets/icons/${skill.image}`)} alt={skill.title} width={100} height={100} loading={'lazy'} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div ref={sphere} className='sphereWrapper'>
        <div className={`sphere ${dragStatus === 'pressed' ? 'isActive' : ''}`}></div>
      </div>
    </section>
  )
}
