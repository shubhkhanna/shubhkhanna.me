import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useDelayedRender from "use-delayed-render";
import { Icons } from "../../assets";
import { ROUTES } from "../../utils/routes";
import { ReactComponent as MenuIcon } from "../../assets/icons/mobileNav_menu.svg";
import { ReactComponent as CrossIcon } from "../../assets/icons/mobileNav_cross.svg";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <nav>
      <div
        className={`w-full justify-between flex items-center ${
          isMenuRendered && "bg-darkshade1"
        } p-5`}
        style={{ zIndex: 101 }}
      >
        <li className="list-none font-bold text-lg">
          <Link to={ROUTES.HOME}>
            <img className="mr-3 w-32" src={Icons.mobileNav_logo} alt="logo" />
          </Link>
        </li>
        <button
          className="burger visible md:hidden"
          aria-label="Toggle menu"
          type="button"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <CrossIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Hamburger Menu */}
      {isMenuMounted && (
        <ul
          className={`menu flex flex-col absolute bg-darkshade1
            ${isMenuRendered && "menuRendered"}`}
        >
          {Object.keys(ROUTES).map((item, index) => (
            <li
              key={index}
              className="border-b border-gray-900 text-gray-100 text-sm font-medium capitalize"
              style={{ transitionDelay: `${150 + index * 30}ms` }}
            >
              <NavLink to={ROUTES[item]} className="flex w-auto pb-4">
                {item.toLowerCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default MobileNavbar;
