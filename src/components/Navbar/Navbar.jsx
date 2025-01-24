import React, { useState } from "react";
import logo from "../../assets/images/logo/Dhanwis_logo1.png";

import Darkmode from "../Darkmode/Darkmode";

import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

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
  const [isOpen, setIsOpen] = useState(false);

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
            <a href="">
              <img src={logo} alt="" width={"120px"} />
            </a>

            <div
              onClick={() => setIsOpen(!isOpen)}
              className="text-4xl text-primary absolute right-6 top-6 cursor-pointer md:hidden"
            >
              {isOpen ? <IoMdClose /> : <IoIosMenu />}
            </div>

            {/* Menu Items */}
            <div>
              <ul
                className={`md:flex pt-10 sm:pt-0 md:items-center md:pb-0 pb-12 absolute md:static bg-white dark:bg-gray-900 dark:text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  ${
                  isOpen ? "top-20 opacity-100" : "top-[-490px]"
                } md:opacity-100`}
              >
                {MenuLinks.map((menu, index) => (
                  <li key={index}>
                    <a
                      href=""
                      className="inline-block px-4 py-2 sm:py-0 font-semibold text-grey-500 hover:text-primary dark:hover-text-white"
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
