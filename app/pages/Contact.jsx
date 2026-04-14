import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  const [fields, setFields] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  const handleChange = (e) =>
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!fields.firstname || !fields.email || !fields.message) {
      setStatus("invalid");
      return;
    }
    setStatus("loading");

    const formData = new FormData();
    formData.append("access_key", "25b8213a-70fe-4420-b823-96971e32230a");
    formData.append("name", `${fields.firstname} ${fields.lastname}`);
    Object.entries(fields).forEach(([k, v]) => formData.append(k, v));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFields({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="mt-20 mx-5" id="contact">
      <div className="max-w-[550px] m-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold z-10 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
          Contact us
        </h1>
        <p className="font-play mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#B1C8BF]">
          We're here to help you and we'd love to connect with you. We'll get
          back you within 24h.
        </p>
      </div>

      <div className="flex md:justify-center justify-start flex-wrap">
        <div className="sm:m-10 mt-10 lg:w-[50%] w-full text-[#B1C8BF] text-base sm:text-lg md:text-xl">
          {/* Honeypot spam protection */}
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />

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
                value={fields.firstname}
                onChange={handleChange}
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
                value={fields.lastname}
                onChange={handleChange}
                className="mt-2 sm:p-3 p-2 w-full bg-[#001C10] placeholder:text-[#b1c8bf92] rounded-lg border-[1px] border-[#007443A3]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block mt-4">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={fields.email}
              onChange={handleChange}
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
              value={fields.phone}
              onChange={handleChange}
              className="mt-2 sm:p-3 p-2 w-full bg-[#001C10] placeholder:text-[#b1c8bf92] rounded-lg border-[1px] border-[#007443A3]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mt-4">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              rows={4}
              value={fields.message}
              onChange={handleChange}
              className="mb-4 sm:p-3 p-2 w-full bg-[#001C10] placeholder:text-[#b1c8bf92] rounded-lg border-[1px] border-[#007443A3]"
            />
          </div>

          {status === "invalid" && (
            <p className="mb-3 text-sm text-red-400">
              Please fill in first name, email, and message.
            </p>
          )}
          {status === "success" && (
            <p className="mb-3 text-sm text-green-400">
              Message sent! We'll get back to you within 24h.
            </p>
          )}
          {status === "error" && (
            <p className="mb-3 text-sm text-red-400">
              Something went wrong. Please try again.
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="bg-green-600 px-6 text-sm sm:text-lg py-3 rounded-full text-[#fff] hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </div>

        {/* rest of your component unchanged below */}
        <div className="sm:m-10 sm:w-fit mt-10">
          {/* ... Chat with us, Call us, Visit us sections ... */}
          <div className="sm:m-10 sm:w-fit mt-10 ">
            <div>
              <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold z-10 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
                Chat with us
              </h1>
              <p className="font-play mt-5 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#B1C8BF]">
                chat with our friendly team via livechat
              </p>
              <div className="flex gap-8 mt-2 ">
                <div className="rounded-xl p-px bg-gradient-to-b from-[#38be87] to-[#00130b]">
                  <div className="bg-gradient-to-b from-[#143c2b] to-[#00130b] p-2 sm:p-3 rounded-xl">
                    <Link href="https://wa.me/+917427983047" target="_blank">
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
                    <Link
                      href="https://www.facebook.com/profile.php?id=61560007932405"
                      target="_blank"
                    >
                      <Image
                        src="/logos/facebook-green.svg"
                        alt="Facebook"
                        width={5}
                        height={5}
                        className="w-5 h-5 sm:w-6 sm:h-6 rounded-md"
                      />
                    </Link>
                  </div>
                </div>
                <div className="rounded-xl p-px bg-gradient-to-b from-[#38be87] to-[#00130b]">
                  <div className="bg-gradient-to-b from-[#143c2b] to-[#00130b] p-2 sm:p-3 rounded-xl">
                    <Link
                      href="https://www.linkedin.com/company/foolideas/posts/?feedView=all"
                      target="_blank"
                    >
                      <Image
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
                    <Link
                      href="https://www.instagram.com/foolideas/"
                      target="_blank"
                    >
                      <Image
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
            </div>
            <div>
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
                      <Image
                        src="/logos/phone.svg"
                        alt="phone"
                        width={5}
                        height={5}
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                    </Link>
                  </div>
                </div>
                <p className="ml-5 text-base sm:text-lg md:text-xl text-[#B1C8BF]">
                  +91 74279 83047
                </p>
              </div>
            </div>

            <div>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
