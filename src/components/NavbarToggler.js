const NavbarToggler = ({ isActive, onToggle }) => {
  const handleClick = () => {
    onToggle(!isActive); // Call the parent method to update the state
  };
  return (
    <button
      id="navbarToggler"
      name="navbarToggler"
      aria-label="navbarToggler"
      onClick={handleClick}
      className={`navbarToggler absolute block py-[6px] px-3 rounded-[0.5rem] top-1/2 right-4 -translate-y-1/2 focus:ring-2 focus:ring-[rgb(74,108,247)] lg:hidden ${
        isActive ? "navbarTogglerActive" : ""
      }`}
    >
      <span className="bg-gray-800 w-8 h-0.5 block mt-1.5 mb-1.5 relative"></span>
      <span className="bg-gray-800 w-8 h-0.5 block mt-1.5 mb-1.5 relative"></span>
      <span className="bg-gray-800 w-8 h-0.5 block mt-1.5 mb-1.5 relative"></span>
    </button>
  );
};

export default NavbarToggler;
