import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/images/logo.png";
import { NavLinks } from "../constants/nav-links";
import { NavLink } from "react-router-dom";
import { HiMenuAlt4, HiX } from "react-icons/hi"; // Import icons for hamburger menu

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle
  const menuRef = useRef(null); // Ref for the menu container

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="flex fixed w-[89%] left-1/2 rounded-full translate-x-[-50%] py-1 px-8 top-4 text-neutral-600 items-center justify-between z-50 md:border-b lg:bg-white bg-transparent">
      {/* Logo */}
      <NavLink className="w-16 h-16">
        <img
          src={Logo}
          alt="logo"
          className="w-full h-full object-cover aspect-square"
        />
      </NavLink>

      {/* Hamburger Icon (Mobile) */}
      <div className="block lg:hidden ml-auto" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <HiX className="w-8 h-8 text-black" />
        ) : (
          <HiMenuAlt4 className="w-8 h-8 text-black" />
        )}
      </div>

      {/* Nav Links */}
      <ul
        ref={menuRef} // Attach ref to the menu
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row items-center gap-y-4 lg:gap-x-4 bg-white lg:bg-transparent p-4 lg:p-0 fixed lg:relative top-20 lg:top-auto right-4 lg:right-auto transform translate-x-0 rounded-lg shadow-lg lg:shadow-none transition-all ease-in-out duration-300 z-50`}
      >
        {NavLinks.map((link) => (
          <li key={link.id}>
            <NavLink
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              to={link.path}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
