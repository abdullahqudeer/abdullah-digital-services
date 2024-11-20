import React from "react";

const Home = ({ onLinkClick, refs }) => {
  const handleNavbarLinkClick = (scrollToSection) => {
    onLinkClick(scrollToSection);
  };
  return (
    <>
      <div className="2xl:h-[700px] 2xl:flex lg:pt-[100px] pt-[150px] items-center z-10 relative">
        <div className="container mx-auto px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]">
          <div className="flex flex-wrap -mx-4">
            <div className="lg:w-1/2 px-4 self-center w-full">
              <div>
                <h1 className="text-customBlue font-semibold text-base mb-3">
                  Hey There &#128075; I am
                  <span className="lg:leading-[50px] lg:text-[45px]  md:text-[1.875rem] md:leading-[2.25rem] block text-customBlack">
                    Abdullah Qudeer
                  </span>
                </h1>
                <h2 className="text-[rgb(149,156,177)] font-medium mb-5 m-0 text-lg">
                  Full-Stack{" "}
                  <span className="text-[rgb(9,14,52)]">
                    Software Developer
                  </span>
                </h2>
                <p className="text-[rgb(149,156,177)] font-medium text-base leading-6 max-w-[470px] mb-[2.75rem]">
                  With over 11 years of experience in full-stack development, I
                  specialize in creating high-performance applications and
                  scalable solutions. My deep understanding of both front-end
                  and back-end technologies enables me to design and develop
                  user-friendly, efficient, and secure applications. Whether you
                  need a dynamic web application, a robust server-side API, or a
                  cloud-based infrastructure, I deliver solutions tailored to
                  your business needs.
                </p>
                <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
                  <a
                    href="#contact"
                    className="px-6 py-2 sm:px-8 sm:py-3 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition duration-200 sm:mr-4 mb-2 sm:mb-0"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavbarLinkClick(refs.contact);
                    }}
                  >
                    Contact Me
                  </a>

                  <a
                    href="#about"
                    className="px-6 py-2 sm:px-8 sm:py-3 font-semibold text-white bg-black bg-opacity-60 rounded-full hover:bg-opacity-50 transition duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavbarLinkClick(refs.about);
                    }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 px-4 self-end w-full">
              <div className="2xl:right-40 2xl:bottom-0 2xl:absolute lg:mt-0 mt-12 z-10 relative">
                <img
                  src="images/hero-image.png"
                  alt="Abdullah Qudeer"
                  className="max-w-full ml-auto mr-auto"
                ></img>

                <span className="absolute bottom-2">
                  <svg
                    width="40"
                    height="38"
                    viewBox="0 0 40 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.31451 3.18282L32.4926 6.24789C36.3084 6.75249 38.147 11.1986 35.8021 14.2508L21.5587 32.7911C19.2138 35.8434 14.444 35.2126 12.9731 31.6558L4.03852 10.0504C2.56762 6.49355 5.49873 2.67822 9.31451 3.18282Z"
                      stroke="#4A6CF7"
                      strokeWidth="6"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute top-[8rem] left-[0] hidden sm:block">
            <svg
              width="48"
              height="95"
              viewBox="0 0 48 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="0.5"
                cy="47.5"
                r="47.5"
                fill="url(#paint0_radial_6:121)"
              ></circle>
              <defs>
                <radialGradient
                  id="paint0_radial_6:121"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(0.5) rotate(90) scale(95)"
                >
                  <stop stopColor="white"></stop>
                  <stop offset="0.569" stopColor="#F0F4FD"></stop>
                  <stop offset="0.993" stopColor="#D9E0F0"></stop>
                </radialGradient>
              </defs>
            </svg>
          </span>

          <span className="absolute right-0 bottom-0 hidden sm:block">
            <svg
              width="491"
              height="490"
              viewBox="0 0 491 490"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="356.5"
                cy="356.5"
                r="356.5"
                fill="url(#paint0_linear_6:37)"
              ></circle>
              <defs>
                <linearGradient
                  id="paint0_linear_6:37"
                  x1="356.5"
                  y1="0"
                  x2="356.5"
                  y2="713"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7"></stop>
                  <stop offset="1" stopColor="#1E3BB3"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
