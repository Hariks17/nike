import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container  flex items-center justify-between">
        <a href="">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        <ul className="flex flex-1 items-center justify-center gap-16 text-gray-500 hover:text-gray-900 max-lg:hidden">
          {navLinks.map((nav, index) => (
            <li key={index}>
              <a href={nav.href}>{nav.label}</a>
            </li>
          ))}
        </ul>

        <div>
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className="hidden max-lg:block"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
