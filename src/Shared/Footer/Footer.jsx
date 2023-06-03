import React from "react";
import footer from "../../assets/images/footer.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className=" "
      style={{
        background: `url(${footer})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex lg:flex-row md:flex-row flex-col  pt-20 lg:ml-0 md:ml-0 ml-7     ">
        {/* left */}
        <div className="flex-1 flex flex-col lg:mb-0 md:mb-0 mb-16 ">
          <span className="text-[18px] mb-5 font-bold">SERVICES</span>
          <Link className="text-base font-normal mb-3 " to="/">
            Emergency Checkup
          </Link>
          <Link className="text-base font-normal mb-3" to="/">
            Monthly Checkup
          </Link>
          <Link className="text-base font-normal mb-3" to="/">
            Weekly Checkup
          </Link>
          <Link className="text-base font-normal mb-3" to="/">
            Deep Checkup
          </Link>
        </div>
        {/* center */}
        <div className="flex-1 flex flex-col   lg:items-center md:items-center items-start text-left lg:mb-0 md:mb-0 mb-16  ">
          <span className="text-[18px] mb-5 font-bold">ORAL HEALTH</span>
          <Link className="text-base font-normal mb-3 text-left" to="/">
            Fluoride Treatment
          </Link>
          <Link className="text-base font-normal mb-3 text-left" to="/">
            Cavity Filling
          </Link>
          <Link className="text-base font-normal mb-3" to="/">
            Teeth Whitening
          </Link>
        </div>
        {/* right */}
        <div className="flex-1 flex flex-col   lg:items-end md:items-end items-start lg:mb-0 md:mb-0 mb-16 ">
          <span className="text-[18px] mb-5 font-bold text-start">
            OUR ADDRESS
          </span>
          <Link className="text-base font-normal mb-3" to="/">
            New York - 101010 Hudson
          </Link>
        </div>
      </div>
      <p className="font-normal text-sm text-center pt-[70px] pb-8 ">
        &copy; {currentYear} Doctors Portal All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
