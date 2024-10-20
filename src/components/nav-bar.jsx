import Logo from "../assets/images/logo.png";
import { NavLinks } from "../constants/nav-links";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <nav
      className="flex fixed w-[89%] left-1/2 rounded-full translate-x-[-50%] text-te bg-transparent py-1 px-8  top-4
                  bg-white text-neutral-600 items-center justify-between z-50 border-b"
    >
      {/* Logo */}
      <NavLink className="w-16 h-16">
        <img
          src={Logo}
          alt="logo"
          className="w-full h-full oject-cover aspect-square"
        />
      </NavLink>

      <ul className="flex items-center gap-x-4">
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
