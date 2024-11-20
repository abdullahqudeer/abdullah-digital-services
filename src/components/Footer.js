import React from "react";

const Footer = ({ onLinkClick, refs }) => {
  return (
    <>
      <footer className="pb-12 pt-[100px] bg-[rgb(9,14,52)] z-10 relative">
        <div className="w-full mx-auto px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="mb-10">
                <h2 className="font-bold text-[rgb(255,255,255)] text-[44px] leading-5 mb-6">
                  Let's Talk!
                </h2>
                <h3 className="font-bold text-[rgb(255,255,255)] opacity-70 text-xl leading-8 mb-2">
                  Contact Me
                </h3>
                <p className="eh text-base leading-6 text-[rgb(149,156,177)] mb-3">
                  I would love to hear about your project! Please reach out via
                  Upwork's messaging system to start the conversation.
                </p>
                <p className="eh text-base leading-6 text-[rgb(149,156,177)] mb-3">
                  I'm available to discuss your needs and how I can help you
                  achieve your goals.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-[25%] px-4">
              <div className="mb-10">
                <h3 className="font-semibold text-[rgb(255,255,255)] text-lg leading-7 mb-9">
                  What I Do?
                </h3>
                <ul>
                  <li>
                    <p className="eh text-base leading-6 text-[rgb(149,156,177)] mb-3">
                      Frontend Development
                    </p>
                  </li>
                  <li>
                    <p className="eh text-base leading-6 text-[rgb(149,156,177)] mb-3">
                      Backend Solutions
                    </p>
                  </li>
                  <li>
                    <p className="eh text-base leading-6 text-[rgb(149,156,177)] mb-3">
                      Database Management
                    </p>
                  </li>
                  <li>
                    <p className="eh text-base leading-6 text-[rgb(149,156,177)] mb-3">
                      Cloud Deployment
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/6 px-4">
              <div className="mb-10">
                <h3 className="font-semibold text-[rgb(255,255,255)] text-lg leading-7 mb-9">
                  Core Skills
                </h3>
                <ul>
                  <li>
                    <p className="eh text-base leading-6 text-[rgb(149,156,177)] mb-3">
                      .Net Core
                    </p>
                  </li>
                  <li>
                    <p className="eh text-base leading-6 text-[rgb(149,156,177)] mb-3">
                      SQL Server
                    </p>
                  </li>
                  <li>
                    <p className="eh text-base leading-6 text-[rgb(149,156,177)] mb-3">
                      Angular
                    </p>
                  </li>
                  <li>
                    <p className="eh text-base leading-6 text-[rgb(149,156,177)] mb-3">
                      React.js
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-[25%] px-4">
              <div className="mb-10">
                <h3 className="font-semibold text-[rgb(255,255,255)] text-lg leading-7 mb-9">
                  Quick Links
                </h3>
                <ul>
                  <li>
                    <a
                      href="#resume"
                      onClick={(e) => {
                        e.preventDefault();
                        onLinkClick(refs.resume);
                      }}
                      className="inline-block text-base leading-6 text-[rgb(149,156,177)] mb-3 group hover:text-blue-600"
                    >
                      Resume
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      onClick={(e) => {
                        e.preventDefault();
                        onLinkClick(refs.skills);
                      }}
                      className="inline-block text-base leading-6 text-[rgb(149,156,177)] mb-3 group hover:text-blue-600"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        onLinkClick(refs.contact);
                      }}
                      className="inline-block text-base leading-6 text-[rgb(149,156,177)] mb-3 group hover:text-blue-600"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        onLinkClick(refs.services);
                      }}
                      className="inline-block text-base leading-6 text-[rgb(149,156,177)] mb-3 group hover:text-blue-600"
                    >
                      What I Offer ?
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-12 border-opacity-10 border-t border-[rgb(255,255,255)]">
            <div className="flex items-center justify-center mb-6">
              <a
                href="https://github.com/abdullahqudeer"
                className="flex items-center justify-center w-8 h-8 on mx-2 text-[rgb(149,156,177)] group hover:text-blue-600"
                aria-label="social-link"
                name="social-link"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.39 1C8.555 1 1.338 8.217 1.338 17.052c0 7.073 4.574 13.041 10.924 15.138.798.14 1.096-.339 1.096-.757 0-.379-.02-1.636-.02-2.968-4.04.744-5.086-1.003-5.413-1.923-.182-.471-.967-1.922-1.653-2.31-.563-.307-1.37-1.065-.02-1.085 1.269-.02 2.177 1.167 2.482 1.652 1.45 2.435 3.767 1.75 4.696 1.326.14-1 .563-1.672 1.027-2.056-3.581-.402-7.325-1.83-7.325-8.125 0-1.788.635-3.27 1.678-4.42-.164-.41-.736-2.091.164-4.347 0 0 1.305-.41 4.285 1.678 1.245-.35 2.567-.524 3.89-.524 1.323 0 2.645.177 3.89.524 2.98-2.027 4.285-1.678 4.285-1.678 1.38 2.256.5 3.939.164 4.347 1.678 1.666 2.037 3.777 2.037 4.42 0 6.305-3.846 7.71-7.513 8.125.598.514 1.112 1.5 1.112 3.04 0 2.194-.02 3.96-.02 4.513 0 .432.308.948 1.125.782C26.674 30.88 31 24.413 31 17.052 31 8.217 23.825 1 17.39 1z"></path>
                </svg>
              </a>
              <a
                href="https://stackoverflow.com/users/2200123/abdullah-qudeer"
                className="flex items-center justify-center w-8 h-8 on mx-2 text-[rgb(149,156,177)] group hover:text-blue-600"
                aria-label="social-link"
                name="social-link"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="32"
                  height="32"
                  className="fill-current"
                >
                  <path d="M28.16 32H2.475V20.58H5.32v8.575h19.956V20.58h2.884z" />
                  <path d="M8.477 19.8l13.993 2.923.585-2.806-13.993-2.923zm1.832-6.704l12.94 6.04 1.208-2.572-12.94-6.08zm3.586-6.353l10.99 9.12 1.832-2.183-10.99-9.12zM20.99 0l-2.3 1.715 8.536 11.46 2.3-1.715zM8.166 26.27H22.43v-2.845H8.166v2.845z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          className="absolute left-0 bottom-0 nn"
          aria-label="shape"
          name="shape"
        >
          <span className="hidden">shape</span>
          <svg
            width="143"
            height="138"
            viewBox="0 0 143 138"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="25"
              cy="118"
              r="101"
              stroke="url(#paint0_linear_52:83)"
              stroke-width="34"
            ></circle>
            <defs>
              <linearGradient
                id="paint0_linear_52:83"
                x1="-12.7969"
                y1="-37.3359"
                x2="99.2109"
                y2="173.773"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A6CF7"></stop>
                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div
          className="absolute right-3 top-3 nn"
          aria-label="shape"
          name="shape"
        >
          <span className="hidden">shape</span>
          <svg
            width="61"
            height="77"
            viewBox="0 0 61 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <circle
                cx="45.0001"
                cy="1.66667"
                r="1.66667"
                transform="rotate(90 45.0001 1.66667)"
                fill="white"
              ></circle>
              <circle
                cx="16.0001"
                cy="1.66667"
                r="1.66667"
                transform="rotate(90 16.0001 1.66667)"
                fill="white"
              ></circle>
              <circle
                cx="59.0001"
                cy="1.66667"
                r="1.66667"
                transform="rotate(90 59.0001 1.66667)"
                fill="white"
              ></circle>
              <circle
                cx="30.6668"
                cy="1.66667"
                r="1.66667"
                transform="rotate(90 30.6668 1.66667)"
                fill="white"
              ></circle>
              <circle
                cx="1.66683"
                cy="1.66667"
                r="1.66667"
                transform="rotate(90 1.66683 1.66667)"
                fill="white"
              ></circle>
              <circle
                cx="45.0001"
                cy="16.3332"
                r="1.66667"
                transform="rotate(90 45.0001 16.3332)"
                fill="white"
              ></circle>
              <circle
                cx="16.0001"
                cy="16.3332"
                r="1.66667"
                transform="rotate(90 16.0001 16.3332)"
                fill="white"
              ></circle>
              <circle
                cx="59.0001"
                cy="16.3332"
                r="1.66667"
                transform="rotate(90 59.0001 16.3332)"
                fill="white"
              ></circle>
              <circle
                cx="30.6668"
                cy="16.3332"
                r="1.66667"
                transform="rotate(90 30.6668 16.3332)"
                fill="white"
              ></circle>
              <circle
                cx="1.66683"
                cy="16.3332"
                r="1.66667"
                transform="rotate(90 1.66683 16.3332)"
                fill="white"
              ></circle>
              <circle
                cx="45.0001"
                cy="31.0002"
                r="1.66667"
                transform="rotate(90 45.0001 31.0002)"
                fill="white"
              ></circle>
              <circle
                cx="45.0001"
                cy="74.6667"
                r="1.66667"
                transform="rotate(90 45.0001 74.6667)"
                fill="white"
              ></circle>
              <circle
                cx="16.0001"
                cy="31.0002"
                r="1.66667"
                transform="rotate(90 16.0001 31.0002)"
                fill="white"
              ></circle>
              <circle
                cx="16.0001"
                cy="74.6667"
                r="1.66667"
                transform="rotate(90 16.0001 74.6667)"
                fill="white"
              ></circle>
              <circle
                cx="59.0001"
                cy="31.0002"
                r="1.66667"
                transform="rotate(90 59.0001 31.0002)"
                fill="white"
              ></circle>
              <circle
                cx="59.0001"
                cy="74.6667"
                r="1.66667"
                transform="rotate(90 59.0001 74.6667)"
                fill="white"
              ></circle>
              <circle
                cx="30.6668"
                cy="31.0002"
                r="1.66667"
                transform="rotate(90 30.6668 31.0002)"
                fill="white"
              ></circle>
              <circle
                cx="30.6668"
                cy="74.6667"
                r="1.66667"
                transform="rotate(90 30.6668 74.6667)"
                fill="white"
              ></circle>
              <circle
                cx="1.66683"
                cy="31.0002"
                r="1.66667"
                transform="rotate(90 1.66683 31.0002)"
                fill="white"
              ></circle>
              <circle
                cx="1.66683"
                cy="74.6667"
                r="1.66667"
                transform="rotate(90 1.66683 74.6667)"
                fill="white"
              ></circle>
              <circle
                cx="45.0001"
                cy="45.6667"
                r="1.66667"
                transform="rotate(90 45.0001 45.6667)"
                fill="white"
              ></circle>
              <circle
                cx="16.0001"
                cy="45.6667"
                r="1.66667"
                transform="rotate(90 16.0001 45.6667)"
                fill="white"
              ></circle>
              <circle
                cx="59.0001"
                cy="45.6667"
                r="1.66667"
                transform="rotate(90 59.0001 45.6667)"
                fill="white"
              ></circle>
              <circle
                cx="30.6668"
                cy="45.6667"
                r="1.66667"
                transform="rotate(90 30.6668 45.6667)"
                fill="white"
              ></circle>
              <circle
                cx="1.66683"
                cy="45.6667"
                r="1.66667"
                transform="rotate(90 1.66683 45.6667)"
                fill="white"
              ></circle>
              <circle
                cx="45.0001"
                cy="60.3332"
                r="1.66667"
                transform="rotate(90 45.0001 60.3332)"
                fill="white"
              ></circle>
              <circle
                cx="16.0001"
                cy="60.3332"
                r="1.66667"
                transform="rotate(90 16.0001 60.3332)"
                fill="white"
              ></circle>
              <circle
                cx="59.0001"
                cy="60.3332"
                r="1.66667"
                transform="rotate(90 59.0001 60.3332)"
                fill="white"
              ></circle>
              <circle
                cx="30.6668"
                cy="60.3332"
                r="1.66667"
                transform="rotate(90 30.6668 60.3332)"
                fill="white"
              ></circle>
              <circle
                cx="1.66683"
                cy="60.3332"
                r="1.66667"
                transform="rotate(90 1.66683 60.3332)"
                fill="white"
              ></circle>
            </g>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
