import React, { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Button from "../../components/Shared/Button";

import contact_img from "../../assets/images/contact/contact_img.jpg";
import WhatsappIcon from "../../components/WhatsappIcon/WhatsappIcon";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import CallIcon from "../../components/CallIcon/CallIcon";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const phoneNumber = "+918086487219";
    const { name, message } = formData;

    const whatsappMessage = `Hello, my name is ${name}.\n${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Construct WhatsApp message URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      <div className="container">
        {/* page header */}
        <PageHeader title="Contact" />

        {/* Heading section */}
        <div className="space-y-4 max-w-[2000px] text-center mx-auto mb-5 ">
          <h1 className="uppercase font-bold text-2xl xl:text-4xl text-primary font-titleFont">
            Get in touch
          </h1>
          <p className="font-semibold text-sm lg:text-xl text-black/85 dark:text-white">
            Have a question or just want to say hi? We'd love to hear from you.
          </p>
        </div>

        {/* Form section */}
        <div className="max-w-[1320px] lg:py-[80] py-5 flex xl:flex-row flex-col justify-center items-center mx-auto">
          <div
            className="basis-[50%] ml-0 xl:ml-10 mb-10 xl:mb-0"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <img src={contact_img} alt="image" className="rounded-lg w-full" />
          </div>
          <form
            className="basis-[50%] ml-0 xl:ml-10 w-full"
            data-aos="fade-left"
            data-aos-duration="500"
            onSubmit={sendToWhatsApp}
          >
            <div className="flex flex-col mb-5">
              <input
                type="text"
                name="name"
                placeholder="enter name"
                value={formData.name}
                className="py-3 px-2 rounded-lg outline-none border dark:border-none text-black hover:shadow-lg transition-all"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col mb-8">
              <textarea
                rows="7"
                cols="20"
                className="py-3 px-2 rounded-lg outline-none border dark:border-none text-black hover:shadow-lg transition-all"
                placeholder="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="flex flex-row justify-center">
              <Button
                text="Send Message"
                bgColor="bg-primary"
                textColor="text-black"
                type="submit"
              />
            </div>
          </form>
        </div>

        {/* Google map section */}
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary font-titleFont mb-10">
              CONTACT ADDRESS
            </h2>

            <div className="max-w-[1320px] flex xl:flex-row flex-col justify-center items-center">
              <div
                className="basis-[50%] w-full mb-10 xl:mb-0"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.398985695801!2d75.36439267486898!3d11.877281537925048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43dda7e747ddf%3A0xc606347cd29e5d35!2sDHANWIS%20Learning%20Hub%20%7C%20React%20Js%20%7C%20Flutter%20%7C%20Python%20%7C%20Mernstack%20%7C%20Projects%20%7C%20internship%20Training%20in%20Kannur%20%7C%20Kerala!5e0!3m2!1sen!2sin!4v1738922991940!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div
                className="basis-[50%] ml-0 xl:ml-10 w-full"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <div className="max-w-lg mx-auto p-6 text-justify hero-bg-color shadow-lg rounded-3xl">
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-primary text-lg">
                        Dhanwis Academy
                      </p>
                    </div>
                    <div>
                      <p className="text-black/85 dark:text-white text-left">
                        TKH Building, Opp Jawahar Library,
                      </p>
                      <p className="text-black/85 dark:text-white mt-2">
                        Yogasala Road,
                      </p>
                      <p className="text-black/85 dark:text-white mt-2">
                        Kannur - 670001
                      </p>
                      <p className="text-black/85 dark:text-white mt-2">
                        info@dhanwis.com
                      </p>
                    </div>

                    <div></div>
                    <div>
                      <p className="text-black/85 dark:text-white ">
                        +91 8075487219, +91 9961487219,
                      </p>
                      <p className="text-black/85 dark:text-white mt-2">
                        +91 9946487219
                      </p>
                    </div>

                    <div className="flex items-center gap-7 mt-6">
                      <a
                        href="https://www.instagram.com/dhanwis_academy"
                        target="_blank"
                      >
                        <FaInstagram className="text-2xl hover:text-primary duration-300" />
                      </a>
                      <a
                        href="https://www.facebook.com/dhanwisacademy"
                        target="_blank"
                      >
                        <FaFacebook className="text-2xl hover:text-primary duration-300" />
                      </a>
                      <a href="https://wa.me/+918086487219" target="_blank">
                        <FaWhatsapp className="text-2xl hover:text-primary duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Whtasapp icon */}
      <WhatsappIcon />

      {/* Call Icon */}
      <CallIcon />
    </div>
  );
}

export default ContactPage;
