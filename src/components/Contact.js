import React from "react";

const Contact = () => {
  return (
    <div className="py-[120px] w-full mx-auto px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]">
      <div className="flex flex-wrap -mx-[16px]">
        <div className="px-4 w-full">
          <div className="text-center max-w-[700px] mb-[50px] mx-auto">
            <span className="text-[rgb(74,108,247)] font-semibold text-[1.125rem] leading-7 block mb-2">
              Let's Connect
            </span>
            <h2 className="md:text-[45px] sm:text-[2.25rem] sm:leading-[2.5rem] text-[rgb(9,14,52)] font-bold text-[1.875rem] leading-[2.25rem] mb-5">
              Ready to start your project?
            </h2>
            <p className="text-[rgb(149,156,177)] font-medium leading-7 text-[1.125rem]">
              Have a project in mind? I'm here to help turn your vision into reality. I specialize in creating high-quality web and software solutions, from back-end development to front-end interfaces, with robust cloud solutions.
            </p>
            <p className="text-[rgb(149,156,177)] font-medium leading-7 text-[1.125rem] mt-4">
              Feel free to reach out to me via Upwork's messaging system. I look forward to hearing about your project and how we can work together to achieve your goals.
            </p>
            <div className="text-center mt-6">
              <a
                href="https://www.upwork.com/freelancers/~01f9c957ab1bcf5876"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-blue-600 rounded-full px-9 py-4 font-semibold text-white transition-all duration-150 ease-in-out"
              >
                Visit My Upwork Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
