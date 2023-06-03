import React from "react";
import bgImg from "../../../assets/images/appointment.png";
const Contact = () => {
  return (
    <section
      className=""
      style={{
        background: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="py-10 flex flex-col items-center justify-center">
        <h6 className="lg:text-xl md:text-xl text-[18px] font-bold text-secondary mb-3">
          Contact Us
        </h6>
        <h3 className="lg:text-3xl md:text-3xl text-[26px]  font-normal mb-6 text-white">
          Stay connected with us
        </h3>

        <form className=" flex flex-col items-center justify-center">
          <input
            type="email"
            placeholder="Email Address"
            className="lg:w-[450px] md:w-[450px] w-[300px]   mb-5 px-3 py-2 border border-gray-300 rounded focus:outline-none"
          />
          <input
            type="text"
            className="lg:w-[450px] md:w-[450px] w-[300px]  mb-5 px-3 py-2 border border-gray-300 rounded focus:outline-none"
            placeholder="Subject"
          />
          <textarea
            id="message"
            className="lg:w-[450px] md:w-[450px] w-[300px]   px-3 py-2 border border-gray-300 rounded focus:outline-none"
            rows="4"
          ></textarea>
        </form>
      </div>
    </section>
  );
};

export default Contact;
