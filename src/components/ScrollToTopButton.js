import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        className="flex transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] 
        text-white bg-[rgb(74,108,247)] rounded-md justify-center items-center
        w-10 h-10 z-999 right-8 left-auto bottom-8 fixed"
        onClick={scrollToTop}
      >
        <span className="border-white border-l border-t w-3 h-3 pt-[6px] transform rotate-45 mt-[6px]"></span>
      </button>
    )
  );
};

export default ScrollToTopButton;
