import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../assets";
import { ROUTES } from "../../utils/routes";

const MobileNavbar = () => {
  return (
    <nav>
      <div
        className={`w-full justify-between flex items-center p-5`}
        style={{ zIndex: 101 }}
      >
        <li className="list-none font-bold text-lg">
          <Link to={ROUTES.HOME}>
            <img className="mr-3 w-32" src={Icons.mobileNav_logo} alt="logo" />
          </Link>
        </li>
      </div>
    </nav>
  );
};

export default MobileNavbar;
