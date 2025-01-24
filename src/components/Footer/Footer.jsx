import React from "react";

import logo from "../../assets/images/logo/Dhanwis_logo1.png";

import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaWhatsapp,
} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

function Footer() {
  const FooterLinks = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "About",
      path: "/",
    },
    {
      id: 3,
      title: "Courses",
      path: "/",
    },
    {
      id: 4,
      title: "Gallery",
      path: "/",
    },
    {
      id: 5,
      title: "Careers",
      path: "/",
    },
    {
      id: 6,
      title: "Contact",
      path: "/",
    },
  ];

  return (
    <div className="hero-bg-color rounded-3xl">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* Company details */}
          <div className=" py-8 px-4">
            <a href="">
              <img width="120px" src={logo} alt="" />
            </a>
            <p className="text-gray-700 dark:text-white/70 lg:pr-24 pt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              nihil iusto dolores aliquid sit!
            </p>
          </div>
          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      className="text-gray-700 hue-rotate-30 hover:dark:text-white dark:text-gray-400 hover:text-black duration-300 "
                      href=""
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Second col links */}
            {/* <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      className="text-gray-600 hue-rotate-30 hover:dark:text-white dark:text-gray-400 hover:text-black duration-300 "
                      href=""
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Company address */}
            <div className="py-8 px-2 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-4">
                  <FaLocationArrow className="text-xl text-primary" />
                  <p>
                    TKH Building, Opp Jawahar Library, Yogasala Road, Kannur -
                    670001
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <FaMobileAlt className="text-xl text-primary" />
                  <p>
                    +91 8075487219 <br /> +91 9961487219 <br /> +91 9946487219
                  </p>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-7 mt-6">
                  <a href="">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="">
                    <FaFacebook className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="">
                    <FaWhatsapp className="text-3xl hover:text-primary duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="text-center py-6 border-t-2 border-black/15 dark:border-white/15">
          <span className="text-sm text-gray-700 dark:text-white/70">
            © 2025 Dhanwis, All Rights Reserved. Design By Dhanwis
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;