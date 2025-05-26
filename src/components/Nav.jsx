import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-red-400 font-semibold" : "text-black";

  return (
    <>
      <div className="w-full px-4 py-3  bg-white fixed top-0 z-50">
        <div className="flex justify-between items-center">
          {/* Desktop Nav */}
          <div className="hidden md:flex justify-center items-center gap-6 text-lg font-semibold text-gray-700 dark:text-gray-300">
            <NavLink className={navLinkClass} to="/home">Home</NavLink>
            <NavLink className={navLinkClass} to="/recipes">Recipes</NavLink>
            <NavLink className={navLinkClass} to="/about">About</NavLink>
            <NavLink className={navLinkClass} to="/favroite">Favroite</NavLink>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <img width="30" height="30" src="https://img.icons8.com/windows/32/multiply.png" alt="close" />
              ) : (
                <img width="25" height="25" src="https://img.icons8.com/material-rounded/24/menu--v1.png" alt="menu" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 shadow-md w-[50%]  bg-white px-6 py-4">
            <div className="flex flex-col gap-4 text-lg">
              <NavLink onClick={() => setIsOpen(false)} className={navLinkClass} to="/home">Home</NavLink>
              <NavLink onClick={() => setIsOpen(false)} className={navLinkClass} to="/recipes">Recipes</NavLink>
              <NavLink onClick={() => setIsOpen(false)} className={navLinkClass} to="/about">About</NavLink>
              <NavLink onClick={() => setIsOpen(false)} className={navLinkClass} to="/favroite">Favroite</NavLink>
            </div>
          </div>
        )}
      </div>

      {/* Padding to avoid content hidden behind fixed nav */}
      <div className="h-[70px] md:h-[80px]"></div>
    </>
  );
};

export default Nav;
