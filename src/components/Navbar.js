import { React, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import NavbarToggler from "./NavbarToggler";

const Navbar = ({ onLinkClick, refs }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavbarToggleOn, setIsNavbarToggleOn] = useState(false);

  const handleNavbarToggle = (toggleValue) => {
    setIsNavbarToggleOn(toggleValue);
  };

  const handleNavbarLinkClick = (scrollToSection) => {
    setIsNavbarToggleOn(false);
    onLinkClick(scrollToSection);
  };
  const handleScroll = useCallback(() => {
    setIsSticky(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <header
        className={`transition-colors transition-opacity transition-shadow transition-transform transition-filter 
          duration-150 ease-out bg-white bg-opacity-80 top-0 left-0 z-40 w-full flex items-center justify-between backdrop-blur-sm ${
            isSticky ? "fixed shadow-inset-bottom" : "absolute"
          }`}
      >
        <div className="w-full mx-auto px-4 max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1140px] xl:max-w-[1320px]">
          <div className="flex justify-between items-center -mx-4 relative">
            <div className="px-4 max-w-full w-[15rem]">
              <Link to="/" className="w-full block  text-inherit no-underline">
                <img
                  src="images/logo.svg"
                  alt="logo"
                  className={`w-full ${isSticky ? "py-4" : "py-6"}`}
                ></img>
              </Link>
            </div>
            <div className="px-4 justify-between items-center w-full flex">
              <div>
                <NavbarToggler
                  isActive={isNavbarToggleOn}
                  onToggle={handleNavbarToggle}
                />
                <nav
                  id="navbarCollapse"
                  className={`max-w-[250px] lg:pl-4 lg:pr-4 lg:pt-0 lg:pb-0 lg:bg-transparent lg:max-w-full lg:w-full lg:block lg:static py-5 bg-white rounded-md w-full top-[100%] right-4 shadow-lg lg:shadow-none  absolute ${
                    isNavbarToggleOn ? "block" : "hidden"
                  }`}
                >
                  <ul className="lg:flex">
                    <li className="relative group">
                      <a
                        href="#home"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavbarLinkClick(refs.home);
                        }}
                        className="menu-scroll lg:px-0 lg:py-6 lg:inline-flex lg:mr-0 text-custom-color text-base leading-6 py-2 flex mx-8 group-hover:text-[rgb(74,108,247)]"
                      >
                        Home
                      </a>
                    </li>
                    <li className="relative group">
                      <a
                        href="#about"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavbarLinkClick(refs.about);
                        }}
                        className="menu-scroll lg:px-0 lg:py-6 lg:inline-flex lg:mr-0 text-custom-color text-base leading-6 py-2 flex mx-8 group-hover:text-[rgb(74,108,247)]"
                      >
                        About
                      </a>
                    </li>
                    <li className="relative group">
                      <a
                        href="#services"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavbarLinkClick(refs.services);
                        }}
                        className="menu-scroll lg:px-0 lg:py-6 lg:inline-flex lg:mr-0 text-custom-color text-base leading-6 py-2 flex mx-8 group-hover:text-[rgb(74,108,247)]"
                      >
                        Services
                      </a>
                    </li>
                    <li className="relative group">
                      <a
                        href="#skills"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavbarLinkClick(refs.skills);
                        }}
                        className="menu-scroll lg:px-0 lg:py-6 lg:inline-flex lg:mr-0 text-custom-color text-base leading-6 py-2 flex mx-8 group-hover:text-[rgb(74,108,247)]"
                      >
                        Skills
                      </a>
                    </li>
                    <li className="relative group">
                      <a
                        href="#resume"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavbarLinkClick(refs.resume);
                        }}
                        className="menu-scroll lg:px-0 lg:py-6 lg:inline-flex lg:mr-0 text-custom-color text-base leading-6 py-2 flex mx-8 group-hover:text-[rgb(74,108,247)]"
                      >
                        Resume
                      </a>
                    </li>
                    <li className="relative group">
                      <a
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavbarLinkClick(refs.contact);
                        }}
                        className="menu-scroll lg:px-0 lg:py-6 lg:inline-flex lg:mr-0 text-custom-color text-base leading-6 py-2 flex mx-8 group-hover:text-[rgb(74,108,247)]"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
