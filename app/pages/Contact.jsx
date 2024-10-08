import { section } from "framer-motion/client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
const Contact = () => {
  return (
    <section className="mt-20 mx-5">
      <div className="max-w-[550px] m-auto text-center">
        <h1 className=" text-3xl sm:text-4xl md:text-5xl font-semibold z-10 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
          Contact us
        </h1>
        <p className="font-play mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#B1C8BF]">
          We’re here to help you and we’d love to connect with you. We’ll get
          back you within 24h.
        </p>
      </div>

      <div className="flex  flex-wrap">
        <div className="sm:m-10 mt-10 sm:w-[50%] w-full text-[#B1C8BF]  text-base sm:text-lg md:text-xl ">
          <form action="">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <label htmlFor="firstname" className="block mt-4">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  //   value="value"
                  className="mt-2 w-full sm:p-3 p-2 bg-[#001C10] placeholder:text-[#b1c8bf92] rounded-lg border-[1px] border-[#007443A3]"
                />
              </div>
              <div>
                <label htmlFor="lastname" className="block sm:mt-4">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  className="mt-2 sm:p-3 p-2 w-full bg-[#001C10] placeholder:text-[#b1c8bf92] rounded-lg border-[1px] border-[#007443A3]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block mt-4">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className="mt-2 sm:p-3 p-2 w-full bg-[#001C10] placeholder:text-[#b1c8bf92] rounded-lg border-[1px] border-[#007443A3]"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mt-4">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                className="mt-2 sm:p-3 p-2 w-full bg-[#001C10] placeholder:text-[#b1c8bf92] rounded-lg border-[1px] border-[#007443A3]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mt-4">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                id="message"
                placeholder="Message"
                rows={4}
                className=" mb-4 sm:p-3 p-2 w-full bg-[#001C10] placeholder:text-[#b1c8bf92] rounded-lg border-[1px] border-[#007443A3]"
              />
            </div>
            <Link
              href="#"
              className="bg-green-600 px-6 text-sm sm:text-lg py-3 rounded-full text-white hover:bg-green-700"
            >
              Send Message
            </Link>
          </form>
        </div>
        <div className="sm:m-10 sm:w-fit mt-10 ">
          <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold z-10 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
            Chat with us
          </h1>
          <p className="font-play mt-5 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#B1C8BF]">
            chat with our friendly team via livechat
          </p>
          <div className="flex gap-8 mt-2">
            <div className="rounded-xl p-px bg-gradient-to-b from-[#38be87] to-[#00130b]">
              <div className="bg-gradient-to-b from-[#143c2b] to-[#00130b] p-2 sm:p-3 rounded-xl">
                <Link href="#">
                  <Image
                    src="/logos/whatsapp.svg"
                    alt="WhatsApp"
                    width={5}
                    height={5}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </Link>
              </div>
            </div>
            <div className="rounded-xl p-px bg-gradient-to-b from-[#38be87] to-[#00130b]">
              <div className="bg-gradient-to-b from-[#143c2b] to-[#00130b] p-2 sm:p-3 rounded-xl">
                <Link href="#">
                  <img
                    src="/logos/telegram.svg"
                    alt="Telegram"
                    width={5}
                    height={5}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </Link>
              </div>
            </div>
            <div className="rounded-xl p-px bg-gradient-to-b from-[#38be87] to-[#00130b]">
              <div className="bg-gradient-to-b from-[#143c2b] to-[#00130b] p-2 sm:p-3 rounded-xl">
                <Link href="#">
                  <img
                    src="/logos/linkedin.svg"
                    alt="LinkedIn"
                    width={5}
                    height={5}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </Link>
              </div>
            </div>
            <div className="rounded-xl p-px bg-gradient-to-b from-[#38be87] to-[#00130b]">
              <div className="bg-gradient-to-b from-[#143c2b] to-[#00130b] p-2 sm:p-3 rounded-xl">
                <Link href="#">
                  <img
                    src="/logos/insta.svg"
                    alt="Instagram"
                    width={5}
                    height={5}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </Link>
              </div>
            </div>
          </div>

          <h1 className="mt-8 text-2xl sm:text-3xl md:text-4xl font-semibold z-10 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
            Call us
          </h1>
          <p className="font-play mt-5 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#B1C8BF]">
            Call our team Mon-Fri from 9 am to 6 pm
          </p>
          <div className="flex items-center">
            <div className="rounded-xl w-fit mt-2 text-[#38be87] p-px bg-gradient-to-b from-[#38be87] to-[#00130b]">
              <div className="w-fit bg-gradient-to-b from-[#143c2b] to-[#00130b] p-2 sm:p-3 rounded-xl">
                <Link href="#">
                  <img
                    src="/logos/phone.svg"
                    alt="Instagram"
                    width={5}
                    height={5}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </Link>
              </div>
            </div>
            <p className="ml-5 text-base sm:text-lg md:text-xl text-[#B1C8BF]">
              +91 80011 63598
            </p>
          </div>

          <h1 className="mt-8 text-2xl sm:text-3xl md:text-4xl font-semibold z-10 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
            Visit us
          </h1>
          <p className="font-play mt-5 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#B1C8BF]">
            Meet with us in person to our HQ
          </p>
          <div className="flex items-center">
            <div className="rounded-xl w-fit mt-2 text-[#38be87] p-px bg-gradient-to-b from-[#38be87] to-[#00130b]">
              <div className="w-fit bg-gradient-to-b from-[#143c2b] to-[#00130b] p-2 sm:p-3 rounded-xl">
                <Link href="#">
                  <img
                    src="/logos/location.svg"
                    alt="Instagram"
                    width={5}
                    height={5}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </Link>
              </div>
            </div>
            <p className="ml-5 text-base sm:text-lg md:text-xl text-[#B1C8BF]">
              Coochbehar , West Bengal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
