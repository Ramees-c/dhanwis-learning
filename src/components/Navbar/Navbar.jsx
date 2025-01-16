import React from "react";
import logo from "../../assets/images/logo/Learning Hub 4.png"

import Darkmode from "../Darkmode/Darkmode";


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
  {
    id: 5,
    name: "Careers",
    link: "/careers",
  },
  {
    id: 6,
    name: "Contact",
    link: "/contact",
  },
];

function Navbar() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between">
          {/* Logo and Links section */}
          <div className="flex items-center gap-10">
            {/* <a
              href=""
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Dhanwis
            </a> */}
            <a href=""><img src={logo} alt="" width={'100px'} /></a>

            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((menu, index) => (
                  <li key={index}>
                    <a
                      href=""
                      className="inline-block px-4 font-semibold text-grey-500 hover:text-black dark:hover-text-white"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Navbar Right section */}
          <div className="flex items-center">
            {/* Dark mode section */}
            <div>
              <Darkmode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
