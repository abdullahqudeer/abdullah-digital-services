import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCode,
  faDatabase,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const myServices = [
    {
      title: "Frontend Development",
      description: `Build dynamic, responsive web applications using Angular, React, and Next.js for a seamless user experience.`,
      icon: faCode,
    },
    {
      title: "Backend Solutions",
      description: `Develop scalable and secure APIs with .NET Core, tailored to handle complex business logic efficiently.`,
      icon: faServer,
    },
    {
      title: "Database Management",
      description: `Optimize and manage SQL Server databases for high-performance data storage and retrieval.`,
      icon: faDatabase,
    },
    {
      title: "Cloud Deployment",
      description: `Utilize AWS cloud solutions to build reliable, scalable, and efficient infrastructures that grow with your business needs.`,
      icon: faCloud,
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:max-w-[1320px] 2xl:max-w-[1320px]">
        <div className="pt-[120px] pb-[90px] border-t border-[#e9ecf8]">
          <div className="flex flex-wrap -mx-4 items-stretch gap-4">
            <div className="px-4 w-full">
              <div className="text-center max-w-[600px] mb-[70px] mx-auto">
                <span className="text-[rgba(74,108,247,1)] font-semibold text-[1.125rem] leading-[1.75rem] block mb-2">
                  What I Offer?
                </span>
                <h2 className="md:text-[45px] text-[2.25rem] leading-[2.5rem] text-[rgba(9,14,52)] font-bold text-[1.875rem] leading-[2.25rem] mb-5">
                  My Services
                </h2>
                <p className="text-[rgba(149,156,177,1)] font-medium text-[1.125rem] leading-[1.75rem]">
                  I provide frontend and backend development, database
                  management, and cloud deployment for scalable applications.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4 items-stretch">
            {myServices.map((item, index) => (
              <div className="px-4 w-full md:w-1/2 lg:w-1/4" key={index}>
                <div
                  className="group transition duration-200 shadow-[0px_11px_41px_-11px_rgba(9,14,52,0.1)] text-center py-10 px-8 
                    bg-white rounded-lg overflow-hidden mb-8 z-10 relative hover:bg-[rgba(74,108,247)] h-full flex flex-col justify-between"
                >
                  <div className="group-hover:text-[rgb(74,108,247)] group-hover:bg-white flex mx-auto mb-6 text-[rgb(255,255,255)] bg-[rgb(74,108,247)] rounded-full justify-center items-center w-[5rem] h-[5rem]">
                    <FontAwesomeIcon
                      className="fill-current w-8 h-8"
                      icon={item.icon}
                    ></FontAwesomeIcon>
                  </div>
                  <h3 className=" group-hover:text-white 2xl:text-2xl 2xl:leading-8 lg:text-xl lg:leading-7 sm:text-2xl sm:leading-8 text-[rgba(9,14,52,var(--tw-text-opacity))] font-bold text-xl leading-7 mb-3">
                    {item.title}
                  </h3>
                  <p className="group-hover:text-white text-[rgba(149,156,177)] leading-[1.625] font-medium text-sm leading-5">
                    {item.description}
                  </p>
                  <div>
                    <span className="absolute right-0 top-0">
                      <svg
                        width="218"
                        height="109"
                        viewBox="0 0 218 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          opacity="0.05"
                          cx="156.5"
                          cy="-47.5"
                          r="156.5"
                          fill="white"
                        ></circle>
                        <circle
                          opacity="0.08"
                          cx="210"
                          cy="6"
                          r="62"
                          fill="white"
                        ></circle>
                      </svg>
                    </span>
                    <span className="absolute left-1 bottom-1">
                      <svg
                        width="23"
                        height="32"
                        viewBox="0 0 23 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="21.262"
                          cy="1.12081"
                          r="1.12081"
                          transform="rotate(90 21.262 1.12081)"
                          fill="white"
                        ></circle>
                        <circle
                          cx="21.262"
                          cy="30.4863"
                          r="1.12081"
                          transform="rotate(90 21.262 30.4863)"
                          fill="white"
                        ></circle>
                        <circle
                          cx="1.76005"
                          cy="1.12081"
                          r="1.12081"
                          transform="rotate(90 1.76005 1.12081)"
                          fill="white"
                        ></circle>
                        <circle
                          cx="1.76005"
                          cy="30.4863"
                          r="1.12081"
                          transform="rotate(90 1.76005 30.4863)"
                          fill="white"
                        ></circle>
                        <circle
                          cx="11.6228"
                          cy="1.12081"
                          r="1.12081"
                          transform="rotate(90 11.6228 1.12081)"
                          fill="white"
                        ></circle>
                        <circle
                          cx="11.6228"
                          cy="30.4863"
                          r="1.12081"
                          transform="rotate(90 11.6228 30.4863)"
                          fill="white"
                        ></circle>
                        <circle
                          cx="21.262"
                          cy="10.9839"
                          r="1.12081"
                          transform="rotate(90 21.262 10.9839)"
                          fill="white"
                        ></circle>
                        <circle
                          cx="1.76005"
                          cy="10.9839"
                          r="1.12081"
                          transform="rotate(90 1.76005 10.9839)"
                          fill="white"
                        ></circle>
                        <circle
                          cx="11.6228"
                          cy="10.9839"
                          r="1.12081"
                          transform="rotate(90 11.6228 10.9839)"
                          fill="white"
                        ></circle>
                        <circle
                          cx="21.262"
                          cy="20.8469"
                          r="1.12081"
                          transform="rotate(90 21.262 20.8469)"
                          fill="white"
                        ></circle>
                        <circle
                          cx="1.76005"
                          cy="20.8469"
                          r="1.12081"
                          transform="rotate(90 1.76005 20.8469)"
                          fill="white"
                        ></circle>
                        <circle
                          cx="11.6228"
                          cy="20.8469"
                          r="1.12081"
                          transform="rotate(90 11.6228 20.8469)"
                          fill="white"
                        ></circle>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
