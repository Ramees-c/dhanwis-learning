import React, { useState } from "react";
import logo from "../../assets/images/logo/dhanwis_academy_logo.png";

import Darkmode from "../Darkmode/Darkmode";

import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import { NavLink } from "react-router-dom";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Courses",
    link: "/courses",
  },
  {
    id: 4,
    name: "Gallery",
    link: "/gallery",
  },
  // {
  //   id: 5,
  //   name: "Careers",
  //   link: "/careers",
  // },
  {
    id: 6,
    name: "Contact",
    link: "/contact",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#ebb741" : "",
    };
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between">
          {/* Logo and Links section */}
          <div className="flex items-center gap-10">
            <NavLink to="/">
              <img src={logo} alt="" width={"120px"} />
            </NavLink>

            {/* Menu Items */}
            <div>
              <ul
                className={`lg:flex pt-14 lg:pt-0 lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white dark:bg-gray-900 dark:text-white lg:z-auto z-[-1] left-0 md:left-5 w-full lg:w-auto md:pl-0 pl-9  ${
                  isOpen ? "visible opacity-100" : "hidden"
                } lg:opacity-100`}
              >
                {MenuLinks.map((menu, index) => (
                  <li key={index}>
                    <NavLink
                      to={menu.link}
                      className="inline-block px-3 py-2 xl:px-6 lg:py-0 text-lg md:text-lg font-bold text-grey-500 hover:text-primary dark:hover-text-white"
                      style={navLinkStyles}
                      onClick={() => setIsOpen(false)}
                    >
                      {menu.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Navbar Right section */}
          <div className="flex items-center gap-5">
            {/* Dark mode section */}
            <div>
              <Darkmode />
            </div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="text-4xl text-primary cursor-pointer lg:hidden"
            >
              {isOpen ? <IoMdClose /> : <IoIosMenu />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
