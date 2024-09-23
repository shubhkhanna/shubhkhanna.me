import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../assets";
import { ROUTES } from "../../utils/routes";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      {/* Logo Link */}
      <li className="list-none font-bold text-lg cursor-pointer">
        <Link to={ROUTES.HOME}>
          <span className="font-black text-xl flex items-center">
            <img
              className="mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500"
              src={Icons.webNav_logo}
              width="60"
              alt="logo"
            />
            {"Shubh".split("").map((letter, index) => {
              return (
                <span
                  key={index}
                  className="hover:text-sky-400 hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim"
                >
                  {letter}
                </span>
              );
            })}
          </span>
        </Link>
      </li>
    </nav>
  );
};

export default Navbar;
