import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Button from "../../components/Shared/Button";

import contact_img from "../../assets/images/contact/contact_img_1.jpg";
import WhatsappIcon from "../../components/WhatsappIcon/WhatsappIcon";

function ContactPage() {
  return (
    <div>
      <div className="container">
        {/* page header */}
        <PageHeader title="Contact Us" />

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
            className="basis-[50%] ml-0 xl:ml-10"
            data-aos="fade-left"
            data-aos-duration="500"
          >
             <div className="flex flex-col mb-5">
                <input
                  type="text"
                  name="name"
                  placeholder="enter name"
                  className="py-3 px-2 rounded-lg outline-none border dark:border-none text-black hover:shadow-lg transition-all"
                />
              </div>

              <div className="flex flex-col mb-5">
                <input
                  type="email"
                  name="email"
                  placeholder="enter email"
                  className="py-3 px-2 rounded-lg outline-none border dark:border-none text-black hover:shadow-lg transition-all"
                />
              </div>

            <div className="flex flex-col mb-8">
              <input
                type="number"
                name="number"
                placeholder="enter contact number"
                className="py-3 px-2 rounded-lg outline-none border dark:border-none text-black hover:shadow-lg transition-all"
              />
            </div>

            <div className="flex flex-col mb-8">
              <textarea
                rows="3"
                cols="20"
                className="py-3 px-2 rounded-lg outline-none border dark:border-none text-black hover:shadow-lg transition-all"
                placeholder="message"
              ></textarea>
            </div>

            <div className="flex flex-row justify-center">
              <Button
                text="Send Message"
                bgColor="bg-primary"
                textColor="text-black"
              />
            </div>
          </form>
        </div>

        {/* Google map section */}
        <section className="py-10 px-5">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Our Location
            </h2>
            <p className="text-lg text-black/85 dark:text-white mb-8">
              Find us at the address below.
            </p>

            <div
              className="w-full h-96 rounded-lg shadow-lg overflow-hidden"
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
          </div>
        </section>
      </div>

      {/* Whtasapp icon */}
      <WhatsappIcon />
    </div>
  );
}

export default ContactPage;





{/* <div className="flex flex-col xl:flex-row justify-between w-full pt-20 pb-20">
          <div
            className="w-full xl:w-2/5 space-y-5 mb-7 xl:mb-0"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <img src={contact_img} alt="image" className="rounded-lg w-full" />
          </div>
          <form
            className="w-full xl:w-2/4"
            data-aos="fade-left"
            data-aos-duration="500"
          >
             <div className="flex flex-col mb-5">
                <input
                  type="text"
                  name="name"
                  placeholder="enter name"
                  className="py-3 px-2 rounded-lg outline-none border dark:border-none text-black hover:shadow-lg transition-all"
                />
              </div>

              <div className="flex flex-col mb-5">
                <input
                  type="email"
                  name="email"
                  placeholder="enter email"
                  className="py-3 px-2 rounded-lg outline-none border dark:border-none text-black hover:shadow-lg transition-all"
                />
              </div>

            <div className="flex flex-col mb-8">
              <input
                type="number"
                name="number"
                placeholder="enter contact number"
                className="py-3 px-2 rounded-lg outline-none border dark:border-none text-black hover:shadow-lg transition-all"
              />
            </div>

            <div className="flex flex-col mb-8">
              <textarea
                rows="3"
                cols="20"
                className="py-3 px-2 rounded-lg outline-none border dark:border-none text-black hover:shadow-lg transition-all"
                placeholder="message"
              ></textarea>
            </div>

            <div className="flex flex-row justify-center">
              <Button
                text="Send Message"
                bgColor="bg-primary"
                textColor="text-black"
              />
            </div>
          </form>
        </div> */}