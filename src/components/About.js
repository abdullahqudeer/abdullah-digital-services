import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faHammer,
  faGraduationCap,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <div className="relative pt-145 pb-120 z-10">
        <div className="w-ful mx-auto px-8 sm:px-4 max-w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]">
          <div className="flex flex-wrap -mx-4">
            <span className="text-[1.25rem] leading-[1.75rem] text-[rgb(74,108,247)] font-semibold mb-3">
              ABOUT ME
            </span>
          </div>
          <div className="flex flex-wrap -mx-4 mb-12">
            <div className="w-full mb-8 px-4 lg:mb-0 lg:w-1/2 xl:w-1/2">
              <div className="flex mb-5 items-center">
                <FontAwesomeIcon
                  className="text-blue-500 w-8 h-8 mr-4"
                  icon={faHammer}
                ></FontAwesomeIcon>
                <h2 className="text-[1.875rem] leading-[1.25] font-semibold text-[rgb(9,14,52)] ">
                  Crafting Solutions That Matter
                </h2>
              </div>
              <p className="text-[rgb(149,156,177)] font-medium ml-12">
                Every line of code I write is aimed at solving real-world
                problems. I focus on understanding the unique needs of each
                project to deliver solutions that make a meaningful impact on
                users and businesses alike.
              </p>
            </div>
            <div className="w-full mb-8 px-4 lg:mb-0 lg:w-1/2 xl:w-1/2">
              <div className="flex  mb-5 items-center">
                <FontAwesomeIcon
                  className="text-blue-500 w-8 h-8 mr-4"
                  icon={faLightbulb}
                ></FontAwesomeIcon>
                <h2 className="text-[1.875rem] leading-[1.25] font-semibold text-[rgb(9,14,52)]">
                  Passion for Innovation
                </h2>
              </div>
              <p className="text-[rgb(149,156,177)] font-medium ml-12">
                In the fast-paced world of technology, staying ahead means
                embracing change. I'm passionate about exploring new tools and
                methodologies that can elevate my work and provide cutting-edge
                solutions for clients.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full mb-8 px-4 lg:mb-0 lg:w-1/2 xl:w-1/2">
              <div className="flex mb-5 items-center">
                <FontAwesomeIcon
                  className="text-blue-500 w-8 h-8 mr-4"
                  icon={faGraduationCap}
                ></FontAwesomeIcon>
                <h2 className="text-[1.875rem] leading-[1.25] font-semibold text-[rgb(9,14,52)]">
                  Committed to Continuous Learning
                </h2>
              </div>
              <p className="text-[rgb(149,156,177)] font-medium ml-12">
                The journey of a developer is one of constant growth. I thrive
                on learning and adapting to new challenges, always seeking
                opportunities to expand my skill set and deliver the best
                possible outcomes for my projects.
              </p>
            </div>
            <div className="w-full mb-8 px-4 lg:mb-0 lg:w-1/2 xl:w-1/2">
              <div className="flex mb-5 items-center">
                <FontAwesomeIcon
                  className="text-blue-500 w-8 h-8 mr-4"
                  icon={faMagnifyingGlass}
                ></FontAwesomeIcon>
                <h2 className="text-[1.875rem] leading-[1.25] font-semibold text-[rgb(9,14,52)]">
                  Driven by Curiosity
                </h2>
              </div>
              <p className="text-[rgb(149,156,177)] font-medium ml-12">
                Curiosity fuels my passion for technology. I am constantly
                exploring new concepts, tools, and trends in the industry. This
                drive to learn not only keeps my skills sharp but also inspires
                innovative solutions in my work. I believe that asking the right
                questions leads to discovery and growth, and I actively seek out
                opportunities to collaborate and share knowledge with others.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 hidden sm:block">
          <svg
            width="60"
            height="120"
            viewBox="0 0 60 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="60"
              cy="60"
              r="60"
              fill="url(#paint0_radial_18:24)"
            ></circle>
            <defs>
              <radialGradient
                id="paint0_radial_18:24"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(60) rotate(90) scale(120)"
              >
                <stop stopColor="white"></stop>
                <stop offset="0.569" stopColor="#F0F4FD"></stop>
                <stop offset="0.993" stopColor="#D9E0F0"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};
export default About;
